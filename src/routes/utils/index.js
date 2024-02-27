const { Router } = require("express");
const {json}  = require("../../Data");
import { Product } from "../../db"
import { Promise } from "sequelize";

export function getProducts() {

    try{
     const data = json.data; 
     res.status(201).send(data)
    }
    catch(e) {
    console.log(e)
    }
   
}

export async function createProductsDb() {

    const promesasDeCreacion = json.data.map(obj => Product.create(obj));
    try{
        const data = await Promise.all(promesasDeCreacion)
        res.status(201).send(data)
       }
       catch(e) {
       console.log(e)
       }

}