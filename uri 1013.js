const input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");



let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
let C = parseInt(lines.shift());

let maiorAB = (A + B + Math.abs(A - B)) / 2;

let maiorABC = (maiorAB + C + Math.abs(maiorAB-C)) /2;

console.log(`${maiorABC} eh o maior`);

/*Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:



Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior". */