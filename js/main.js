// Variable para almacenar el total de la compra
var totalCompra = 0;

// Array para almacenar los productos y sus precios
var productos = [];

// Función para agregar productos
function agregarProducto(precio, producto) {
    totalCompra += precio;
    if (producto && precio) {
        productos.push({ nombre: producto, precio: precio });
        alert("¡Agregaste " + producto + " al carrito! con un precio de: $" + precio.toLocaleString(undefined, { maximumFractionDigits: 2 }) + "\n\nTotal de compra hasta ahora: $" + totalCompra.toLocaleString(undefined, { maximumFractionDigits: 2 }));
    } else {
        alert("¡Agregaste un producto al carrito!" + "\n\nTotal de compra hasta ahora: $" + totalCompra.toLocaleString(undefined, { maximumFractionDigits: 2 }));
    }
}

// Función para eliminar productos del carrito
function eliminarProducto() {
    var listaEliminar = "Productos en el carrito para eliminar:\n\n";
    for (var i = 0; i < productos.length; i++) {
        listaEliminar += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio.toLocaleString(undefined, { maximumFractionDigits: 2 }) + "\n";
    }

    if (productos.length === 0) {
        alert("No hay productos en el carrito para eliminar.");
        return;
    }

    var productoAEliminar = prompt(listaEliminar + "\nSeleccione el número del producto que desea eliminar:");

    if (productoAEliminar && !isNaN(productoAEliminar) && productoAEliminar >= 1 && productoAEliminar <= productos.length) {
        var indice = productoAEliminar - 1;
        totalCompra -= productos[indice].precio;
        alert("Has eliminado " + productos[indice].nombre + " del carrito.");
        productos.splice(indice, 1);
    } else {
        alert("Opción inválida...");
    }
}

// Función para mostrar el total de la compra y la lista de productos
function mostrarTotal() {
    var listaProductos = "Productos en el carrito:\n\n";
    for (var i = 0; i < productos.length; i++) {
        listaProductos += productos[i].nombre + " - $" + productos[i].precio.toLocaleString(undefined, { maximumFractionDigits: 2 }) + "\n";
    }
    alert(listaProductos + "\n" + "Total de compra: $" + totalCompra.toLocaleString(undefined, { maximumFractionDigits: 2 }));
}

// Flag para controlar ejecuciones
let flagCont = true;
let flagProd;

// Menú principal
while (flagCont) {
    var menu = prompt(
        "--- MENU PRINCIPAL ---\n\n" +
        "1. Agregar productos\n" +
        "2. Mostrar total de compra\n" +
        "3. Eliminar producto del carrito\n" + // Nueva opción para eliminar productos
        "4. Salir"
    );

    switch (menu) {
        case "1":
            flagProd = true;

            // Menú de productos

            while (flagProd){
                var lista = prompt(
                    "--- SELECCIONE LOS PRODUCTOS A AGREGAR: ---\n\n" +
                    "1. AMD Ryzen™ 9 7900X - $320.000\n" +
                    "2. Corsair 16GB 2x8GB 3600Mhz DDR4 Vengeance Pro RGB White - $60.000\n" +
                    "3. RTX 3060 TI Asus KO O8G V2 LHR - $310.000\n" +
                    "4. Mother GIGABYTE B660 Aorus Master DDR4 - $220.000\n" +
                    "5. Volver al menu príncipal"
                );

                switch(lista){
                    case "1":
                        agregarProducto(320000, "AMD Ryzen™ 9 7900X");
                        break;
                    
                    case "2":
                        agregarProducto(60000, "Corsair 16GB 2x8GB 3600Mhz DDR4 Vengeance Pro RGB White");
                        break;
    
                    case "3":
                        agregarProducto(310000, "RTX 3060 TI Asus KO O8G V2 LHR");
                        break;
    
                    case "4":
                        agregarProducto(220000, "Mother GIGABYTE B660 Aorus Master DDR4");
                        break;
    
                    case "5":
                        // Cambia el valor de la flag para salir del bucle
                        flagProd = false;
                        break;
                    
                    default:
                        alert("Opción inválida...");
                }
            }
            break;

        case "2":
            mostrarTotal();
            break;

        case "3":
            eliminarProducto(); // Llama al nuevo método para eliminar productos
            break;

        case "4":
            alert("¡Hasta luego!");
            // Cambia el valor de la flag para salir del bucle
            flagCont = false;
            break;

        default:
            alert("Opción inválida...");
    }
}
