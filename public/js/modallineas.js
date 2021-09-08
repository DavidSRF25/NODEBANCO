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

let cerrar2 =document.querySelectorAll(".close2")[0];
let abrir2 =document.querySelectorAll(".insertar")[0];
let modal2 =document.querySelectorAll(".modal2")[0];
let modalC2 =document.querySelectorAll(".modal-container2")[0];

abrir2.addEventListener("click",function(e){
    
    e.preventDefault();
    modalC2.style.opacity="1";
    modalC2.style.visibility="visible";
    modal2.classList.toggle("modal-close2");
    
});



cerrar2.addEventListener("click",function(){
    
    
    modal2.classList.toggle("modal-close2");
    
    setTimeout(function(){
        
        
        modalC2.style.opacity="0";
        modalC2.style.visibility="hidden";
        
        
        
    },900);
    
});

window.addEventListener("click",function(e){
    
    
    if(e.target === modalC2){
        
         modal2.classList.toggle("modal-close2");
    
    setTimeout(function(){
        
        
        modalC2.style.opacity="0";
        modalC2.style.visibility="hidden";
        
        
        
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

let cerrar4 =document.querySelectorAll(".close4")[0];
let abrir4 =document.querySelectorAll(".borrarcred")[0];
let modal4 =document.querySelectorAll(".modal4")[0];
let modalC4 =document.querySelectorAll(".modal-container4")[0];

abrir4.addEventListener("click",function(e){
    
    e.preventDefault();
    modalC4.style.opacity="1";
    modalC4.style.visibility="visible";
    modal4.classList.toggle("modal-close4");
    
});



cerrar4.addEventListener("click",function(){
    
    
    modal4.classList.toggle("modal-close4");
    
    setTimeout(function(){
        
        
        modalC4.style.opacity="0";
        modalC4.style.visibility="hidden";
        
        
        
    },900);
    
});

window.addEventListener("click",function(e){
    
    
    if(e.target === modalC4){
        
         modal4.classList.toggle("modal-close4");
    
    setTimeout(function(){
        
        
        modalC4.style.opacity="0";
        modalC4.style.visibility="hidden";
        
        
        
    },900);
        
        
        
    }
    
    
});