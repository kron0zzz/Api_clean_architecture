import express from "express";
import purchaseRoutes from "../infrastucture/routes/purchaseRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/purchases", purchaseRoutes);

export default app;