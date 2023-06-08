const prec_1 = 13000;
const prec_2 = 12000;
const prec_3 = 15000;
const prec_4 = 13500;
const sumar = 'sumar';
const restar = 'restar';
let total = number;

do {
  let id_prod = parseInt (prompt ('Seleccione Productos para agregar al carrito /n 1 - Google Pixel 5  $ 13.000 /n 2 - Samsung Galaxy S21  $ 12.000 /n 3 - Xiaomi Mi 11 $ 15.000 /n 4 -OnePlus 9 Pro $13.500  '));

  switch(id_prod){
      case 1:   let = 
                total = total_prod (id_prod,sumar);
                prec_total = + prec_1;
                Break;
      case 2:  total = total_prod (id_prod, sumar);
                prec_total = + prec_2;
                Break;
      case 3:  total = total_prod (id_prod, sumar);
                prec_total = + prec_3;
                Break;
      case 4:  total = total_prod (id_prod, sumar);
                prec_total = + prec_4;
                Break;
      case 5: alert('Ingrese una opcion validad'):

}
finalizarCompra= prompt ("Que desea hacer \n 1 - Seguir agregando al carrito \n 2 - Quitar prodcuto del carrito \n 3 - Terminar y pagar");//// funcion de agregar al carro

} while (si)

function total_prod (prod,operacion) {
     if (operacion == sumar)
            return= total + 1;
        else {
            if (operacion == restar) {
                return = total-1;
            }
        }
}
function total_precio (prod , precio){
    return= prod * precio;
}

