// all routes
import express from 'express';
const router = express.Router();

import { getProduct, getCategory, getFeatured } from "../controllers/product";
import { createSession, resumeSession, updateSession, endSession } from '../controllers/session';

// product routes
router.get("/product/:name", getProduct);

router.get("/category/:name", getCategory);

router.get("/featured", getFeatured);

// session routes
router.post("/session-new", createSession);

router.post("/resume", resumeSession);

router.post("/session-update", updateSession);

router.post("/session-end", endSession);

export default router;