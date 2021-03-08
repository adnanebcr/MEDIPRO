import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

// @descr   fetch all products
// @route   GET /api/products
// @access Public

const getProducts = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const products = await Product.find({ ...keyword });
  res.json(products);
});

// @descr   fetch single product
// @route   GET /api/products/:id
// @access Public
const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Produit inexistant");
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    user: req.user._id,
    name: "APENAT",
    type: "_",
    liste: "_",
    metadesc: "_",
    image: "/products/apenat/Apenatcb.png",
    fiche: "/Fiches/Apenat.jpg",
    gammes: "_",
    description: "_",
    proprietes: "_",
    proprietes2: "_",
    conseil: "_",
    conseil2: "_",
    precautions1: "_",
    precautions2: "_",
    precautions3: "_",
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    metadesc,
    image,
    type,
    fiche,
    liste,
    gammes,
    description,
    proprietes,
    conseil,
    precautions1,
    precautions2,
    precautions3,
    PPH,
    PPC,
    Colisage,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.type = type;
    product.liste = liste;
    product.metadesc = metadesc;
    product.description = description;
    product.image = image;
    product.fiche = fiche;
    product.gammes = gammes;
    product.proprietes = proprietes;
    product.conseil = conseil;
    product.precautions1 = precautions1;
    product.precautions2 = precautions2;
    product.precautions3 = precautions3;
    product.PPH = PPH;
    product.PPC = PPC;
    product.Colisage = Colisage;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ metadesc: "produits-phares" }).limit(
    10
  );

  res.json(products);
});

// @desc    Get new products
// @route   GET /api/products/New
// @access  Public
const getNewProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ metadesc: "nouveau" }).limit(10);

  res.json(products);
});

export {
  getProducts,
  getProductsById,
  deleteProduct,
  createProduct,
  updateProduct,
  getTopProducts,
  getNewProducts,
};
