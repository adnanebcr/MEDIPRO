import express from 'express'
import {getProducts,getProductsById, deleteProduct,
  createProduct,
  updateProduct,
  getTopProducts,} from '../controllers/productController.js'
  import {protect,admin} from '../middleware/authMiddleware.js'



const router=express.Router()



// @descr   fetch all products 
// @route   GET /api/products
// @access Public 
router.route('/').get(getProducts)


// @descr   fetch single product 
// @route   GET /api/products/:id
// @access Public 
router.route('/').get(getProducts).post(protect, admin, createProduct)
router.get('/top', getTopProducts)
router
  .route('/:id')
  .get(getProductsById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)



export default router