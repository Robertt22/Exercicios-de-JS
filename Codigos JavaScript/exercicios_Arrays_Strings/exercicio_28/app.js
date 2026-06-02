let palavras = ["Abacate","Pereira","Avestruz","Dorflex","Caravela", "Bacalhau","Bitorneira","Bica"];
let palavras_convertidas = "";
let letra_b ="b";
let armazenador_de_palavras = "";
let armazenador_de_palavras_norma_culta = "";

for(let i = 0; i <palavras.length; i++)
    {palavras_convertidas = palavras[i].toLowerCase();
if(palavras_convertidas[0] === letra_b){
armazenador_de_palavras += " " + palavras_convertidas;

   }
 } 
    console.log(`A(s) únicas palavras que começam com letra b é: ${armazenador_de_palavras.toLocaleUpperCase()}`)
    // ------------TRECHO QUE EXIBE APENAS PALAVRAS COM "B"------------ \\
  
