import { Router } from "express";
import { createPurchase, getPurchases, getPurchaseById, updatePurchase } from "../controllers/purchaseController.js";

const router = Router();

router.post("/purchase/", createPurchase);
router.get("/purchases/", getPurchases);
router.get("/purchases/:id", getPurchaseById);
router.put("/purchases/:id", updatePurchase);

export default router;
