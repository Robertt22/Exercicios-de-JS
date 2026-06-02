let quantidade_flores = parseFloat(prompt("digite a quantitade de flores plantada no primeiro dia"))
let dia2_plantando = quantidade_flores * 2;
let dia3_plantando = quantidade_flores * 3;
let dia4_plantando = quantidade_flores * 4;
let dia5_plantando = quantidade_flores * 5;
let total_plantado = quantidade_flores + dia2_plantando + dia3_plantando + dia4_plantando + dia5_plantando;

document.getElementById('resultado').innerHTML=`
No primeiro dia plantará ${quantidade_flores}, no segundo ${dia2_plantando}, terceiro ${dia3_plantando}, 
quarto será ${dia4_plantando}, no quinto sera ${dia5_plantando} e o total plantado sera de ${total_plantado}
`
