const prec_1 = 13000;
const prec_2 = 16000;
const prec_3 = 14000;
const prec_4 = 15000;
let precio = 0;
let cant = 0;
let pre_prod = Number;
let confi = String;
do { //bucle del primer menu.
    let opcion = parseInt(prompt('Seleccione producto para agregar al carrito\n' + '1- producto1 $13000\n2- producto 2 $ 14000\n3- producto 3 $15000 \n4- producto 4 $16000'));
    console.log(opcion);
    switch (opcion) {
        case 1:
            cant = sumarcantidades(cant);
            precio = sumarprecio(prec_1);
            break;
        case 2:
            cant = sumarcantidades(cant);
            precio = sumarprecio(prec_2);
            break;
        case 3:
            cant = sumarcantidades(cant);
            precio = sumarprecio(prec_3);
            break;
        case 4:
            cant = sumarcantidades(cant);
            precio = sumarprecio(prec_4);
            break;
        default: alert('ingrese una opcion valida');
    }
   if (precio>0){
   do {
        confi = prompt ("Desea seguir comprando?\n Ingrese:\n \"Si\" , para continuar\n \"No\" , para terminar la compra");
        confi= confi.toLowerCase();
        console.log(confi);
   } while (confi !== "si" && confi !== "no");// bucle por si ingresa algo que no sea si o no.
   }
        
} while (confi !== 'no');
mostrar(); //final - muestra la cantidad de productos y el total a pagar.


function sumarprecio(pre_prod) {
    return pre_prod + precio;
}
function sumarcantidades (cant) {
    return cant +1;
}
function mostrar (){
      alert('Total de pructos ' + cant + ' Total a pagar ' + precio);    
}