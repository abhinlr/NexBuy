import express from "express";

import authController from "../controllers/authController.mjs";
import { loginValidationRules, registerValidationRules, validate } from '../middleware/authMiddleware/authValidate.mjs';
import authCheck from "../middleware/authMiddleware/authCheck.mjs";

const router = express.Router();

router.post('/signup', registerValidationRules, validate,  authController.signUp);
router.post('/login', loginValidationRules, validate, authController.login);
router.get('/logout', authCheck, authController.logout);
router.get('/profile', authCheck, authController.profile);

export default router;