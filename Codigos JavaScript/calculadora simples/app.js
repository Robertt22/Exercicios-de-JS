let num_1 = parseFloat(prompt("Digite o primeiro número."))
let num_2 = parseFloat(prompt("Digite o segundo número."))
let operador = (prompt("Digite o operador desejado."))
switch(operador){
    case "+":
        console.log(num_1 + " + " + num_2 + " = " + num_1 + num_2);
           break;
           case "-":
            console.log(num_1 + " - " + num_2 + " = " + num_1 - num_2);
            break;
            case "*":
            console.log(num_1 + " X " + num_2 + " = " + num_1 * num_2);
            break;
            case "/":
            console.log(num_1 + " ÷ " + num_2 + " = " + num_1 / num_2);
            break;
        default:
    console.log("Operador ou número Invalido!!")
}