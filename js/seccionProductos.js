var carrito = [];

const categorias = ["prodmoth", "prodcpu", "prodram", "prodalmacenamiento", "prodgpu", "prodrefrigeracion", "prodfuente", "prodgabinete", "prodperifericos"];

window.addEventListener('load', () => {
    // Recuperar el carrito desde localStorage
    const carritoData = localStorage.getItem('carrito');

    if (carritoData) {
        carrito = JSON.parse(carritoData);
    }
});

function renderizarProds(listaProds) {
    listado.innerHTML = '';
    for (const prod of listaProds) {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('productos__tarjeta');
        tarjeta.innerHTML = `
            <img src=${prod.foto} class="tarjeta__producto" alt=${prod.nombre}>
            <p>${prod.nombre}</p>
            <p>$ ${prod.precio.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
            <button class="tarjeta__boton">Agregar</button>
        `;

        // Agrega un evento de clic al botón "Agregar al Carrito"
        tarjeta.querySelector('.tarjeta__boton').addEventListener('click', () => {
            agregarAlCarrito(prod);
        });

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
    alert(`Agregaste ${producto.nombre} al carro 🛒`);
    localStorage.setItem('carrito', JSON.stringify(carrito));
}