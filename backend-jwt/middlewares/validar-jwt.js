import jwt from 'jsonwebtoken';

import { SECRET_KEY } from '../config/env.js';
import conexion from "../db/database.js";

// Middleware para verificar el token JWT
export default  async (req, res, next) => {
    console.log(req.session)
    console.log('-----------')
    console.log(req.cookies)
    const token = req.cookies.authToken || req.session.token;

    if (!token) {
        return res.status(403).json({ message: 'Token no proporcionado' });
    }

     const decoded = jwt.verify(token, SECRET_KEY);

    // Se busca al usuario en la base de datos
    const conectado = await conexion();
    const sql = 'SELECT * FROM `users` WHERE id = ?';
    const [user] = await conectado.query(sql,[decoded.userId]);
    

    if (!user) {
        return res.status(401).json({ message: 'Token inválido' });
    }

    req.user = user[0]; // Agrega la información del usuario decodificada al request

    next();
};