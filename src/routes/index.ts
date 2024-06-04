// all routes
import express from 'express';
const router = express.Router();

import { getProduct, getCategory, getFeatured } from "../controllers/product";

router.get("/product/:name", getProduct);

router.get("/category/:name", getCategory);

router.get("/featured", getFeatured);

export default router;