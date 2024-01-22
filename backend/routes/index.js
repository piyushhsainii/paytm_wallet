const express = require('express')
const zod = require('zod')
const userModel = require('../db')
const router = express.Router()
const jwt = require('jsonwebtoken')

const userSchema = zod.object({
    username:zod.string().min(3),
    password:zod.string().min(4),
    firstName:zod.string().min(4),
    lastName:zod.string().min(4)
})

router.post('/signup', async(req,res)=>{
    const { username , password, firstName, lastName } = req.body
    const body = {
        username,
        password,
        firstName,
        lastName
    }
    const user = await userModel.findOne({username})
    const { success} = userSchema.safeParse(body)
    if(success){
        return res.json({
            success:false,
            message:"invalid data"
        }).status(400)
    }
    if(user){
        return res.json({
            success:false,
            message:"User already exists"
        }).status(400)
    }
    const Newuser = await userModel.create(body)
    const token = await jwt.sign({id:Newuser._id},"secretToken")
    return res.json({
        success:true,
        user,
        token:token
    }).status(200)

})
module.exports = router