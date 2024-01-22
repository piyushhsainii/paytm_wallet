const express = require("express");
const router = require('./routes/index')
const app = express()
const cors = require('cors')

app.use(cors())
app.use('/v1',router)

app.get('/',(req,res)=>{
res.send('Welcome')
})

app.listen(5000,()=>{
    console.log("Server has been started on port ")
})
