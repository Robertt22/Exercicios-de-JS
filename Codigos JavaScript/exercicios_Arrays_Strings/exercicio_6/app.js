let frase = "aprender logica de programacao e divertido";


let divisao = frase.split(" ");


for(let i = 0; i < divisao.length; i++){
console.log(`
    O total de palavras é de: ${divisao.length}
    
     Sua terceira palavra é: "${divisao[2].toUpperCase()}" ` )

}
