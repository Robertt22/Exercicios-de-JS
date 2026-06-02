let palavra = ["paralelepipedo", "jose", "carlos", "almeida", "cacilda", "epaminondas"];

let maior = 0;
let menor = 0
let palavra_maior ="";
let palavra_menor ="";
for(let i = 0; i < palavra.length; i++){

   if(maior < palavra[i].length){
maior = palavra[i].length;
palavra_maior = palavra[i]   
menor = palavra[i].length;
   }else if(menor >= palavra[i].length){
   menor = palavra[i].length
   palavra_menor = palavra[i];
   }
}
document.getElementById('resultado').innerHTML =(` <strong>${palavra_maior}</strong> <span id = "verde">${maior}</span>, <strong>  ${palavra_menor}  e</strong> <span id = "vermelho">${menor}</span>`)

