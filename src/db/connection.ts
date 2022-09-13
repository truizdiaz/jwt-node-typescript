import mysql from 'mysql';

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'admin123',
    database : 'restaurante'
});

export default connection;

