import express from "express";
import productRouter from "./products.route";

const router = express.Router();

router.get("/test", (req, res, next) => {
  res.send("working");
});

router.use("/products", productRouter);

export default router;