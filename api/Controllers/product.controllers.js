import { Product } from '../models/Product.models.js'
import AsyncHandler from 'express-async-handler'



const Products= AsyncHandler(async(req,res)=> {
    

    const product= await Product.find({})
    
    res.status(200).json(product);

});

const Productsid = AsyncHandler(async (req,res)=>{

    const product= await Product.findById(req.params.id);
    if(! product){
        res.status(400)
        throw new Error("Product not found");
        }
    res.status(200).json(product);


});

export {Products,Productsid}