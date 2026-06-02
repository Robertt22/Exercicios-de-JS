let frase ="Eu vou ser o rei dos piratas"
 let converter = frase.toLowerCase();
 let vogais = ["a","e","i","o","u"];
 let restante ="";
let frase_final = "";
let letras ="";
 for( let i= 0; i < converter.length; i++)
         {
    letras=converter[i];

     for( let x = 0; x < vogais.length; x++)
        { 
if(converter[i] === vogais[x]){
letras = "*"

}
}
frase_final+= letras;

    }console.log(frase_final)



