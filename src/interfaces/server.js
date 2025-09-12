import express from "express";
import purchaseRoutes from "../infrastucture/routes/purchaseRoutes.js";
import userRoutes from "../infrastucture/routes/userRoutes.js"

const app = express();

app.use(express.json());

app.use("/api/", purchaseRoutes);
app.use("/api/", userRoutes);

export default app;