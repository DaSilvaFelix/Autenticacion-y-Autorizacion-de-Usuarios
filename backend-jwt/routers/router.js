import { Router } from "express";
import { closeSession, loginSession, register, secureAccess } from "../controllers/users.controllers.js";
import validarJwt from "../middlewares/validar-jwt.js";
const router = Router();
router.post('/login', loginSession);
router.get('/session',validarJwt,secureAccess);
router.post('/logout',closeSession);
router.post('/register',register)

export default router;