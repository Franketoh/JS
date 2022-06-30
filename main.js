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

let pedido =prompt("Cuantas viandas vas a llevar?")
while(pedido < 10){
    alert("Cantidad insuficiente")
    pedido =prompt("Cuantas viandas vas a llevar?")

}
alert("El total es de " + pedido * precio )