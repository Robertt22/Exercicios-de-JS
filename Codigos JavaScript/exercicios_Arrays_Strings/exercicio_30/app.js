let frases = [" Tecnologia", " Informação", " Ciência",
    " Dados", " Desenvolvimento", " Web"];

let frases_otimizado ="";
   let new_array = [];

   for(let i = 0; i < frases.length; i++)
      { frases_otimizado = frases[i].trim();
if(frases_otimizado.length <= 5){
new_array.push(frases[i])   
}


      }document.getElementById("paragrafo").innerHTML =`O Array original é: ${frases}. <p>O novo array é: ${new_array}.</p> `
