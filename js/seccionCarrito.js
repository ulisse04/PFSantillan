var listado = document.getElementById('prods');
let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    // Recuperar el carrito desde localStorage
    if (localStorage.getItem('carrito')){
        const carritoData = localStorage.getItem('carrito');
        carrito = JSON.parse(carritoData);
        console.table(carrito);

        renderizarProds(carrito);
        resumenCarrito();
    }
    else{
        localStorage.setItem('carrito', []);
        resumenCarrito();
    }
});

function renderizarProds(listaProds) {
    while (listado.firstChild) {
        listado.removeChild(listado.firstChild);
    }

    for (const prod of listaProds) {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('productos__tarjeta');
        
        const imagenEliminar = document.createElement('img');
        imagenEliminar.src = "../img/iconos/cancel.png";
        imagenEliminar.alt = "Eliminar del carrito";
        imagenEliminar.classList.add('tarjeta__eliminar');
        imagenEliminar.addEventListener('click', () => {
            eliminarCarrito(prod);
            resumenCarrito();
        });

        const imagenProducto = document.createElement('img');
        imagenProducto.src = prod.foto;
        imagenProducto.alt = prod.nombre;
        imagenProducto.classList.add('tarjeta__producto');

        const nombreProducto = document.createElement('p');
        nombreProducto.textContent = prod.nombre;

        const precioProducto = document.createElement('p');
        precioProducto.textContent = `$ ${prod.precio.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;

        tarjeta.appendChild(imagenEliminar);
        tarjeta.appendChild(imagenProducto);
        tarjeta.appendChild(nombreProducto);
        tarjeta.appendChild(precioProducto);

        listado.appendChild(tarjeta);
    }
}

function eliminarCarrito(producto) {
    // Encuentra el índice del producto en el carrito
    const indice = carrito.findIndex(item => item.id === producto.id && item.cat === producto.cat);

    carrito.splice(indice, 1);
    console.table(carrito);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert(`¡${producto.nombre} se eliminó del carrito exitosamente!`);
    renderizarProds(carrito);
    console.table(carrito);
}

function resumenCarrito() {
    const resumenContainer = document.getElementById('carritoResumen');
    resumenContainer.innerHTML = '';

    // Crear elementos HTML para el resumen
    const h3 = document.createElement('h3');
    h3.textContent = 'Resumen';

    const hr1 = document.createElement('hr');

    // Si el carrito está vacío, mostrar el mensaje "Carrito actualmente vacío"
    if (carrito.length === 0) {
        const mensajeCarritoVacio = document.createElement('p');
        mensajeCarritoVacio.textContent = 'Carrito actualmente vacío';
        resumenContainer.appendChild(h3);
        resumenContainer.appendChild(hr1);
        resumenContainer.appendChild(mensajeCarritoVacio);
    } else {
        const ul = document.createElement('ul');

        // Inicializar total a 0
        let total = 0;

        // Iterar sobre los productos en el carrito
        for (const prod of carrito) {
            const li = document.createElement('li');

            const nombreProducto = document.createElement('span');
            nombreProducto.textContent = prod.nombre;

            const precioProducto = document.createElement('p');
            const precioTotalProducto = prod.precio;
            precioProducto.textContent = `$ ${precioTotalProducto.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;

            li.appendChild(nombreProducto);
            li.appendChild(precioProducto);

            ul.appendChild(li);

            total += precioTotalProducto;
        }

        const hr2 = document.createElement('hr');

        const liTotal = document.createElement('li');
        liTotal.textContent = 'Total';

        const totalProducto = document.createElement('p');
        totalProducto.textContent = `$ ${total.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;

        liTotal.appendChild(totalProducto);

        const comprarLink = document.createElement('a');
        comprarLink.href = '#';

        const comprarInput = document.createElement('input');
        comprarInput.type = 'submit';
        comprarInput.value = 'COMPRAR';
        comprarInput.classList.add('resumen__boton');

        comprarLink.appendChild(comprarInput);

        ul.appendChild(liTotal);
        ul.appendChild(hr2);
        ul.appendChild(comprarLink);

        resumenContainer.appendChild(h3);
        resumenContainer.appendChild(hr1);
        resumenContainer.appendChild(ul);
    }
}