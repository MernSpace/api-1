const express = require("express");
const router = express.Router();
const customer = require('../controller/customercontroller');
//const product = require("../controler/productcontroller")


//! =====create customer  ===== !//
router.post("/create-customer",customer.createcustomer);
router.get("/readcustomer", customer.readcustomer);
router.post("/updatecustomer/:id",customer.updatecustomer)
router.get("/deletecustomer/:id",customer.deletecustomer)
// //create product
// router.post("/createproduct",product.create)

// //! ============ Create new product ============
// router.post("/create-product", product.createProduct);

// //! ============ Get Single Product ============
// router.get("/get-single-product/:id", productController.getSingleProduct);

// //! ============ Get All Product ============
// router.get("/get-all-product", productController.getAllProduct);

// //! ============ Delete Product ============
// router.delete("/delete-product/:id", productController.deleteProduct);

// //! ============ Update Product ============
// router.post("/update-product/:id", productController.updateProduct);

module.exports = router;
