let conta_restaurante = parseFloat(prompt("digite o valor da conta"))

let gorjeta = conta_restaurante * 0.1;
document.getElementById('resultado').innerHTML = `
valor a ser pago da conta do restaurande é de ${conta_restaurante} e a gorjeta é de ${gorjeta}
`