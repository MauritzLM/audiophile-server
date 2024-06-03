// all routes
import express from 'express';
const router = express.Router();

import { getProduct } from "../controllers/product";

router.get("/product", getProduct);

export default router;