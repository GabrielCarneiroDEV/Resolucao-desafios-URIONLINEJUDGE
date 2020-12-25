const input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var valor = parseInt(lines.shift());

let minutos = 0
let horas = 0
let segundos = 0


if(valor >= 60){
for (let i = 0; i != valor; i++){

    if(i % 60 === 0){
        minutos ++;
        valor -= 60;
        i = 0;
        if(minutos%60 === 0){
            horas ++;
            minutos -= 60;
        }
    }
   }

}
segundos = valor;
console.log(`${horas}:${minutos}:${segundos}`)

console.log(0%60)
