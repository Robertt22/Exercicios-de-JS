let palavra = "abacate";
let separar = palavra.split("");
let vogais = ["a", "e", "i", "o", "u"];
let soma = 0;


for(let i = 0; i <separar.length; i++){
for(let x = 0; x < vogais.length; x++){

  if(separar[i]===vogais[x]){
  soma++
  }
} 

}
console.log(`Palavra:${palavra}
  Total de vogais:${soma}`) 
  
