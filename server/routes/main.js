import express from 'express';
import { getIndex } from '../controllers/home.js';

const router = express.Router();

router.get('/', getIndex);

export default router;