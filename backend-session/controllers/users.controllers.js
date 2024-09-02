import { conexion } from '../db/database.js'

export const searchUser = async (req, res) => {
    try {
        const { username, password } = req.body;
    const conectado = await conexion();
    const sql = `SELECT * FROM users WHERE username = ? and users.password = ?`
    const [user] = await conectado.query(sql,[username,password]); 
    console.log(user);
    
    if (user) {
        // Guardar información del usuario en la sesión
        req.session.userId = user.id;
        req.session.username = user.username;

        return res.json({ 
            message: 'Inicio de sesión exitoso', 
            user: { id: user.id, username: user.username } });
    } else {
        return res.status(401).json({ message: 'Credenciales incorrectas' });
    }
    } catch (error) {
        console.log(error);
    }
}
export const getDataSession = async (req, res) => {
    try {
        if (req.session.userId) {
            return res.json({ 
                loggedIn: true, 
                user: { id: req.session.userId, username: req.session.username } });
        } else {
            return res.status(401).json({ loggedIn: false, message: 'No hay sesión activa' });
        }
        
    } catch (error) {
        console.log(error);
        
    }
}
export const closeSession = (req, res) => {
    try {
        console.log(req.session)
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Error al cerrar la sesión' });
        }
        res.clearCookie('connect.sid'); // Nombre de cookie por defecto para express-session
        return res.json({ message: 'Sesión cerrada exitosamente' });
    });
    } catch (error) {
       console.log(error);
        
    }
};