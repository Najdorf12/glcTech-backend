import { Router } from "express";
import {
  getProducts,
/*   getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  getProductByCategory,
  getProductByName */
} from "../controllers/products.controller.js"; 

const router = Router();

router.get("/", getProducts);
/* router.get("/:id", getProduct);

router.post("/", authRequired, createProduct);
router.put("/:id", authRequired, updateProduct);
router.delete("/:id", authRequired, deleteProduct); */

/* router.get("/category/:categoryName", getProductByCategory)
router.get("/leaked/:name", getProductByName) */


export default router;