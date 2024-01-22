const express = require('express')
const zod = require('zod')
const userModel = require('../db')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bycyrpt = require('bcrypt')


const userSchema = zod.object({
    username:zod.string().email(),
    password:zod.string().min(4),
    firstName:zod.string().min(4),
    lastName:zod.string().min(4)
})


//signup API
router.post('/signup', async(req,res)=>{
    const { username , password, firstName, lastName } = req.body
    const success = userSchema.safeParse(req.body)
    const hashedPassword = await bycyrpt.hash(password,10)
    const body = {
        username,
        password:hashedPassword,
        firstName,
        lastName
    }
    const user = await userModel.findOne({username})
    if(!success.success){
        console.log(success.error)
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
    const token = jwt.sign({id:Newuser._id},"secretToken")
    return res.json({
        success:true,
        Newuser,
        token:token
    }).status(200)

})

//signin API
router.post('/signin',async(req,res)=>{
    const { username,  password } = req.body
    const userExist = await userModel.findOne({username})
    if(!userExist){
        return res.json({
            status:false,
            message:"User does not exist"
        }).status(400)
    }
    const comparePassword = await bycyrpt.compare(password,userExist.password)
    if(!comparePassword){
        return res.json({
            success:false,
            message:"User's password does not match"
        }).status(400)
    }
    const token = jwt.sign({id:userExist._id},"secretToken")
    return res.json({
        succesS:true,
        message:"Succcessfully signedi In"
    }).status(200)
    })

//update user info

router.put('/updateInfo',async(req,res)=>{
    const { username, password , firstName, lastName  } = req.body

    const user = await userModel.findOne({username})

    if(!user){
       return res.json({
            success:false,
            message:"user does not exist"
        }).status(400)
    }
    try {
    if(password){
        const hashedpassword = await bycyrpt.hash(password,10)
        const updatedUser = await userModel.findOneAndUpdate({username},
            {password:hashedpassword,
            firstName,
            lastName})
        return res.json({
                success:true,
                updatedUser
           }).status(200)
        }
    else { 
        const updatedUser = await userModel.findOneAndUpdate({username},
            {password,
            firstName,
            lastName})
        return res.json({
                success:true,
                updatedUser
           }).status(200)
        }
   } catch (error) {
    return res.json({
        success:false,
        error:error
    })
   }
})


module.exports = router