const {json} = require("../../Data/index.js");
const {Router} = require("express")
const {Product} = require("../../db.js")

const router = Router()

router.get("/", async(req,res) => {

    try{
     const allProducts = await Product.findAll()
     res.status(201).send(allProducts)
    }
    catch(e) {
        res.status(404).send({error: console.log(e)})
    }
   
})

router.post("/db", async(req,res) =>  {
    if (!json || !json.data) {
        return res.status(400).send("El formato del objeto JSON es incorrecto");
    }
    try{
        await Product.bulkCreate(json.data);
        res.status(201).send({message: "Succesful Creation"})
       }
       catch(e) {
        console.log(e)
       res.status(404).send({error: console.log(e)})
       }

});

router.post("/", async(req,res) =>  {
    const data = req.body
    try{
        const newProduct = await Product.create(data);
        res.status(201).send({message: "Succesful Creation"})
       }
       catch(e) {
       res.status(404).send({error: console.log(e)})
       }

})

router.put("/", async(req,res) =>  {
    const {id} = req.body
    console.log(id)
    console.log("data", req.body)
    try{
        await Product.update(req.body,{where: {id: id}});
        const productsUpdate = await Product.findAll()
        res.status(201).send(productsUpdate)
       }
       catch(e) {
       res.status(404).send({error: console.log(e)})
       }

});






module.exports = {router}