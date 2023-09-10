const express=require('express')
const Router=express.Router()
const ImageController=require('../imageController/Image_controller')
const multer=require('multer')
const upload=require('../util/imageUtil')



Router.get('/',(req,res)=>{
    res.status(200).send({msg:'connection done'})
})


Router.post('/upload', upload.single('file'), ImageController.ImageUpload)


Router.get('/file/:filename',ImageController.GetImage)

//Router.get('/allImage',ImageController.GetAllImage)



module.exports=Router