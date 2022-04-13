//Enunciado:

// EXERCÍCIO 2 
// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
// EXEMPLO: 
// Valor do jantar: R$80,00
// Taxa do garçom: R$8,00
// Total a pagar: R$88,00
// ---------------------------------------------------------------

const valorJantar = 80;
let taxaGarcom = 10;
let total = 0;

total = 80 + ((taxaGarcom / 100) * 80);

console.log(`Valor do jantar: R$ ${valorJantar},00`);
console.log(`Taxa do garçom: R$ ${(taxaGarcom / 100) * 80},00`);
console.log(`Total: R$ ${total},00`);

