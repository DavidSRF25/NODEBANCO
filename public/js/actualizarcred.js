$(document).ready(function() {

    alert("Actualizar entrando cred");
    
    
    $('.btnactcred').on('click', function(){
    
    
        let btn=$('.btnactcred').index(this);
       
    
        let cod=$('.cod').eq(btn);
        let doc=$('.doc').eq(btn);
        let codlinea=$('.codlinea').eq(btn);
        let monto=$('.monto').eq(btn);
        let fecha=$('.fech').eq(btn);
        let plazo=$('.plazo').eq(btn);
        let c=cod.val();
        let d=doc.val();
        let cl=codlinea.val();
        let m=monto.val();
        let f=fecha.val();
        let p=plazo.val();
        alert(btn);
    
        alert(c+m+p);
        $.ajax({
    
            type: "POST",
            url: '/actualizarcred',
            data:{
                co:c, documento:d, lineacod:cl, mon:m, fapro:f, pla:p
    
    
            },
            success:function(res) {
    
               
    
            }
    
    
        });
    
    
    
    
    
    });
    
    
    });