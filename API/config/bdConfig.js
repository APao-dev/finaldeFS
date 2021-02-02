// requerimos mysql
const mysql = require('mysql');
// definimos base de datos
const options = {
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'dreamtrip', //base de datos
};

const conexion_db = mysql.createConnection(options);
console.log(typeof(conexion_db));


// conectamos base de datos
conexion_db.connect((err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('conexión a base de datos exitosa');
        }
    })
    // exportamos
module.exports = { options, conexion_db }