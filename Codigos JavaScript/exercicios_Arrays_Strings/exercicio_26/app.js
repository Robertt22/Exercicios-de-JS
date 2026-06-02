let nomes =  ["Ana Souza", "Bruno Lima", "Carla Pereira"]
let dividir = "";
let apelido = "";
let primeiro_nome = [];
let real_name =[];
let show_pag = document.getElementById('resultado')
 for(let i= 0; i< nomes.length; i++)
    {
        real_name += " " + nomes[i] +", ";
dividir = nomes[i].split(" ")
primeiro_nome +=" " + dividir[0]+", "; 

 }show_pag.innerHTML+=`Os apelidos são ${primeiro_nome} e nome verdadeiro é: ${real_name}`
