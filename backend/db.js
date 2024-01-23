const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@cluster0.b2pt2yd.mongodb.net/payTM').then(()=>{
    console.log('Db connected')
})


const userSchema = mongoose.Schema({
    username:{type:String, required:true},
    password:{type:String, required:true},
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
})

module.exports = mongoose.model('user',userSchema)