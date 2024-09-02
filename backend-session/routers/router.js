import { Router } from "express";
import { closeSession, getDataSession, searchUser } from "../controllers/users.controllers.js";
const router = Router();
router.post('/login', searchUser);
router.get('/session', getDataSession);
router.post('/logout', closeSession);

export default router