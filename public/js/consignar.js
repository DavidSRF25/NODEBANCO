$(document).ready(function() {


    
    $('.consignar').on('click', function(){
    
    
        let btn=$('.consignar').index(this);
       
    
        let doc=$('.doc').eq(btn);
        let cod=$('.cod').eq(btn);
        let monto=$('.monto').eq(btn);
        let fechamov=$('.fechamov').eq(btn);
        
        let d=doc.val();
        let c=cod.val();
        let m=monto.val();
        let f=fechamov.val();
     
        alert(btn);

        alert(m);
    
        
        $.ajax({
    
            type: "POST",
            url: '/consignar',
            data:{
                documento:d, codigo_producto:c, consignacion:m, fecha_mo:f
    
    
            },
            success:function(res) {
    
               
    
            }
    
    
        });
    
    
    
    
    
    });
    
    
    
    
    });