const connection = require("../Conexion/conexion");
const cnn = connection();
const render = require("ejs");
const bcryptjs = require("bcryptjs");
const controller = {};

//login

controller.login = async (req, res, next) => {
  const usu = await req.body.usuario;
  const password = await req.body.pass;
  console.log(usu, password);
  cnn.query("select * from tbusuarios where nomusu=?", [usu], async (err, resultado) => {
      if (err) {
        next(new Error(err));
      } else if ( resultado != 0 &&(await bcryptjs.compare(password, resultado[0].clave))) {
        console.log("datos Correctos");
        //res.redirect('vistaadministrador');

        rol = resultado[0].rol;
        ussu = resultado[0].nomusu;
        doc = resultado[0].doccli;
        console.log("usuario " + ussu + " Rol " + rol);
        req.session.login = true;
        req.session.usu = ussu;
        req.session.rol = rol;
        req.session.documento=doc;

        switch (rol) {
          case "Empleado":
            req.session.login = true;

            if (req.session.login) {
              res.redirect("indexempleado");
            } else {
              res.redirect("login");
            }
            break;
          case "Cliente":
            req.session.login = true;

            if (req.session.login) {
              res.redirect("indexcliente");
            } else {
              res.redirect("login");
            }

            break;

          case "Administrador":
            req.session.login = true;

            if (req.session.login) {
              res.redirect("indexadministrador");
            } else {
              res.redirect("login");
            }

            break;
        }
      } else {
        console.log("datos incorrectos");
        res.redirect("login");
        
      }
    }
  );
};




controller.crearcuentavista=(req, res, next)=>{

  res.render("creartipocuenta");

}
controller.index = (req, res, next) => {
  res.render("index");
};
controller.indexadmin = (req, res, next) => {
  if (req.session.login) {
  }
  let nomusu = req.session.usu;
  let rolito = req.session.rol;
  res.render("indexadministrador", { nu: nomusu, rol: rolito });
  console.log("Controller indexemple " + ussu);
};
controller.indexempleado = (req, res, next) => {
  if (req.session.login) {
    let nomusu = req.session.usu;
    let rolito = req.session.rol;
    res.render("indexempleado", { nu: nomusu, rol: rolito });
    console.log("Controller indexemple " + ussu);
  }else{
    res.redirect('/');

  }
  
};

controller.lineasmod = (req, res, next) => {
  res.render("lineasmod");
};

controller.register = (req, res, next) => {
  res.render("register");
};




controller.logueo = (req, res, next) => {
  res.render("login");
};



controller.vistacliente = (req, res, next) => {
  if (req.session.login) {
  
  let nomusu = req.session.usu;
  let rolito = req.session.rol;

  cnn.query("select * from tbclientes inner join tbusuarios on tbclientes.doccli=tbusuarios.doccli  where tbusuarios.nomusu=? ", [nomusu],  (err, resultado) => {



     documento = resultado[0].doccli;
     nombre = resultado[0].nomcli;
     apellido=resultado[0].apecli;
     correo=resultado[0].correocli;
     celular=resultado[0].celularcli;
     sexo=resultado[0].sexo;
     fecha= resultado[0].fechnaccli;

     req.session.documentocli = documento;
     req.session.nombrecli = nombre;
     req.session.sexocli = sexo;
     let docu = req.session.documentocli;
     let sex=req.session.sexocli;

     let nom=req.session.nombrecli ;
     if (err) {
      next(new Error(err));
    }else {
      

      cnn.query("SELECT  *  from tbcreditos inner join tbusuarios on tbcreditos.doccli = tbusuarios.doccli WHERE tbusuarios.doccli='"+docu +"'",async(err,resbd)=>{



        if (err) {
            next(new Error(err));
          }else {

        
           
            res.render("vistacliente", { nu: nomusu,sex:sex,nom:nom, rol: rolito,datoos:resbd ,datospe:resultado});
            
          }
    
      });





    }



});



  } else{

    res.redirect('/');

  }
};
controller.movimientos=(req, res, next)=>{


  if (req.session.login) {
    req.session.documentocli = documento;
     req.session.nombrecli = nombre;
     req.session.sexocli = sexo;
     let docu = req.session.documentocli;
     let sex=req.session.sexocli;

     let nom=req.session.nombrecli ;
  
    let doc = req.session.documento;
    let nomusu = req.session.usu;
  let rolito = req.session.rol;
   
  
    
  
    cnn.query("SELECT  saldo  FROM cuenta where doccliente='"+doc+"'",(err,resbd)=>{
    
  
       
       
  
       
       if (err) {
        next(new Error(err));
      }else {
        
  
        cnn.query("select *  from cuenta as c  inner join movimientos as m on(c.doccliente=m.doccli_envia) where c.doccliente='"+doc+"'",(err, resultado) => {
  
         
          if (err) {
              next(new Error(err));
            }else {
  
          
             
              res.render("movimientos", { sex:sex,nom:nom, rol: rolito,datoos:resbd ,datospe:resultado});
              
            }
      
        });
  
  
  
  
  
      }
  
  
  
  });
  
  
  
    } else{
  
      res.redirect('/');
  
    }



}


