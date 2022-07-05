const nombre = prompt("Ingrese su nombre")
let precio = 0
alert( "Hola, " + nombre + " ¡Bienvenidos a Alpha!")

let comida = prompt("Ingrese el tipo de comida deseado (opcion 1 vegetariano, opcion 2 pollo, opcion 3 carne)")

while(comida !=1 && comida !=2 && comida !=3 ) {
    alert("La opción seleccionada no existe, paparulo")
    comida = prompt("Ingrese el tipo de comida deseado (opcion 1 vegetariano, opcion 2 pollo, opcion 3 carne)")

}

if(comida == 1){
    precio = 500
}
else {
    precio = 750
}
alert("El precio de la comida es " +  precio)

let pedido =prompt("Cuantas viandas vas a llevar? Pedido mínimo 10 viandas")
while(pedido < 10){
    alert("Cantidad insuficiente")
    pedido =prompt("Cuantas viandas vas a llevar? Pedido mínimo 10 viandas")

}
alert("El total es de " + pedido * precio )

const viandas = [
    {
        id: 1,
        nombre: "Guiso de lentejas",
        detalle: "",
        precio: 500,
        stock: 100,
        img: "",
    },
    {
        id: 2,
        nombre: "Sopa de tomate",
        detalle: "",
        precio: 500,
        stock: 100,
        img: "",
    },
    {
        id: 3,
        nombre: "Rissotto de pollo",
        detalle: "",
        precio: 750,
        stock: 100,
        img: "",
    },    
    {
        id: 4,
        nombre: "Pechuga grille + pure mixto",
        detalle: "",
        precio: 750,
        stock: 100,
        img: "",
    },    
    {
        id: 5,
        nombre: "Lomo con papas",
        detalle: "",
        precio: 750,
        stock: 100,
        img: "",
    },    
    {
        id: 6,
        nombre: "Chorizo a la pomarola",
        detalle: "",
        precio: 750,
        stock: 100,
        img: "",
    }
]

let formadepago =prompt("Cual es tu forma de pago? 1)Efectivo/2)Tarjeta")
if (formadepago == "1") {
    preciofinal = (pedido * precio) * 0.90

}
else {
    preciofinal = (pedido * precio) * 1.15
}
    alert("El precio total es de "+ preciofinal)




