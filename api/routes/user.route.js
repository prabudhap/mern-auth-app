import express from 'express';
import {check, updateUser} from '../controllers/user.controller.js'
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/', check);
router.post("/update/:id", verifyToken, updateUser)
                            //do it      //then do this function
export default router;