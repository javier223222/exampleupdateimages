const fs=require("fs-extra")
const { uploadImage } = require("../config/cloudinary.config")

const uploadImageC=async (req,res)=>{

   
        console.log(req.files.imagen.tempFilePath)
        let imagen=null
       

        if(req.files?.imagen){
            imagen=await uploadImage(req.files.imagen.tempFilePath)
            console.log(imagen.secure_url)
            await fs.unlink(req.files.imagen.tempFilePath)
            
        
        } 

        res.json({
            imagen
        })
        
       
      
     
   
 
}
module.exports={
    uploadImageC
}

