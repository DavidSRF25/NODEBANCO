
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
