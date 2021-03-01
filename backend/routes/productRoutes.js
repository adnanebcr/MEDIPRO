import express from 'express'
import {getProducts,getProductsById} from '../controllers/productController.js'



const router=express.Router()



// @descr   fetch all products 
// @route   GET /api/products
// @access Public 
router.route('/').get(getProducts)


// @descr   fetch single product 
// @route   GET /api/products/:id
// @access Public 
router.route('/:id').get(getProductsById)


export default router