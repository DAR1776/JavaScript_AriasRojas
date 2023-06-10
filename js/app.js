/*
//DECLARACION DE PRODUCTOS
class Producto {
    constructor(id, precio, unidadesDisponibles){
        this.id = id
        this.precio = precio
        this.unidadesDisponibles = unidadesDisponibles
    }

}

let carrito = []
let agregaProducto = document.querySelector(".agregarCarrito")

const producto1 = new Producto ("Sudadera con mangas", 40, 250)
const producto2 = new Producto ("Sudadera sin mangas", 35, 320)
const producto3 = new Producto ("Sudadera con capucha", 55, 135)

let catalogo = [
    {producto1},
    {producto2},
    {producto3}
]

let seguirAgregando = "NO"
let totalPrecio = 0

function calcularPrecio (){
    totalPrecio = carrito.reduce((accum, product)=>{
        return accum + product.precio
    },0)
}

// AGREGAR PRODUCTOS AL CARRITO DE COMPRAS

agregaProducto.addEventListene("click", ()=>{ 
    carrito.push(producto1)
})



while (seguirAgregando === "NO"){

    let agregarCarrito = prompt("Ingrese el numero del producto que desea agregar al carrito:")

    if (agregarCarrito == 1){
        carrito.push(producto1)
    }
    else if (agregarCarrito == 2){
        carrito.push(producto2)
    }
    else if (agregarCarrito == 3){
        carrito.push(producto3)
    }
    else{
        alert ("Valor no ingresado o valido")
    }

    seguirAgregando = prompt("Para continuar ingrese Si, para agregar mas productos ingrese No")
    seguirAgregando = seguirAgregando.toUpperCase()
}

// MOSTRAR CARRITO DE COMPRAS

console.log(carrito)

//CALCULAR PRECIO
calcularPrecio()

//DESCUENTO
if (carrito.length >= 3){
    totalPrecio = totalPrecio * 0.9
    alert(`El total de su compra seria de: $${totalPrecio} con un descuento aplicado del 10%`)
}
else{
    alert(`El total de su compra seria de: $${totalPrecio}`)
}
*/



//DECLARACION DE PRODUCTOS

const tabla = document.querySelector(".table")

btnProducto1 = document.querySelector("#btnProducto1")
btnProducto2 = document.querySelector("#btnProducto2")
btnProducto3 = document.querySelector("#btnProducto3")

class Producto {
    constructor(id ,nombre, precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }

}

const producto1 = new Producto ( 1,"Long Live The King", "40$")
const producto2 = new Producto ( 2,"Revolution MMXXIII", "55$")
const producto3 = new Producto ( 3,"Goddess Revolution", "45$")

let carrito = []

btnProducto1.addEventListener('click', function() {
    agregarProducto(producto1.id, producto1.nombre, producto1.precio)
});
btnProducto2.addEventListener('click', function() {
    agregarProducto(producto2.id, producto2.nombre, producto2.precio)
});
btnProducto3.addEventListener('click', function() {
    agregarProducto(producto3.id, producto3.nombre, producto3.precio)
});

function agregarProducto(id, nombre, precio){
    console.log("Click");
    nombre.unidades++;
    carrito.push(new Producto (id, nombre, precio));
    console.log(carrito);
}

function mostrarTabla (nombre, unidades, precio){
    let fila = tabla.insertRow();
    let celdaProducto = fila.insertCell();
    let celdaUnidades = fila.insertCell();
    let celdaPrecio = fila.insertCell();
    
    celdaProducto.innerHTML = nombre;
    celdaUnidades.innerHTML = unidades;
    celdaPrecio.innerHTML = precio;
}

function agregarUnidades(){

}

function calcularPrecio(){
    //Calcula el precio con base a las unidades 
}