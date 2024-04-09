const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: false},
    name: {type: String, required: false},
    //enabled: {type: Boolean, required: false, defaultValue: false},
    //activationCode: {type: String, required: false},
})

module.exports = mongoose.model("users", userSchema)