

let Producto = function(nombre,precio,stock){
    this.nombre=nombre;
    this.precio=precio;
    this.stock=stock;
}


let producto1 = new Producto("remera",100,10)
let producto2 = new Producto("medias",200,20)
let producto3 = new Producto("remrea",300,30)
let producto4 = new Producto("remrea",400,40)


let lista = [producto1,producto2,producto3,producto4]


function filtrarProductos(){
    let palabraClave = prompt("ingresa el producto")
    let resultado = lista.filter((producto)=> producto.nombre.includes(palabraClave))

    if(resultado.length > 0){
        console.table(resultado)
    }else{
        alert("producto no encontrado:" + palabraClave)
    }


}




