$(document).ready(function() {

    alert("Actualizar entrando Linea");
    
    
    $('.btnactlineas').on('click', function(){
    
    
        let btn=$('.btnactlineas').index(this);
       
    
        let cod=$('.codigo').eq(btn);
        let nom=$('.nombrelinea').eq(btn);
       
        let monto=$('.montomaximo').eq(btn);
        let plazo=$('.plazomaximo').eq(btn);
      


        let c=cod.val();
        let n=nom.val();
        
        let m=monto.val();
        let p=plazo.val();
       
        alert(btn);
    
        alert(c+m+p);
        $.ajax({
    
            type: "POST",
            url: '/actualizarlineas',
            data:{
                codigo:c, nombrelinea:n, montomaximo:m, plazomaximo:p
    
    
            },
            success:function(res) {
    
               
    
            }
    
    
        });
    
    
    
    
    
    });
    
    
    });