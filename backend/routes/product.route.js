/* this file contains the various routes for the api* */
// Dependencies
import express from 'express';
import { getProduct, createProduct, updateProduct, deleteProduct } from '../controller/product.controller.js';



const router = express.Router()
/* various routes*/
// Create a product
router.post("/", createProduct)
// Check for products
router.get("/", getProduct)
// Update a product
router.put("/:id", updateProduct)
// Delete a product
router.delete("/:id", deleteProduct)

export default router;

