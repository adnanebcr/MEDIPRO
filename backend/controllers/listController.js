import listProducts from "../models/listProduct.js";

import asyncHandler from "express-async-handler";

// @descr   fetch all products list1
// @route   GET /api/products
// @access Public

const getProductList1 = asyncHandler(async (req, res) => {
  const list1 = await listProducts.find({ liste: "mediliste1" });

  res.json(list1);
});
// @descr   fetch all products list1
// @route   GET /api/products
// @access Public

const getProductListAll = asyncHandler(async (req, res) => {
  const ListAll = await listProducts.find({});

  res.json(ListAll);
});

// // @descr   fetch all products list2
// // @route   GET /api/products
// // @access Public

const getProductList2 = asyncHandler(async (req, res) => {
  const list2 = await listProducts.find({ liste: "mediliste2" });

  res.json(list2);
});

// @descr   fetch all products list3
// @route   GET /api/products
// @access Public

const getProductList3 = asyncHandler(async (req, res) => {
  const list3 = await listProducts.find({ liste: "teraliste1" });

  res.json(list3);
});

// @descr   fetch all products list4
// @route   GET /api/products
// @access Public

const getProductList4 = asyncHandler(async (req, res) => {
  const list4 = await listProducts.find({ liste: "teraliste2" });

  res.json(list4);
});

// @descr   fetch single product
// @route   GET /api/listAll/:id
// @access Public
const getProductsById = asyncHandler(async (req, res) => {
  const productList = await listProducts.findById(req.params.id);

  if (productList) {
    res.json(productList);
  } else {
    res.status(404);
    throw new Error("Produit inexistant");
  }
});

export {
  getProductList1,
  getProductList2,
  getProductList3,
  getProductList4,
  getProductsById,
  getProductListAll,
};
