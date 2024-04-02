const grid=require('gridfs-stream')
const mongoose=require('mongoose')


let gfs , gridfsBucket;
const conn=mongoose.connection;
conn.once('open',()=>{
  gridfsBucket= new mongoose.mongo.GridFSBucket(conn.db,{
    bucketName:'fs'
  });
  gfs=grid(conn.db, mongoose.mongo);
  gfs.collection('fs');
});





const ImageUpload=async(req,res)=>{
    const url='https://fileshairingapp.onrender.com'
   // const url='http://localhost:5000'
  try {
    if(!req.file){
      return res.status(404).send({status:true,msg:"File not found"})
    }
     
    const ImageUrl=`${url}/file/${req.file.filename.split(' ').join('')}`
      return res.status(200).send({status:true,data:ImageUrl})
  
    } catch (error) {
      res.status(500).send({status:false,msg:error})
    }
}



const GetImage= async(req,res)=>{
    try {
     
    
    const file= await gfs.files.findOne({filename:req.params.filename.split(' ').join('')})
    const readStream = gridfsBucket.openDownloadStream(file._id);
    readStream.pipe(res);

    } catch (error) {
      res.status(500).send({status:false,msg:error})
    }
  }



  
// const GetAllImage= async(req,res)=>{
//     try {
     
    
//     // const file= await gfs.fs.find({})
    
//     // console.log(file)

//     } catch (error) {
//       res.status(500).send({status:false,msg:error})
//     }
//   }






module.exports={ImageUpload,GetImage}

