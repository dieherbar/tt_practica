const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
// Mostrar los productos en la consola (puedes renderizarlos en HTML)
console.log("Productos en el carrito:", carrito);

const tablaCarrito = document.getElementById("tablaCarrito");
const totalCarrito = document.getElementById("totalCarrito");

// Función para renderizar el carrito
const renderizarCarrito = () => {
    // Limpiar tabla
    tablaCarrito.innerHTML = "";

    if (carrito.length === 0) {
        tablaCarrito.innerHTML = "<tr><td class='textCenter' colspan='3'>El carrito está vacío.</td></tr>";
        totalCarrito.textContent = "0.00";
        return;
    }

    // Renderizar productos en la tabla
    carrito.forEach((producto, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>
                <button class="btn btn-danger btn-sm" data-index="${index}">Eliminar</button>
            </td>
        `;
        tablaCarrito.appendChild(fila);
    });
}

//funcion para vaciar el carrito
function vaciarCarrito() {
    carrito.length = 0; // Clear the carrito array
    localStorage.removeItem('carrito');
    calcularTotal();
    renderizarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarProducto(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderizarCarrito();
    calcularTotal();
}

// Event listener para los botones de eliminar
tablaCarrito.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-danger')) {
        const index = parseInt(event.target.getAttribute('data-index'), 10);
        eliminarProducto(index);
    }
});

const calcularTotal = () => {
    // Declaración de la función calcularTotal como una función flecha.
    const total = carrito.reduce((suma, producto) => suma + parseFloat(producto.precio), 0);
    // Usamos el método .reduce() para calcular la suma de los precios de los productos en el carrito:
    // - `suma` es el acumulador que empieza en 0 (segundo argumento de reduce).
    // - `producto` es cada elemento (objeto) del array `carrito`.
    // - `parseFloat(producto.precio)` convierte el precio del producto a número decimal (en caso de que esté en formato texto).
    // - La función suma el precio de cada producto al acumulador `suma`.

    totalCarrito.textContent = total.toFixed(2);
    // Redondeamos el total a 2 decimales usando .toFixed(2) y actualizamos el contenido del elemento
    // HTML con ID `totalCarrito` para mostrar el total calculado.

};

document.addEventListener("DOMContentLoaded", () => {
    renderizarCarrito();
    calcularTotal();
});
