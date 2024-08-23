import { Router } from "express";
import {
  getUsdPrice,
  createUsdPrice,
  deleteUsdPrice,
} from "../controllers/usdPrice.controller.js";

const router = Router();

router.get("/", getUsdPrice);
router.post("/", createUsdPrice);
router.delete("/:id", deleteUsdPrice);

export default router;
