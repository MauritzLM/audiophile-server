// all routes
import express from 'express';
const router = express.Router();

import { getProduct, getCategory, getFeatured } from "../controllers/product";
import { createSession, resumeSession, updateSession, endSession } from '../controllers/session';
import { paymentFormSubmit } from '../controllers/form';

// product routes
router.get("/product/:name", getProduct);

router.get("/category/:name", getCategory);

router.get("/featured", getFeatured);

// session routes
router.post("/session-new", createSession);

router.post("/session-resume", resumeSession);

router.post("/session-update", updateSession);

router.post("/session-end", endSession);

// form routes
router.post("/payment/submit", paymentFormSubmit);

export default router;