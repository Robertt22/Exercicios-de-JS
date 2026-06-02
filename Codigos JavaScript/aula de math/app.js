let resultado = document.getElementById('resultado');
let  valor = 5;

let v1 = Math.pow(valor, 2);
resultado.innerHTML += `
O número digitado ao quadrado é ${v1} 
`  
let PI = Math.PI;
resultado. innerHTML += `
O Pi é ${PI} 
`
let valor_1 = 16;
let v2 = Math.sqrt(valor_1);
resultado.innerHTML += `a raiz quadrada é ${v2}`
    
let randon =Math.random()
resultado.innerHTML += Math.floor(randon*1000)

let valor_3 = Math.abs(-1234);
alert(valor_3 + (-122) + 1)

let R = parseFloat(prompt("digite o Raio do círculo"))
let area_circulo = PI * Math.pow(R, 2)
resultado.innerHTML +=`
A aréa do círculo é de ${area_circulo}`

let perimetro_circulo = 2*R*PI
resultado.innerHTML += `
O perímetro do círculo é de ${perimetro_circulo}
`
let diametro = 2*R;
resultado.innerHTML+= `
O diâmetro desse circulo é de ${diametro}`

