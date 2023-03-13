const barraNavegacionDerecha = document.querySelector(".navbar-right");
const emailUsuario = document.querySelector(".navbar-email");
const menuDesplegable = document.querySelector(".desktop-menu"); 
const imgCarrito = document.querySelector(".navbar-shopping-cart"); 
const carritoDeCompra = document.querySelector(".product-detail");
const imgMobileDesplegable = document.querySelector(".menu"); 
const menuCelular = document.querySelector(".mobile-menu");



emailUsuario.addEventListener("click" , desplegarMenu );
imgCarrito.addEventListener("click" , desplegarCarrito ); 
imgMobileDesplegable.addEventListener("click" , desplegarMenuCelular)

function desplegarMenu(){

    menuDesplegable.classList.toggle("inactive"); 

}

function desplegarCarrito(){

    carritoDeCompra.classList.toggle("inactive"); 
    chequearEstadoDeMenuCelular()
    

}

function desplegarMenuCelular(){
    menuCelular.classList.toggle("inactive");
    chequearEstadoDeCarrito() 
    
}


function chequearEstadoDeCarrito() {

    const isCarrioClosed = carritoDeCompras.classList.contains("inactive"); 

    if(!isCarrioClosed){
        carritoDeCompras.classList.add("inactive"); 
    }
    
    aside.classList.toggle("inactive"); 


}


function chequearEstadoDeMenuCelular(){

   
    const isMobileMenuClosed = menuCelular.classList.contains("inactive"); 
    

    if(!isMobileMenuClosed){
        menuCelular.classList.add("inactive"); 
    }

    aside.classList.toggle("inactive"); 
    
}

