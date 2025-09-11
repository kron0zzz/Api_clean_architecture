import { Router } from "express";
import { createPurchase, getPurchases, getPurchaseById, updatePurchase } from "../controllers/purchaseController.js";

const router = Router();

router.post("/", createPurchase);
router.get("/", getPurchases);
router.get("/:id", getPurchaseById);
router.put("/:id", updatePurchase);

export default router;
