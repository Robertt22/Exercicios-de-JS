let palavras = ["Papagaio", "Avestruz","Cubo", "Paralelepipedo","sol", "Luffy", "Matraca", "dorflex"];
let tam_palavra = 0;
let palavra = "";
for(let i = 0; i < palavras.length; i++){
  if(tam_palavra < palavras[i].length){
    tam_palavra = palavras[i].length
    palavra = palavras[i];
  }
}console.log(palavra +" e "+ tam_palavra )