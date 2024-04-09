const jwt = require("jsonwebtoken")
const User = require("./models/user.model")

async function isAuthenticated(req, res, next){
    const token = req.query.token
    if(!token){
        return res.status(401).json({msg: "not authenticated"})
    } else {
        const tokenDecoded = jwt.verify(token, "ifB(J)A&Jhv")
        const userId = tokenDecoded.userId
        const foundUser = await User.findById(userId)
        if(!foundUser){
            return res.status(401).json({msg: "token not valid"})
        } else {
            next()
        }
    }
}

async function isAdmin(req, res, next){
    const token = req.query.token
    if(!token){
        return res.status(401).json({msg: "not authenticated"})
    } else {
        const tokenDecoded = jwt.verify(token, "ifB(J)A&Jhv")
        const userId = tokenDecoded.userId
        const foundUser = await User.findById(userId)
        if(!foundUser){
            return res.status(401).json({msg: "token not valid"})
        } else {
            if(foundUser.role !== "admin"){
                return res.status(403).json({msg: "unauthorized"})
            } else {
                next()
            }
        }
    }
}

module.exports = {
    isAuthenticated,
    isAdmin,
}