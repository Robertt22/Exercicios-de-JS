function reajuste_Salarial(salario){
let resultado;

if(salario <2000){
    resultado = "R$" + salario * 1.1;

}else if (salario >= 2000 && salario<= 5000){
    resultado = "R$" + salario * 1.08;

}else 
     resultado = "R$" + salario * 1.06;{
document.getElementById('resultado').innerHTML = `
O valor do salário com reajuste será de ${resultado} . `
   }
}
reajuste_Salarial(parseFloat(prompt("Digite o valor atual do seu salário.")))