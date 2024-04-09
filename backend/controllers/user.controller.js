const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../middlewares/models/user.model")

async function login(req, res){
    try {
        const foundUser = await User.findOne({email: req.body.email})
        if(!foundUser){
            return res.status(400).json({msg: "credentials not valid"})
            } else {
                const resultCompare = await bcrypt.compare(req.body.password, foundUser.password)
                if(!resultCompare){
                    return res.status(400).json({msg: "credentials not valid"})
                } else {
                    const token = jwt.sign({userId: foundUser._id}, "ifB(J)A&Jhv", {expiresIn: '1h'})
                    return res.status(200).json({msg: "ok", token: token})
                }
            }
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: "access error"})
    }
}

async function signup(req, res){
    try {
        const hash = await bcrypt.hash(req.body.password, 10)
        // const activationCode = randomGen()
        const newUser = new User({email: req.body.email, password: hash, role: 'user', name: req.body.name})
        await newUser.save()

        //mailService.send (req.body.email, "confirm your user with the code ${activationCode}")
        //localhost:3000/users/confirmation/_id

        return res.json({msg: "register successfully"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: "register error"})
    }
}

// async function confirmUser(req, res){
//     try{
//         const foundUser = await User.findById(req.body.userId)
//         if(!foundUser){
//             return res.status(400).json({msg: "user not activated"})
//         } else {
//             if(!foundUser.activationCode !== req.body.activationCode){
//                 error
//             } else {
//                 await User.findByIdAndUpdate(userId, {enabled: true, activationCode: null})
//                 return res.status(200).json({msg: "activated user"})
//             }
//         }
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({msg: "confirmation error"})
//     }
// }

module.exports = {
    login,
    signup,
    // confirmUser,
}