let palavra = "Tecnologia";

let random_letras = 0;
let letras = "";

for(let i = 0; i < palavra.length; i ++)
    { random_letras = Math.floor(Math.random()*palavra.length)
     letras +=random_letras;
     if(letras == i){
     
      }
 letras+= palavra[random_letras]
      

    } console.log(letras)