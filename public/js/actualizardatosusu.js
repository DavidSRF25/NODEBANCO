$(document).ready(function() {

    alert("Actualizar entrando datos usu");
    
    $('.btnactualizardatosusu').on('click', function(){
    
    
        let btn=$('.btnactualizardatosusu').index(this);
       
    
        let doc=$('.doc').eq(btn);
        let usu=$('.usu').eq(btn);
        let cla=$('.cla').eq(btn);
        let rol=$('.rol').eq(btn);
        let est=$('.est').eq(btn);
        let img=$('.img').eq(btn);
        let d=doc.val();
        let u=usu.val();
        let c=cla.val();
        let r=rol.val();
        let e=est.val();
        let i=img.val();
        alert(btn);
    
        
        $.ajax({
    
            type: "POST",
            url: '/actualizardatosusu',
            data:{
                do:d, us:u, cl:c, ro:r,es:e,im:i
    
    
            },
            success:function(res) {
    
               
    
            }
    
    
        });
    
    
    
    
    
    });
    
    
    
    
    });