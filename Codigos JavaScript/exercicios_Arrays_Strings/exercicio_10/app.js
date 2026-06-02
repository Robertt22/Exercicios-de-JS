let frases = ["Caneta azul, azul caneta", "Maior farmador aura era Heian", "Maior farmador aura era Moderna"];
for(let i = 0; i < frases.length; i++){
console.log(`-------------------------------------------------------
  A frase normal é: ${frases[i]}`)
console.log(`
  ${frases[i].toUpperCase()}`)
console.log( `
   a frase contém: ${frases[i].length} Caracteres `)
console.log(`
   A primeira palavra é: ${frases[i].substring(0,frases[i].indexOf(" "))}
   -------------------------------------------------------`)
}