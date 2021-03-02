import Product from '../models/productModel.js'
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





// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    user :req.user._id,
      name: 'APIXOL 22®',
        type:'Solution buvable Adultes',
        metadesc: 'produits-phares',
        image: '/products/apixol/ApixolAdsirop.png',
          fiche:'test1',
        gammes: 'Gastro-entérologie',
        description: 'description APIXOL',
        proprietes: 'Apixol solution buvable est à base d\'extraits de plantes riches en actifs naturels qui agissent en synergie pour désencombrer les bronches en cas de toux grasse et apaiser l’irritation des voies respiratoires en cas de toux sèche tout en renforçant les défenses naturelles de l’organisme',
        conseil: 'Toux sèche,Toux grasse',
        precautions: 'cuillère à soupe 3 à 4 fois par jour.',
        PPH:55.30,
        PPC:79.00,
        Colisage:48
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
  } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.brand = brand
    product.category = category
    product.countInStock = countInStock

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})


// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3)

  res.json(products)
})



export {
  getProducts,
  getProductsById,
  deleteProduct,
  createProduct,
  updateProduct,
  getTopProducts,
}



