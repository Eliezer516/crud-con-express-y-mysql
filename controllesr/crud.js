const conn = require('../database/db');

exports.guardar = (req, res)=>{
	const nombre = req.body.nombre;
	const web = req.body.web;
	const telefono = req.body.telefono;
	const direccion = req.body.direccion;
	conn.query('INSERT INTO proveedor SET ?',{nombre:nombre, web:web, telefono:telefono, direccion:direccion}, (err, rows)=>{
		if(err){
			console.log(err)
		}else {
			res.redirect('/');
		}
	})
}

exports.actualizar = (req, res)=>{
	const rut = req.body.rut;
	const nombre = req.body.nombre;
	const web = req.body.web;
	const telefono = req.body.telefono;
	const direccion = req.body.direccion;
	conn.query('UPDATE proveedor SET ? WHERE RUT = ?',[{nombre:nombre, web:web, telefono:telefono, direccion:direccion}, rut], (err, rows)=>{
		if(err){
			console.log(err)
		}else {
			res.redirect('/');
		}
	})
}