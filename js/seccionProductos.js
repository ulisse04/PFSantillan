var carrito = [];
const categorias = ["prodmoth", "prodcpu", "prodram", "prodalmacenamiento", "prodgpu", "prodrefrigeracion", "prodfuente", "prodgabinete", "prodperifericos"];

window.addEventListener('load', () => {
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
    for (const prod of listaProds) {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('productos__tarjeta');

        const imagenProducto = document.createElement('img');
        imagenProducto.src = prod.foto;
        imagenProducto.alt = prod.nombre;
        imagenProducto.classList.add('tarjeta__producto');

        const nombreProducto = document.createElement('p');
        nombreProducto.textContent = prod.nombre;

        const precioProducto = document.createElement('p');
        precioProducto.textContent = `$ ${prod.precio.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;

        const botonAgregar = document.createElement('button');
        botonAgregar.classList.add('tarjeta__boton');
        botonAgregar.textContent = 'Agregar';
        botonAgregar.addEventListener('click', () => {
            agregarAlCarrito(prod);
        });

        tarjeta.appendChild(imagenProducto);
        tarjeta.appendChild(nombreProducto);
        tarjeta.appendChild(precioProducto);
        tarjeta.appendChild(botonAgregar);

        listado.appendChild(tarjeta);
    }
}

for (const cat of categorias){
    var listado = document.getElementById(cat);
    renderizarProds(eval(cat));
}


function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.table(carrito);
    alert(`¡${producto.nombre} se agrego al carrito exitosamente!`);
    localStorage.setItem('carrito', JSON.stringify(carrito));
}