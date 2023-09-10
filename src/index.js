const express=require('express')
const app=express()
const router=require('./router/route')
const mongoose=require('mongoose')
const cors=require('cors')



app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://RahulChaudhary:Rahul321@cluster1.42h1ws9.mongodb.net/ImageUpload?retryWrites=true&w=majority')
.then(()=>{
    console.log('mongiDb connect successfully..')
})
.catch((err)=>{
   console.log(err)
})



app.use('/',router)

app.listen(5000,()=>{
   console.log('express is running on 5000 PORT')
})