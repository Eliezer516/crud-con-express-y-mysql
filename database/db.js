const mysql = require('mysql');

const conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'contrasena',
	database: 'empleados'
})


conn.connect( err =>{
	if(err){
		console.log(err)
	}else {
		console.log('CONECTADO A LA DB');
	}
});

module.exports = conn;