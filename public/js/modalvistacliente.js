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

