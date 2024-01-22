const jwt = require('jsonwebtoken')


const authMiddleware = (req,res,next)=>{
    const authHeader = req.headers.Authorization

    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.json({
            success:false
        }).status(400)
    }
    const token = authHeader.split('')[1]
    try {
        const decode = jwt.verify(token,'secretToken')
        req.userID = decode.id        //contains user id
        next()
    } catch (error) {
        return res.json({
            success:false,
            mess:"user authentication failed"
        }).status(403)
    }
}

module.exports=  authMiddleware