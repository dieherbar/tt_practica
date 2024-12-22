// Funcion para simular la compra
function placeOrder() {
    if (carrito.length === 0) {
        alert("No hay productos en el carrito!");
        return;
    }
    // Simulacion de procesamiento de orden 
    setTimeout(() => {
        // Se muestra un popup de procesamiento
        alert("Estamos procesando tu compra!");

        // Redirect a pagina de agradecimiento
        window.location.href = "gracias.html";
    }, 1000); // Simula un delay de 1 segundo
    vaciarCarrito();
}

//funcion para vaciar el carrito
function vaciarCarrito() {
    carrito.length = 0; // Clear the carrito array
    localStorage.removeItem('carrito');
    //calcularTotal();
    //renderizarCarrito();
}