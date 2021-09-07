const express=require('express');

const rutas=express.Router();
const controller=require('../Controlador/controller');

rutas.get('/',controller.index);
rutas.get('/login',controller.logueo);
rutas.get('/register',controller.register);
//rutas.get('/vistacreditos',controller.consultamisemple);
rutas.get('/vistacreditos',controller.consultacreditos);

rutas.get('/indexadministrador',controller.indexadmin);
rutas.get('/indexcliente',controller.indexcliente);
rutas.get('/vistacliente',controller.vistacliente);
rutas.get('/vistatransferir',controller.transferirdinero);
rutas.get('/movimientos',controller.movimientos);



rutas.get('/indexempleado',controller.indexempleado);

rutas.get('/lineasmod',controller.lineasmod);
rutas.get('/creartipocuenta',controller.crearcuentavista);

rutas.post('/actualizar',controller.actualizar);
rutas.post('/actualizarcred',controller.actualizarCred);
rutas.post('/actualizarlineas',controller.actualizarLineas);
rutas.post('/borrarlineas',controller.borrarLineas);
rutas.post('/borrar',controller.borrarusuario);

rutas.post('/login',controller.login);
rutas.get('/vistaadministrador',controller.consultausuarios);
rutas.post('/frinsertarusuarios',controller.insertarusu);
rutas.post('/frminsertarcuentas',controller.crearcuenta);
rutas.post('/frminsertarcreditos',controller.insertarcred);
rutas.post('/frinsertarlinea',controller.insertarlinea);
rutas.post('/frinsertarclientes',controller.insertarcliente);
rutas.post('/transferir',controller.transferir);
rutas.post('/descontar',controller.quitardinero);



rutas.get('/panelempleado',controller.consultaclientes);

rutas.post('/borrarcred',controller.borrarCred);

rutas.get('/vistalineas',controller.consultalineas);
rutas.get('/cerrar',controller.cerrar);




module.exports=rutas;