controller.indexcliente = (req, res, next) => {
  if (req.session.login) {
    let nomusu = req.session.usu;
  let rolito = req.session.rol;

  res.render("indexcliente", { nu: nomusu, rol: rolito });
  }else{
      res.redirect('/');
  }
  
};
controller.transferirdinero = (req, res, next) => {
  if (req.session.login) {
    let nomusu = req.session.usu;
  let rolito = req.session.rol;
  cnn.query("select * from tbclientes inner join tbusuarios on tbclientes.doccli=tbusuarios.doccli  where tbusuarios.nomusu=? ", [nomusu],  (err, resultado) => {



    documento = resultado[0].doccli;
    nombre = resultado[0].nomcli;
    apellido=resultado[0].apecli;
    correo=resultado[0].correocli;
    celular=resultado[0].celularcli;
    sexo=resultado[0].sexo;
    fecha= resultado[0].fechnaccli;

    req.session.documentocli = documento;
    req.session.nombrecli = nombre;
    req.session.sexocli = sexo;
    let docu = req.session.documentocli;
    let sex=req.session.sexocli;

    let nom=req.session.nombrecli ;
    if (err) {
     next(new Error(err));
   }else {
     

     cnn.query("SELECT  *  from tbcreditos inner join tbusuarios on tbcreditos.doccli = tbusuarios.doccli WHERE tbusuarios.doccli='"+docu +"'",async(err,resbd)=>{



       if (err) {
           next(new Error(err));
         }else {

       
          
           res.render("vistatransferir", { nu: nomusu,sex:sex,nom:nom, rol: rolito,datoos:resbd ,datospe:resultado});
           
         }
   
     });





   }



});

  
  }else{
      res.redirect('/');
  }
  
};
/*
controller.consultarsolocliente= (req, res, next) => {


  const doc =  req.body.doc;


  cnn.query("select * from tbclientes where doccli=?", [doc],  (err, resultado) => {



       documento = resultado[0].doccli;
        nombre = resultado[0].nomcli;
        apellido=resultado[0].apecli;
        correo=resultado[0].correocli;
        celular=resultado[0].celularcli;
        sexo=resultado[0].sexo;
        fecha= resultado[0].fechnaccli;

        req.session.documentocli = documento;



  

  });


};*/

/*
controller.consultarcreditossolo = (req, res, next) => {
  
  let docu = req.session.documentocli;

  cnn.query("SELECT  *  from tbcreditos inner join tbusuarios on tbcreditos.doccli = tbusuarios.doccli WHERE tbusuarios.nomusu='"+docu +"'",(err,resbd)=>{



    if (err) {
        next(new Error(err));
      }else {
    
        res.redirect("vistacliente",{datoos:resbd});
        
      }

  });
 
};*/

controller.consultausuarios = (req, res, next) => {

  if(req.session.login){
  cnn.query("select * from  tbusuarios", (err, resbd) => {
    if (err) {
      next(new Error(err));
    } else {
      if (req.session.login) {
      }
      let nomusu = req.session.usu;
      let rolito = req.session.rol;
      console.log(resbd);
      res.render("vistaadministrador", {datos: resbd, nu: nomusu, rol: rolito, });
        }
    });
  }else{
    res.redirect('/');

  }


};


controller.consultamisemple = (req, res, next) => {
  cnn.query(
    "select c.doccli,nomcli,apecli,correocli,celularcli,sexo,nomusu,estado from tbclientes as c inner join tbusuarios as u on(c.doccli=u.doccli) where rol = 'Empleado'",
    (err, resbd) => {
      if (err) {
        next(new Error(err));
      } else {
        console.log(resbd);
        res.render("vistaadministrador", { datitos: resbd });
      }
    }
  );
};

