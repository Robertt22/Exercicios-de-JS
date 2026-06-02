let num = [];
for(let x = 1; x < 5; x++){
        let value = parseFloat(prompt(`digite o ${x}º número desejado`))
        num.push(value)
}

for(i of num){
    console.log(`${i}² = ${i**2}`)
}