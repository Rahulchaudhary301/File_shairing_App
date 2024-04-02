const multer=require('multer')
const {GridFsStorage}=require('multer-gridfs-storage')



const storage=new GridFsStorage({
    url:'mongodb+srv://RahulChaudhary:Rahul321@cluster1.42h1ws9.mongodb.net/ImageUpload?retryWrites=true&w=majority',
    option:{ useNewUrlParser: true, useUnifiedTopology: true },
    file:(req,file)=>{
        const match=["image/png","image/jpg"];
        if(match.indexOf(file.mimeType==-1)){
            return `${new Date().toLocaleDateString()}-file-${file.originalname.split(' ').join('')}`
        }

        return{
            bucketName:"photos",
            fileName:`${new Date().toLocaleDateString()}-file-${file.originalname.split(' ').join('')}`
        }

    }
})








module.exports=multer({storage})