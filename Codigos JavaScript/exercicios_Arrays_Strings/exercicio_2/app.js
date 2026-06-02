let alunos = [];

alunos.push("josé", "Ademir", "geraldo", "Carlos");

for(let i = 0; i < alunos.length; i++){
    document.getElementById('resultado').innerHTML+=`
  <p>  Os alunos  Cadastrados são: <strong>${i} - ${alunos [i].toUpperCase()} </strong> </p>`
}