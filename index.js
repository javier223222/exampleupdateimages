if(process.env.NODE !== 'production'){
    require("dotenv").config()
} 


const express=require("express")
const fileUpload=require("express-fileupload")


const app=express()
app.use(express.json())
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"./uploads"
}))
app.use(express.urlencoded({extended:false}))
app.use("/addImage",require("./src/routes/ProductAddImageRoute"))
const PORT =process.env.PORT|| 84
app.listen(PORT,()=>{
    console.log(`Corriendo en el puerto ${PORT}`)
})