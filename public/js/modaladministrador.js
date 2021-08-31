let cerrar8 =document.querySelectorAll(".close8")[0];
let abrir8 =document.querySelectorAll(".consultarusuarios")[0];
let modal8 =document.querySelectorAll(".modal8")[0];
let modalC8 =document.querySelectorAll(".modal-container8")[0];

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
let cerrar15 =document.querySelectorAll(".close15")[0];
let abrir15 =document.querySelectorAll(".crearusuarios")[0];
let modal15 =document.querySelectorAll(".modal15")[0];
let modalC15 =document.querySelectorAll(".modal-container15")[0];

abrir15.addEventListener("click",function(e){
    
    e.preventDefault();
    modalC15.style.opacity="1";
    modalC15.style.visibility="visible";
    modal15.classList.toggle("modal-close15");
    
});



cerrar15.addEventListener("click",function(){
    
    
    modal15.classList.toggle("modal-close15");
    
    setTimeout(function(){
        
        
        modalC15.style.opacity="0";
        modalC15.style.visibility="hidden";
        
        
        
    },900);
    
});

window.addEventListener("click",function(e){
    
    
    if(e.target === modalC15){
        
         modal15.classList.toggle("modal-close15");
    
    setTimeout(function(){
        
        
        modalC15.style.opacity="0";
        modalC15.style.visibility="hidden";
        
        
        
    },900);
        
        
        
    }
    
    
});
let cerrar2 =document.querySelectorAll(".close2")[0];
let abrir2 =document.querySelectorAll(".empleados")[0];
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