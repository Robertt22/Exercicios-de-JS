let mesada = 350;

let gastos = parseFloat(prompt("digite o valor dos gastos"));

let  sub_gasto_e_mesada = mesada - gastos;

 
document.getElementById('resultado').innerHTML= `
Sua mesada é de ${mesada}R$ e seus gastos tem total de ${gastos} 
e sobrará para você ${sub_gasto_e_mesada}R$
`