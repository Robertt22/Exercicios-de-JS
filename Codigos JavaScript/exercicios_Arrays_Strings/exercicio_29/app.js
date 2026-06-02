let frases = [
    "O céu está azul hoje.",
    "A vida é um sopro.", 
    "JavaScript é muito legal de aprender.",
    "Estudar programação abre muitas portas.",
    "Desenvolver lógica exige paciência.",
    "Amanhã será um dia produtivo."
];
let maior_frase = "";

for( let i = 0; i < frases.length; i++)
    {
if(frases[i].length>maior_frase.length){
maior_frase = frases[i]
}




    }
   console.log(`A maior frase é:"${maior_frase}" e contem ${maior_frase.length} caractéres.`)
    