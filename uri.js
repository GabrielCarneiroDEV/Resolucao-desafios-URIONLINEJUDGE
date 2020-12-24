let valor = 576
valorReal = valor
let notasDeCem = 0
let notasDeCinquenta = 0
let notasDeVinte = 0
let notasDeDez = 0
let notasDeCinco = 0
let notasDeDois = 0
let notasDeUm = 0

/*for (let i = 0; i<= valor; i++){
    if(valor > 100){
        notasDeCem+=1
        valor-=100
    }
}

for (let i = 0; i<= valor; i++){
    if(valor >= 50){
        notasDeCinquenta+=1
        valor-=50
    }
}

for (let i = 0; i<= valor; i++){
    if(valor >= 20){
        notasDeVinte+=1
        valor-=20
    }
}
for (let i = 0; i<= valor; i++){
    if(valor >= 10){
        notasDeDez+=1
        valor-=10
    }
}

for (let i = 0; i<= valor; i++){
    if(valor >= 5){
        notasDeCinco+=1
        valor-=5
    }
}
for (let i = 0; i<= valor; i++){
    if(valor >= 2){
        notasDeDois+=1
        valor-=2
    }
}

for (let i = 0; i<= valor; i++){
    if(valor >= 1){
        notasDeUm+=1
        valor-=1
    }
}






console.log(`${valorReal}`)
console.log(`${notasDeCem} nota(s) de R$ 100,00`)
console.log(`${notasDeCinquenta} nota(s) de R$ 50,00`)
console.log(`${notasDeVinte} nota(s) de R$ 20,00`)
console.log(`${notasDeDez} nota(s) de R$ 10,00`)
console.log(`${notasDeCinco} nota(s) de R$ 5,00`)
console.log(`${notasDeDois} nota(s) de R$ 2,00`)
console.log(`${notasDeUm} nota(s) de R$ 1,00`)




console.log(valor)
let notas = parseInt(valor/100)
console.log(`${notas} nota(s) de R$ 100,00`)
valor = valor % 100;

notas = parseInt(valor/50)
console.log(`${notas} nota(s) de R$ 50,00`)
valor = valor % 50;

notas = parseInt(valor/20)
console.log(`${notas} nota(s) de R$ 20,00`)
valor = valor % 20;

notas = parseInt(valor/10)
console.log(`${notas} nota(s) de R$ 10,00`)
valor = valor % 10;

notas = parseInt(valor/5)
console.log(`${notas} nota(s) de R$ 5,00`)
valor = valor % 5;

notas = parseInt(valor/2)
console.log(`${notas} nota(s) de R$ 2,00`)
valor = valor % 2;

notas = parseInt(valor/1)
console.log(`${notas} nota(s) de R$ 1,00`)
valor = valor % 1;
*/

const notas = [100, 50, 20, 10, 5, 2, 1];

for(let i = 0; i < notas.length; i++){
 let   quantidade = parseInt(valor/notas[i ]);
console.log(`${quantidade} nota(s) de R$ ${notas[i]},00`)
valor = valor % notas[i];

}


