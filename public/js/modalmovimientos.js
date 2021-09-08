let cerrar20 =document.querySelectorAll(".close20")[0];
let abrir20 =document.querySelectorAll(".misaldo")[0];
let modal20 =document.querySelectorAll(".modal20")[0];
let modalC20 =document.querySelectorAll(".modal-container20")[0];

abrir20.addEventListener("click",function(e){
    
    e.preventDefault();
    modalC20.style.opacity="1";
    modalC20.style.visibility="visible";
    modal20.classList.toggle("modal-close20");
    
});



cerrar20.addEventListener("click",function(){
    
    
    modal20.classList.toggle("modal-close20");
    
    setTimeout(function(){
        
        
        modalC20.style.opacity="0";
        modalC20.style.visibility="hidden";
        
        
        
    },900);
    
});

window.addEventListener("click",function(e){
    
    
    if(e.target === modalC20){
        
         modal20.classList.toggle("modal-close20");
    
    setTimeout(function(){
        
        
        modalC20.style.opacity="0";
        modalC20.style.visibility="hidden";
        
        
        
    },900);
        
        
        
    }
    
    
});
let cerrar4 =document.querySelectorAll(".close4")[0];
let abrir4 =document.querySelectorAll(".mismovimientos")[0];
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