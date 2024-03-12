const numeroAdivinar1 = 9;
const numeroAdivinar2 = 3;
let intentos1 = 2;
let intentos2 = 3;
let ingreseNumero1 = '';
let ingreseNumero2 = '';

while ( intentos2 > 0 && ingreseNumero1 !== numeroAdivinar1 && ingreseNumero2 !== numeroAdivinar2) {
  if (intentos1 > 0){
    ingreseNumero1 = Number(prompt('Ingrese un numero del 1 al 10:'));
    intentos1 = intentos1 - 1;

  }else {
    ingreseNumero2 = Number(prompt('Ingrese un segundo numero del 1 al 10: '));
    intentos2 = intentos2 - 1;
  };
}
if(intentos2 === 0 && ingreseNumero2 != numeroAdivinar2){
  alert('Perdiste gafo');
}else{
  alert('Ganaste un perro caliente')
};