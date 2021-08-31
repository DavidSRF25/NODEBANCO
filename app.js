const express = require('express');
const app=express();
const morgan = require('morgan');
const colors = require('colors');
const path=require('path');
const session=require('express-session');
app.use(morgan('dev'));
app.use(session({

    secret:'123',
    resave:true,
    saveUninitialized:true

}));
app.use(express.urlencoded({extended:true}));

app.use(require('./Rutas/rutas'));
app.use((err,req,res,next)=>{

    res.send({error:err.message});

});
app.use(express.static(path.join(__dirname,'./public')));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./Vista'));






/*
const http=require('http');
const server=http.createServer((request,res)=>{

    console.log("Conexion ok");
    res.end("Conexion lista");

});

server.listen(3000,()=>{

    console.log("El servidor esta  a la espera ");


});



*/

//Server
app.set('port',process.env.PORT || 3000);

app.listen(app.get('port'),()=>{

console.log(`En el servidor ${app.get('port')}`);

});