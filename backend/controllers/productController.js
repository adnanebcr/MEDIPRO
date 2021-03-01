import Product from '../models/productModel.js'
import mediproList1model from '../models/mediproList1model.js'
import asyncHandler from 'express-async-handler'


// @descr   fetch all products 
// @route   GET /api/products
// @access Public 

const getProducts = asyncHandler(async (req,res)=>{
    const products = await Product.find({})
    
    res.json(products)
}) 

// @descr   fetch single product 
// @route   GET /api/products/:id
// @access Public 
const getProductsById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Produit inexistant')
    }
}) 


// @descr   fetch all products 
// @route   GET /api/products
// @access Public 

const getList = asyncHandler(async (req,res)=>{
    const medipro1 = await mediproList1model.find({})
    
    res.json(medipro1)
}) 



export {getProducts,getProductsById,getList} 


