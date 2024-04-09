const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userRoutes = require("./routes/user.routes")
const bookRoutes = require("./routes/book.routes")

const app = express()

app.use(cors())

app.use(express.json())

mongoose.connect("mongodb+srv://urachiche103:rtWR8FZyIwwZCY23@cluster0.dlvfirs.mongodb.net/book-library")
.then(()=>{
    console.log(`Database connection successful`)
})
.catch((err)=>{
    console.log(`Error connecting to database: ${err}`)
})

app.use("/api/users", userRoutes)
app.use("/api/books", bookRoutes)

app.listen(3000, ()=> {
    console.log(`API working in port 3000`)
})