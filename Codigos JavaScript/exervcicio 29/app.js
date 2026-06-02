let preco_livro = 55;
let porcentagem = 5 / 100;
let desconto = preco_livro * porcentagem;
let preco_final = preco_livro - desconto;

document.getElementById('resultado').innerHTML =`
preço do livro é de ${preco_livro} com desconto o preço final será de ${preco_final}
`