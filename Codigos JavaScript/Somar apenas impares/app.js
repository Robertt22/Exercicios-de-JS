let nums = [1 ,2 ,3 ,4 ,5, 6, 7 ,8, 9, 10];

for(let i = 1; i <nums.length; i++){
if(i % 2 === 1){
    console.log(`Esses números são Impares ${i} !!
                
               E sua soma é ${i} + ${i} = ${i + i}`)
}else{
     console.log(`
        Esses números são Pares ${i} !! 
    NÃO SERÁ POSSÍVEL REALIZAR A SOMATORIA. `)
}

}