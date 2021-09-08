$(document).ready(function() {

    alert("entrando actualizar datos cli");
    
    
    $('.btnactcli').on('click', function(){
    
    
        let btn=$('.btnactcli').index(this);
       
    
        let doc=$('.documento').eq(btn);
        let nom=$('.nombre').eq(btn);
        let ape=$('.apellido').eq(btn);
        let corr=$('.correo').eq(btn);
        let celular=$('.celular').eq(btn);
        let sexo=$('.sexo').eq(btn);
        let fech=$('.fechanacimiento').eq(btn);
       



        let d=doc.val();
        let n=nom.val();
        let a=ape.val();
        let c=corr.val();
        let ce=celular.val();
        let s=sexo.val();
        let f=fech.val();
      
        alert(btn);
        alert(d);
    
        
        $.ajax({
    
            type: "POST",
            url: '/actualizardatoscliente',
            data:{
                doc:d, nom:n, ape:a, correo:c  ,celular:ce, Sexo:s ,fechanac:f
    
    
            },
            success:function(res) {
    
               
    
            }
    
    
        });
    
    
    
    
    
    });
    
    
    
    
    });