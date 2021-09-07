$(document).ready(function() {

    alert("Transferir");
    
    $('.transferir').on('click', function(){
    
    
        let btn=$('.transferir').index(this);
       
    
        let docu=$('.doc').eq(btn);
        let cod=$('.cod').eq(btn);
        let monto=$('.monto').eq(btn);
        let fechamov=$('.fechamov').eq(btn);
        
        let d=docu.val();
        let c=cod.val();
        let m=monto.val();
        let f=fechamov.val();
     
        alert(btn);

        alert(monto);
    
        
        $.ajax({
    
            type: "POST",
            url: '/transferir',
            data:{
                documento:d, codigo_producto:c, consignacion:m, fecha_mo:f
    
    
            },
            success:function(res) {
    
               
    
            }
    
    
        });
    
    
    
    
    
    });
    
    
    
    
    });