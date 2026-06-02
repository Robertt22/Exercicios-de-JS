let num_1 = parseFloat(prompt("digite o primeiro número."))
let num_2 = parseFloat(prompt("digite o segundo número."))
soma = num_1 +num_2;
raiz_cúbica = Math.cbrt(soma);
if(soma == 10){
    console.log(`A soma dos números é ${soma} e a raiz de ${soma}
        é ${raiz_cúbica}`)

} else{
    console.log(null + ". Não é dez!!")
}