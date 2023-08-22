// Variable para almacenar el total de la compra
var totalCompra = 0;

// Función para agregar productos
function agregarProducto(precio, producto) {
    totalCompra += precio;
    alert("¡Agregaste " + producto + " al carrito!" + "\nTotal de compra: $" + totalCompra.toFixed(2));
}

// Función para mostrar el total de la compra
function mostrarTotal() {
    alert("Total de compra: $" + totalCompra.toFixed(2));
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
        "3. Salir"
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
            alert("¡Hasta luego!");
            // Cambia el valor de la flag para salir del bucle
            flagCont = false;
            break;

        default:
            alert("Opción inválida...");
    }
}