import express from 'express';
import {authenticate} from './../auth/verifyToken.js';
import { getCheckoutSession } from '../Controllers/reservaController.js';

const router = express.Router();

router.post("/checkout-sucesso/:cuidadorId", authenticate, getCheckoutSession)

export default router;