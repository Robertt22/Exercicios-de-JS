let sorvete_cascao = 7
let sorvete_casquinha = 4

let totalVendido_sorvete_cascao = parseFloat(prompt("digite o valor total de sorvetes de cascão vendido"))
let totalVendido_sorvete_casquinha = parseFloat(prompt("digite o valor total de sorvetes de casquinha vendido"))

 let multi_sorveteCascao =  totalVendido_sorvete_cascao * sorvete_cascao;
 let multi_sorveteCasquinha = totalVendido_sorvete_casquinha * sorvete_casquinha; 
 let soma_total_todos = totalVendido_sorvete_cascao + totalVendido_sorvete_casquinha;

 document.getElementById('resultado').innerHTML =`
 O total de sorvete(s) de cascão vendido(s) são de ${totalVendido_sorvete_cascao} e o dinheiro total 
 conseguido foi de ${multi_sorveteCascao} R$
  e o sorvete(s) de casquinha teve um total vendido de ${totalVendido_sorvete_casquinha} 
  e a quantidade de dinheiro total das venda(s) foram de ${multi_sorveteCasquinha} R$. O total 
  de todos os sorvetes  vendidos é de ${soma_total_todos}
 `
