let cerrar22 =document.querySelectorAll(".close22")[0];
let abrir22 =document.querySelectorAll(".consultarclientes")[0];
let modal22=document.querySelectorAll(".modal22")[0];
let modalC22 =document.querySelectorAll(".modal-container22")[0];

abrir22.addEventListener("click",function(e){
    
    e.preventDefault();
    modalC22.style.opacity="1";
    modalC22.style.visibility="visible";
    modal22.classList.toggle("modal-close22");
    
});



cerrar22.addEventListener("click",function(){
    
    
    modal22.classList.toggle("modal-close22");
    
    setTimeout(function(){
        
        
        modalC22.style.opacity="0";
        modalC22.style.visibility="hidden";
        
        
        
    },900);
    
});

window.addEventListener("click",function(e){
    
    
    if(e.target === modalC22){
        
         modal22.classList.toggle("modal-close22");
    
    setTimeout(function(){
        
        
        modalC22.style.opacity="0";
        modalC22.style.visibility="hidden";
        
        
        
    },900);
        
        
        
    }
    
    
});