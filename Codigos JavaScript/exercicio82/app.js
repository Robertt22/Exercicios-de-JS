
let notas = [2, 4, 10, 5, 8];
let soma = 0
for(i of notas){
    soma = i + soma;
}
 
     document.getElementById('resultado').innerHTML+=
    ( `${notas[0]} +${notas[1]} +${notas[2]} +${notas[3]} + ${notas[4]} = ${notas[0] +notas[1] +notas[2] + notas[3] +notas[4]}
        <strong> <p>X̄ = ${soma/5} </p></strong>`)