controller.consultaclientes = (req, res, next) => {
  if(req.session.login){
  cnn.query("select * from tbclientes", (err, resbd) => {
    if (err) {
      next(new Error(err));
    } else {
      console.log(resbd);

      if (req.session.login) {
        let nombreusu = req.session.ussu;
        res.render("panelempleado", { data: resbd, ussu: nombreusu });
      }
    }
  });
}else{
  res.redirect('/');
}
};

controller.consultacreditos = (req, res, next) => {
  cnn.query("select * from tbcreditos", (err, resbd) => {
    if (err) {
      next(new Error(err));
    } else {
      const userr = req.session.usu;
      delete req.session.usu;

      console.log(resbd);
      res.render("vistacreditos", { datos: resbd, userr });
    }
  });
};

controller.consultalineas = (req, res, next) => {
  cnn.query("select * from tblineas", (err, resbd) => {
    if (err) {
      next(new Error(err));
    } else {
      console.log(resbd);
      res.render("vistalineas", { datos: resbd });
    }
  });
};
//Insertar usuarios
controller.insertarusu = async (req, res, next) => {
  const d = req.body.doc;
  const u = req.body.usu;
  const c = req.body.cla;
  const r = req.body.rol;
  const e = req.body.est;
  const i = req.body.img;
  const pass = await bcryptjs.hash(c, 8);
  cnn.query(
    "INSERT into tbusuarios SET?",
    { doccli: d, nomusu: u, clave: pass, rol: r, estado: e, imagen: i },
    (err, resbd) => {
      if (err) {
        next(new Error(err));
      } else {
        console.log(resbd);
        res.redirect("/vistaadministrador");
      }
    }
  );
};

//Insertar Creditos

controller.insertarcred = (req, res, next) => {
  const cc = req.body.Codcredito;
  const d = req.body.Documentocli;
  const cl = req.body.Codlinea;
  const m = req.body.Monto;
  const f = req.body.Fecha;
  const p = req.body.Plazo;
  cnn.query(
    "INSERT into tbcreditos SET?",
    {
      codigocredito: cc,
      doccli: d,
      codlinea: cl,
      montoprestado: m,
      fechaaproba: f,
      plazo: p,
    },
    (err, resbd) => {
      if (err) {
        next(new Error(err));
      } else {
        console.log(resbd);
        res.redirect("/vistacreditos");
      }
    }
  );
};

//Insertar Linea Cred

controller.insertarlinea = (req, res, next) => {
  const cod = req.body.codigol;
  const nomlinea = req.body.nomlinea;
  const montomaximo = req.body.montomax;
  const plazomaximo = req.body.plazomax;

  cnn.query(
    "INSERT INTO tblineas SET?",
    {
      codlinea: cod,
      nomlinea: nomlinea,
      montomaxicredito: montomaximo,
      plazomaxcred: plazomaximo,
    },
    (err, resbd) => {
      if (err) {
        next(new Error(err));
      } else {
        console.log(resbd);
        res.redirect("/vistalineas");
      }
    }
  );
};

controller.crearcuenta=(req,res,next)=>{

  const doccli =req.body.documento;
  const  codigo =req.body.codigo_producto;
  const  saldo = req.body.dinero;
  const  fechamo=req.body.fecha_mo; 
  
  const fechacrea=req.body.fecha_cre;
  cnn.query("INSERT INTO  cuenta  set?",{doccliente:doccli, codigoproducto:codigo, saldo:saldo, fechamovimiento:fechamo, fechacreacion:fechacrea},(err,resbd)=>{

  if(err){
    next(new Error(err));
  }else{
    res.redirect("creartipocuenta");
  }


  })




}

controller.insertarcliente = (req, res, next) => {
  const doccli = req.body.doc;
  const nomcli = req.body.nom;
  const apecli = req.body.ape;
  const correocli = req.body.correo;
  const celularcli = req.body.telefono;
  const sexo = req.body.sexo;
  const fechnaccli = req.body.fecnac;

  cnn.query(
    "INSERT INTO tbclientes SET?",
    {
      doccli: doccli,
      nomcli: nomcli,
      apecli: apecli,
      correocli: correocli,
      celularcli: celularcli,
      sexo: sexo,
      fechnaccli: fechnaccli,
    },
    (err, resbd) => {
      if (err) {
        next(new Error(err));
      } else {
        console.log(resbd);
        res.redirect("/");
      }
    }
  );
};

controller.cliente = (req, res, next) => {
  res.redirect("register");
};

