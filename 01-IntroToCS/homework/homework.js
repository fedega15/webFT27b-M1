'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
let numeroDecimal = 0;
for (let i = 0; i < num.length; i++) {
  let posicion = num.length -1 -i;
  (2 ** posicion) * num[i]
  numeroDecimal = numeroDecimal + (2 ** posicion)* num[i]

 

}



return numeroDecimal;

}

function DecimalABinario(num) {
  // tu codigo aca
  var numeroBinario = [];
  while(num / 2 !== 0) {
    numeroBinario.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  return numeroBinario.join("");

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}