import mysql from 'mysql2/promise';
import { dbConfig } from '../config/config.js';

const conexion = async ()=>{
    return await mysql.createConnection({
        port:dbConfig.PORT,
        host:dbConfig.DB_HOST,
        user:dbConfig.DB_USER,
        password:dbConfig.DB_PASSWORD,
        database:dbConfig.DB_NAME
    })
}
export default conexion;