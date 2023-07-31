

let Producto = function (nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}


let producto1 = new Producto("remera", 100, 10);
let producto2 = new Producto("medias", 200, 20);
let producto3 = new Producto("pantalon", 300, 30);
let producto4 = new Producto("saco", 400, 40);


let lista = [];
lista.push(producto1);
lista.push(producto2);
lista.push(producto3);
lista.push(producto4);




function filtrarProductos() {
    let salir = false;
    while (!salir) {

        let palabraClave = prompt("ingresa el producto")
        let resultado = lista.filter((producto) => producto.nombre.includes(palabraClave))

        if (resultado.length > 0) {
            console.table(resultado);
            salir = true;
        } else {
            alert("producto no encontrado: " + palabraClave)
        }
    }

}

function verProductos() {
    for (let n = 0; n < lista.length; n++) {
        console.log(lista[n])

    }

}


//inicia programa - alert principal//
let salidaPrincipal = false;
while (!salidaPrincipal) {
    let menu = prompt("opcion 1 - Ver productos \nopcion 2 - Buscar productos \n Salir S")
    if (menu == "1") {
        verProductos();
    } else if (menu == "2") {
        filtrarProductos();
    } else if (menu == "S" || menu == "s") {
        //salir del programa
        salidaPrincipal = true;  
    }
}


