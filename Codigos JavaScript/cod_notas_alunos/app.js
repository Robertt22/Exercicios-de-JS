let alunos = [{
    nome : "José",
    sobrenome:"Santos" ,
    nota: Math.floor(Math.random()*10),
}
 , {
       nome : "Maria",
    sobrenome:"Clara" ,
    nota: Math.floor(Math.random()*10),
}
 , {
       nome : "Roberto",
    sobrenome:"Santos" ,
    nota: Math.floor(Math.random()*10)
},
   {nome : "Alberto",
    sobrenome:"Oliveira" ,
    nota: Math.floor(Math.random()*10),  
}
 , {  
    nome : "Taina",
    sobrenome:"Filho" ,
    nota: Math.floor(Math.random()*10),
}
 , {
    nome : "Alonso",
    sobrenome:"Motta" ,
    nota: Math.floor(Math.random()*10),
}
 , {
    nome : "Felipe",
    sobrenome:"Matias" ,
    nota: Math.floor(Math.random()*10),
} 
 , {
    nome : "José",
    sobrenome:"Felipe" ,
    nota: Math.floor(Math.random()*10),
}
 , {
    nome : "Daniel",
    sobrenome:"Carvalho" ,
    nota: Math.floor(Math.random()*10),
}
 , {
    nome : "Nathalia",
    sobrenome:"Almeida" ,
    nota: Math.floor(Math.random()*10),
}
 , {
    nome : "Pedro",
    sobrenome:"Luis" ,
    nota: Math.floor(Math.random()*10),
}, {
    nome : "luis",
    sobrenome:"Felipe" ,
    nota: Math.floor(Math.random()*10),
}
];
let num = Math.floor(Math.random()*16)

for(i of alunos){
    
    if(alunos.nota===10 ){
        console.log(`
            Parabéns ao Aluno(A) que gabaritaram ${i.nome} ${i.sobrenome} com Nota de: ${i.nota}, Foi Aprovado.
              `)

    }else if(i.nota >=9) {console.log(`
        Parabéns ao Aluno(A) ${i.nome} ${i.sobrenome} com Nota de: ${i.nota}, Chegou perto de gabaritar, Foi Aprovado.
         `)
    

}else if(i.nota >=7) {console.log(`
    Parabéns ao Aluno(A) ${i.nome} ${i.sobrenome} com Nota de: ${i.nota}, Foi Aprovado, por pouco.
     `)}
else{
    console.log(`
        O Aluno(A) ${i.nome} ${i.sobrenome} Foi Reprovado com nota de: ${i.nota}`)
       }
    }

  