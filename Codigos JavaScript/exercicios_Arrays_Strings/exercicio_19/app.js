let lista = ["banana", "abacaxi", "laranja", "manga", "uva", "maracuja"];
let contador = 0;
let letra = "a";
let soma = 0;
let separar = "";
let palavras = "";
let max = 0;
let palavra = "";
for(let i = 0; i < lista.length; i++){
contador = 0; 
 separar = lista[i].split("");  

 
 
    

  for(let x = 0; x < separar.length; x++){
if(separar[x]==letra){
    soma++
contador++

}


}
if(max <= contador){
palavra = lista[i]
   max=contador;
  
} 

}console.log(`A palavra que contem mais "a" é ${palavra}. Maximo de letras "a" é: ${soma}`)
