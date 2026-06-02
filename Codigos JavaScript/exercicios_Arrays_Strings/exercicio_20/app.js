let lista = ["banana", "abacaxi", "laranja", "manga", "uva", "maracuja","1155 do Et "];
let curto = 0;
let medio = 0;
let longo = 0;
let palavra_curta = "";
let palavra_media = "";
let palavra_longa = "";

for(let i= 0; i < lista.length; i++){


    if(lista[i].length <= 4){
curto = lista[i].length;
palavra_curta += lista[i] + ", ";
}else if(lista[i].length == 5  || lista[i].length <= 7){
medio = lista[i].length;
palavra_media += lista[i] + ", ";
}else{
longo = lista[i].length;
palavra_longa += lista[i] + ", ";
}

}console.log(` A palavra  curta: ${palavra_curta}tem ${curto}, a media tem: ${palavra_media} e ${medio} e a longa: ${palavra_longa}tem  ${longo} `)
