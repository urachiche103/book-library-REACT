require('dotenv').config();
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userRoutes = require("./routes/user.routes")
const bookRoutes = require("./routes/book.routes")

const app = express()

app.use(cors())
app.use(express.json())
app.set('secretKey', process.env.JWTSECRET)

mongoose.connect(process.env.URL)
.then(()=>{
    console.log(`Database connection successful`)
})
.catch((err)=>{
    console.log(`Error connecting to database: ${err}`)
})

app.use("/api/users", userRoutes)
app.use("/api/books", bookRoutes)

app.listen(process.env.PORT, ()=> {
    console.log(`API working in port ${process.env.PORT}`)
})