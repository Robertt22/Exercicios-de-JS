let total_balas =  parseFloat(prompt("digite total de balas"))

let total_amigos = parseFloat(prompt("digite total de amigo" ))

let divisao = total_balas / total_amigos;

document.getElementById('resultado').innerHTML = `
você tem total de ${total_balas} e ${total_amigos} e irá dividir com cada um total de ${divisao}
`
