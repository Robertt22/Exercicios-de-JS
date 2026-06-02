let total_saldo =  parseFloat(prompt("digite saldo total"));

let amigo1 = parseFloat(prompt("digite a quantia que sera dividida ao primeiro"));
let amigo2 = amigo1*2
let amigo3 = amigo2*2

document.getElementById('resultado').innerHTML = `
você tem total saldo total de ${total_saldo} e o primeiro amigo recebera ${amigo1}, o segundo ${amigo2}
e o terceiro recebera ${amigo3}

`
