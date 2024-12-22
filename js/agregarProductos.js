// Escuchar clics en los botones de "Agregar al carrito"
document.querySelectorAll('.cartButton').forEach(boton => {
    boton.addEventListener('click', (event) => {
        // Encontrar el contenedor del producto
        const productoElement = event.target.closest('.producto');
        
        // Extraer la información del producto desde los atributos data-*
        const producto = {
            id: productoElement.dataset.id,
            nombre: productoElement.dataset.nombre,
            precio: parseFloat(productoElement.dataset.precio),
            cantidad: 1 // Por defecto, una unidad
        };
        
        // Verificar y agregar al carrito (como en el ejemplo anterior)
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));

        console.log("Producto agregado al carrito:", producto);
    });
});

// Recuperar el carrito desde localStorage
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Mostrar los productos en la consola (puedes renderizarlos en HTML)
console.log("Productos en el carrito:", carrito);
