import express from "express";
import {
  getProductList1,
  getProductList2,
  getProductList3,
  getProductList4,
  getProductsById,
  getProductListAll,
} from "../controllers/listController.js";

const router = express.Router();
// @descr   fetch all products list1
// @route   GET /api/productsList
// @access Public
router.route("/ListAll").get(getProductListAll);

// @descr   fetch all products list1
// @route   GET /api/productsList
// @access Public
router.route("/List1").get(getProductList1);

// @descr   fetch all products list2
// @route   GET /api/productsList
// @access Public
router.route("/List2").get(getProductList2);

// @descr   fetch all products list3
// @route   GET /api/productsList
// @access Public
router.route("/List3").get(getProductList3);

// @descr   fetch all products list4
// @route   GET /api/productsList
// @access Public
router.route("/List4").get(getProductList4);

// @descr   fetch  products list1 by id
// @route   GET /api/productsList
// @access Public

router.route("/:id").get(getProductsById);

export default router;
