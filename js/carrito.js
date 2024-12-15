

// Recuperar el carrito desde localStorage
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Mostrar los productos en la consola (puedes renderizarlos en HTML)
console.log("Productos en el carrito:", carrito);

// Renderizar el carrito en la página (HTML dinámico)
const carritoContainer = document.getElementById('carrito-container');

carrito.forEach(producto => {
    const item = document.createElement('div');
    item.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <p>Cantidad: ${producto.cantidad}</p>
    `;
    carritoContainer.appendChild(item);
});

window.addEventListener('storage', (event) => {
    if (event.key === 'carrito') {
        console.log("El carrito ha cambiado:", JSON.parse(event.newValue));
    }
});
