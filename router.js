const express = require('express');
const ruta = express.Router();

const conn = require('./database/db');

ruta.get('/', (req, res)=>{
	conn.query('SELECT * FROM proveedor', (err, rows)=>{
		if(err){
			console.log(err)
		}else {
			res.render('index', {resultados: rows});
		}
	})
})

ruta.get('/crear', (req, res)=>{
	res.render('crear')
})

ruta.get('/editar/:RUT', (req, res)=>{
	const rut = req.params.RUT;
	conn.query('SELECT * FROM proveedor WHERE RUT = ?',[rut], (err, rows)=>{
		if(err){
			console.log(err)
		}else {
			res.render('editar', {user: rows[0]});
		}	
	})
})

ruta.get('/borrar/:RUT', (req, res)=>{
	const rut = req.params.RUT;
	conn.query('DELETE FROM proveedor WHERE RUT = ?',[rut], (err, rows)=>{
		if(err){
			console.log(err)
		}else {
			res.redirect('/');
		}	
	})
})

const crud = require('./controllesr/crud');
ruta.post('/guardar', crud.guardar);
ruta.post('/actualizar', crud.actualizar);

module.exports = ruta;