let ano = parseFloat(prompt("digite um ano"));

if(ano % 4 === 0 || ano % 100 !== 0 && ano % 400 === 0){
    console.log("Seu ano é bissexto!!")
}else{
    console.log(" Seu ano não é bissexto!!")
}