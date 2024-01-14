import  express  from "express";
const router = express.Router();
import { getProductById, getProducts } from "../controllers/productController.js";



router.route('/').get(getProducts);  //get all products
router.route('/:id').get(getProductById);  //get product by id



export default router;

