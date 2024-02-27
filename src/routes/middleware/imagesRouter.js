const json = require("../../Data/index.js");
const {Router} = require("express")
const {Product} = require("../../db.js")
const multer = require("multer");
const uploadToS3 = require("../../s3.js");

const router = Router()

const storage = multer.memoryStorage()
const upload = multer({storage})


router.post("/newProduct", upload.single("image"), async(req,res) =>  { 
    
    const {file} = req
    const obj = JSON.parse(req.body.obj); // Analizar JSON

    const userId = req.headers["x-user-id"]

    if(!file || !userId) return res.status(400).json({message: "Bad request"})

    const {error, key} = await uploadToS3({file,userId})
    if(error) return res.status(500).json({message: error.message})
    
    obj.img = "https://kiosko-mechi.s3.us-east-2.amazonaws.com/" + key;
    obj.price = parseInt(obj.price)
    obj.brand = [obj.brand]


    const newProduct = await Product.create(obj);

    return res.status(201).json(newProduct)
   

});

router.get("/", upload.single("image"), async(req,res) =>  { 
    
    const userId = req.headers["x-user-id"]

    if(!userId) return res.status(400).json({message: "Bad request"})


    return res.status(201).json({key})
   

});





module.exports = {router}