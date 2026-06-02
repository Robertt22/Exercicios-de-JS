let palavra ="casa";
let inverso = "";
let inverso_final="";
for(let i = palavra.length-1; i >= 0; i--){
  inverso = palavra[i];  
inverso_final = inverso_final+inverso
if(palavra === inverso_final){
 console.log(`${inverso_final} É palíndromo`) 
}else{
 
}

} 
console.log(`${inverso_final} Não é um palíndromo`)