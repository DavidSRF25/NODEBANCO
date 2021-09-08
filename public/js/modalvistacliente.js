let cerrar8=document.querySelectorAll(".close8")[0];
let abrir8=document.querySelectorAll(".miscreditos")[0];
let modal8=document.querySelectorAll(".modal8")[0];
let modalC8=document.querySelectorAll(".modal-container8")[0];

abrir8.addEventListener("click",function(e){
    
    e.preventDefault();
    modalC8.style.opacity="1";
    modalC8.style.visibility="visible";
    modal8.classList.toggle("modal-close8");
    
});



cerrar8.addEventListener("click",function(){
    
    
    modal8.classList.toggle("modal-close8");
    
    setTimeout(function(){
        
        
        modalC8.style.opacity="0";
        modalC8.style.visibility="hidden";
        
        
        
    },900);
    
});

window.addEventListener("click",function(e){
    
    
    if(e.target === modalC8){
        
         modal8.classList.toggle("modal-close8");
    
    setTimeout(function(){
        
        
        modalC8.style.opacity="0";
        modalC8.style.visibility="hidden";
        
        
        
    },900);
        
        
        
    }
    
    
});

let cerrar3=document.querySelectorAll(".close3")[0];
let abrir3=document.querySelectorAll(".mejoresin")[0];
let modal3=document.querySelectorAll(".modal3")[0];
let modalC3=document.querySelectorAll(".modal-container3")[0];

abrir3.addEventListener("click",function(e){
    
    e.preventDefault();
    modalC3.style.opacity="1";
    modalC3.style.visibility="visible";
    modal3.classList.toggle("modal-close3");
    
});



cerrar3.addEventListener("click",function(){
    
    
    modal3.classList.toggle("modal-close3");
    
    setTimeout(function(){
        
        
        modalC3.style.opacity="0";
        modalC3.style.visibility="hidden";
        
        
        
    },900);
    
});

window.addEventListener("click",function(e){
    
    
    if(e.target === modalC3){
        
         modal3.classList.toggle("modal-close3");
    
    setTimeout(function(){
        
        
        modalC3.style.opacity="0";
        modalC3.style.visibility="hidden";
        
        
        
    },900);
        
        
        
    }
    
    
});
let cerrar5 =document.querySelectorAll(".close5")[0];
let abrir5 =document.querySelectorAll(".actualizar")[0];
let modal5 =document.querySelectorAll(".modal5")[0];
let modalC5 =document.querySelectorAll(".modal-container5")[0];

abrir5.addEventListener("click",function(e){
    
    e.preventDefault();
    modalC5.style.opacity="1";
    modalC5.style.visibility="visible";
    modal5.classList.toggle("modal-close5");
    
});



cerrar5.addEventListener("click",function(){
    
    
    modal5.classList.toggle("modal-close5");
    
    setTimeout(function(){
        
        
        modalC5.style.opacity="0";
        modalC5.style.visibility="hidden";
        
        
        
    },900);
    
});

window.addEventListener("click",function(e){
    
    
    if(e.target === modalC5){
        
         modal5.classList.toggle("modal-close5");
    
    setTimeout(function(){
        
        
        modalC5.style.opacity="0";
        modalC5.style.visibility="hidden";
        
        
        
    },900);
        
        
        
    }
    
    
});
let cerrar6 =document.querySelectorAll(".close6")[0];
let abrir6 =document.querySelectorAll(".actualizarusu")[0];
let modal6 =document.querySelectorAll(".modal6")[0];
let modalC6 =document.querySelectorAll(".modal-container6")[0];

abrir6.addEventListener("click",function(e){
    
    e.preventDefault();
    modalC6.style.opacity="1";
    modalC6.style.visibility="visible";
    modal6.classList.toggle("modal-close6");
    
});



cerrar6.addEventListener("click",function(){
    
    
    modal6.classList.toggle("modal-close5");
    
    setTimeout(function(){
        
        
        modalC6.style.opacity="0";
        modalC6.style.visibility="hidden";
        
        
        
    },900);
    
});

window.addEventListener("click",function(e){
    
    
    if(e.target === modalC6){
        
         modal6.classList.toggle("modal-close6");
    
    setTimeout(function(){
        
        
        modalC6.style.opacity="0";
        modalC6.style.visibility="hidden";
        
        
        
    },900);
        
        
        
    }
    
    
});
