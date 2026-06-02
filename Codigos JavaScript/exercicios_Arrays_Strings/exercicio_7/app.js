let nomes = ["maria", "joao", "sabrina", "rafael"];
let lista_vip =[];


for(let i = 0; i < nomes.length; i++){
let nome_formatacao = nomes[i][0].toUpperCase()+ nomes[i].substring(1)


lista_vip.push(nome_formatacao)

}
for( let x of lista_vip){
console.log(` Lista Vip:
  - ${x}`)
}