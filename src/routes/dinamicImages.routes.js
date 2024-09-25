import { Router } from "express";
import {
  getDinamicImages,
  createOrUpdateDinamicImage,
  deleteDinamicImage,
  updateDinamicImage,
} from "../controllers/dinamicImages.controllers.js";

const router = Router();

router.get("/", getDinamicImages);
router.post("/", createOrUpdateDinamicImage);
router.delete("/:id", deleteDinamicImage);
router.put("/:id", updateDinamicImage);

export default router;