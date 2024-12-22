/*

// Recuperar el carrito desde localStorage
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Mostrar los productos en la consola (puedes renderizarlos en HTML)
console.log("Productos en el carrito:", carrito);

// Renderizar el carrito en la página (HTML dinámico)
const carritoContainer = document.getElementById('carrito-container');
let prodTabla = document.getElementById("productoTabla");
let priceTabla = document.getElementById("productoPrecio");
let qtyTabla = document.getElementById("cantidadTabla");*/

/*carrito.forEach(producto => {
    const item = document.createElement('div');
    item.innerHTML = `
        <p>Producto: ${producto.nombre}</p>
        <p>Precio: $${producto.precio}</p>
        <p>Cantidad: ${producto.cantidad}</p>
    `;
    carritoContainer.appendChild(item);
});*/

/*function cargarCarrito() {
    let listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';

    carrito.forEach(producto => {
        const item = document.createElement('tr');

        let td = document.createElement('td');
        td.textContent = producto.nombre + ' - $' + producto.precio;
        listaCarrito.appendChild(td);
        carritoContainer.appendChild(item);
    });
}
let listaCarrito = document.getElementById('lista-carrito');
carrito.forEach(recorrerCarrito => {
    listaCarrito.appendChild(td);
    carritoContainer.appendChild(td);
    
});
function recorrerCarrito(){
    for(let i = 0; i < carrito.lenght; i++){
        let td = document.createElement("td");
        td.textContent = carrito[i];
        listaCarrito.appendChild(td);
    }
}*/

document.addEventListener("DOMContentLoaded", () => {
    const tablaCarrito = document.getElementById("tablaCarrito");
    const totalCarrito = document.getElementById("totalCarrito");
    // Obtener carrito de localStorage
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    console.log("Productos en el carrito:", carrito);

    // Función para renderizar el carrito
    const renderizarCarrito = () => {
        // Limpiar tabla
        tablaCarrito.innerHTML = "";

        if (carrito.length === 0) {
            tablaCarrito.innerHTML = "<tr><td colspan='3'>El carrito está vacío.</td></tr>";
            totalCarrito.textContent = "0.00";
            return;
        }
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

        // Actualizar el total
        calcularTotal();
    });

    const calcularTotal = () => { 
        // Declaración de la función calcularTotal como una función flecha.
        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
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

//renderizar productos
//let tablaCarrito = document.getElementById("tablaCarrito");
/*carrito.forEach((producto, index) =>{
    const fila = document.createElement("tr");
    fila.innerHTML=`
        <td>${producto.nombre}</td>
        <td>$${producto.precio}</td>
        <td>${producto.cantidad}</td>
        <td>
        <button class="btn btn-danger btn-sm" onClick="eliminarProd()" data-index="${index}">Eliminar</button>
        </td>
    `
    tablaCarrito.appendChild(fila);
})*/

// Event listener para eliminar un producto
tablaCarrito.addEventListener("click", (event) => { 
    // Añadimos un event listener al elemento con ID `tablaCarrito`.
    // Este listener detecta un click en cualquier parte del cuerpo de la tabla.

    if (event.target.classList.contains("btn-danger")) { 
        // Verificamos si el elemento clicado (`event.target`) tiene la clase `btn-danger`.
        // Esto asegura que solo reaccione a clicks en los botones "Eliminar".

        const index = event.target.getAttribute("data-index"); 
        // Obtenemos el atributo `data-index` del botón clickeado.
        // Este atributo indica la posición del producto en el array `carrito`.
// Obtener carrito de localStorage
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.splice(index, 1); 
        // Eliminamos del array `carrito` el producto correspondiente.
        // El método `splice(index, 1)` elimina 1 elemento en la posición `index`.

        localStorage.setItem("carrito", JSON.stringify(carrito)); 
        // Actualizamos el almacenamiento local (`localStorage`) con el nuevo estado del carrito.
        // Convertimos el array actualizado a una cadena JSON.

        renderizarCarrito(); 
        // Llamamos a la función `renderizarCarrito` para actualizar la tabla del carrito en la página.
        // Esto asegura que la tabla refleje el cambio tras eliminar un producto.
    }
});

function eliminarProd(){
    localStorage.removeItem('carrito');
cargarCarrito();
}
window.addEventListener('storage', (event) => {
    if (event.key === 'carrito') {
        console.log("El carrito ha cambiado:", JSON.parse(event.newValue));
    }
});
