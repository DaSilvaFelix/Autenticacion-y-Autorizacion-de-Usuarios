import mysql2 from "mysql2/promise";

export const conexion = async ()=>{
    try {
        return await mysql2.createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database:'db_system'
        })
    } catch (error) {
        console.log(error);
        
    }
}