controller.actualizar = async (req, res, next) => {
  const doc = req.body.do;
  const usu = req.body.us;
  const cla = req.body.cl;
  const rol = req.body.ro;
  const est = req.body.es;
  const img = req.body.im;
  const password = await bcryptjs.hash(cla, 8);
  cnn.query(
    'UPDATE tbusuarios SET nomusu="' +
      usu +
      '",clave="' +
      password +
      '",rol="' +
      rol +
      '",estado="' +
      est +
      '",imagen="' +
      img +
      '" where doccli="' +
      doc +
      '"',
    async (err, respbd) => {
      if (err) {
        next(new Error("Este es el error " + err));
      } else {
        console.log(respbd);
        res.redirect("vistaadministrador");
      }
    }
  );
};

controller.actualizarCred = async (req, res, next) => {
  const cod = req.body.co;
  const doc = req.body.documento;
  const codlin = req.body.lineacod;
  const monto = req.body.mon;
  const fecha = req.body.fapro;
  const plazo = req.body.pla;

  cnn.query(
    'UPDATE tbcreditos SET doccli="' +
      doc +
      '",codlinea="' +
      codlin +
      '",montoprestado="' +
      monto +
      '",fechaaproba="' +
      fecha +
      '",plazo="' +
      plazo +
      '" where codigocredito="' +
      cod +
      '"',
    async (err, resbb) => {
      if (err) {
        next(new Error("Este es el error " + err));
      } else {
        console.log(resbb);
        res.redirect("vistacreditos");
      }
    }
  );
};
controller.actualizarLineas = async (req, res, next) => {
  const cod = req.body.codigo;
  const nom = req.body.nombrelinea;

  const monto = req.body.montomaximo;

  const plazo = req.body.plazomaximo;

  cnn.query('UPDATE tblineas SET nomlinea="' +nom + '",montomaxicredito="' +monto +'",plazomaxcred="' +plazo +'"  where codlinea="' + cod + '"',async (err, resbb) => {
      if (err) {
        next(new Error("Este es el error " + err));
      } else {
        console.log(resbb);
        res.redirect("vistalineas");
      }
    }
  );
};


controller.transferir=async(req,res,next)=>{

const doc =req.body.documento;
const cod = req.body.codigo_producto;
const consig =req.body.consignacion;


cnn.query("UPDATE  cuenta   set saldo=saldo+"+consig+" where codigoproducto='"+cod+"'",async(err,resbd)=>{


  if (err) {
    next(new Error("Este es el error " + err));
  } else {
    console.log(resbd);
    res.redirect("vistatransferir");
  }

}

);

};

controller.quitardinero=async(req,res,next)=>{

  const docu = req.body.documento;
  const cod = req.body.codigo_producto;
  const consig =req.body.consignacion;
  cnn.query('UPDATE  cuenta   set saldo=saldo-"'+consig+'" where doccliente="'+docu+'"',async(err,respbd)=>{


    if (err) {
      next(new Error("Este es el error " + err));
    } else {
      console.log(respbd);
      res.redirect("vistatransferir");
    }
  
  }
  

  );



}


/* METODOS ELIMINAR*/ 

controller.borrarLineas = async (req, res, next) => {
  const cod = req.body.codigo;
  const nom = req.body.nombrelinea;

  const monto = req.body.montomaximo;

  const plazo = req.body.plazomaximo;

  cnn.query(
    'delete from tblineas  where codlinea="' +cod +'"',async (err, resbb) => {
      if (err) {
        next(new Error("Este es el error " + err));
      } else {
        console.log(resbb);
        res.redirect("vistalineas");
      }
    }
  );
};
controller.borrarCred = async (req, res, next) => {
  const cod = req.body.co;
  const doc = req.body.documento;
  const codlin = req.body.lineacod;
  const monto = req.body.mon;
  const fecha = req.body.fapro;
  const plazo = req.body.pla;

  cnn.query('DELETE from  tbcreditos  where codigocredito="' + cod +'"',async (err, resbb) => {
      if (err) {
        next(new Error("Este es el error " + err));
      } else {
        console.log(resbb);
        res.redirect("vistacreditos");
      }
    }
  );
};

controller.borrarusuario= async(req, res, next) => {
  const doc = req.body.do;
 


  cnn.query('DELETE  from tbusuarios  WHERE doccli="' + doc + '"', async(err, respbd) => {

    if (err) {
        next(new Error(err));

    } else {
        console.log(respbd);
        res.redirect('vistaadministrador');
    }


});


}

/*CERRAR SESION*/

controller.cerrar= (req, res, next) => {

  req.session.destroy(()=>{

      res.redirect('/');


  });



}

module.exports = controller;
