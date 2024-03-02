import express from 'express';
import {check} from '../controllers/user.controller.js'

const router = express.Router();

router.get('/', check);

export default router;