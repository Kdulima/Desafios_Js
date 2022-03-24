// EXERCÍCIO 3
// =========================
// Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
// EXEMPLO:
// Preço: R$60,00
// À vista: R$54,00
// Ou 3x de: R$20,00
// =========================

const price = 60;
let discount = 50;
let spotPrice = 0;
let installmentPrice = 0;

discount = ((discount / 100) * 60);

console.log(`Valor R$${price},00`)
console.log(`Valor á vista R$ ${(price - discount)},00`);
console.log(`Ou 3 vezes de R$${(price / 3)},00`)