const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Db connected')
})


const userSchema = mongoose.Schema({
    username:{type:String, required:true},
    password:{type:String, required:true},
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
})

module.exports = mongoose.model('user',userSchema)