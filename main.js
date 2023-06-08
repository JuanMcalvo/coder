const prec_1 = 13000;
const prec_2 = 16000;
const prec_3 = 14000;
const prec_4 = 15000;
let precio = 0;
let cant = 0;
let confi = String;
/* alert("Hola"); */
do {
    let opcion = parseInt(prompt('Seleccione producto para agregar al carro\n' +   '1- producto1 $13000\n2- producto 2 $ 14000\n3- producto 3 $15000 \n 4- producto 4 $16000'));
    console.log(opcion);
    switch (opcion) {
        case 1:
            cant = + sumarcantidades(cant);
            precio = + sumarprecio(prec_1,cant);
            console.log(cant);
            console.log(precio);
            break;
        case 2:
            cant = + sumarcantidades(cant);
            precio = + sumarprecio(prec_2,cant);
            break;
        case 3:
            cant = + sumarcantidades(cant);
            precio = + sumarprecio(prec_3,cant);
            break;
        case 4: /*  */
        cant = + sumarcantidades(cant);
        precio = + sumarprecio(prec_4,cant);
            break;
        default: alert('ingrese una opcion valida');
    }
   if (precio>0){
   do {
        confi = prompt ("Desea seguir comprando?\n Ingrese:\n \"Si\" , para continuar\n \"No\" , para terminar la compra");
        confi= confi.toLowerCase();
        console.log(confi);
   } while (confi !== "si" && confi !== "no");
   }
        
} while (confi !== 'no');
console.log("sale");
mostrar();


function sumarprecio(precio, cantidades) {
    return precio * cantidades;
}
function sumarcantidades (cant) {
    return cant +1;
}
function mostrar (){
      alert('Total de pructos ' + cant + ' Total a pagar ' + precio);    
}