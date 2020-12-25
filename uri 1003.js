const input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let soma = 0;


var A = parseInt(lines.shift());
var B= parseInt(lines.shift());

soma = A + B;


console.log("SOMA = " + soma);