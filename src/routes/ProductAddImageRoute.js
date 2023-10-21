const route=require("express").Router()
const ProductAddImage=require("../controllers/ProductAddImageController")
route.post("/uploadImage",[],ProductAddImage.uploadImageC)

module.exports=route