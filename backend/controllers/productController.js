import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {   //get product by id
    const product = await Product.findById(req.params.id);
    if(product){
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Not found');
    }
} );

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {   //get all products
    const products = await Product.find({});
    res.json(products);
} );

export { getProductById, getProducts };