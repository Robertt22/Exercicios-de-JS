let frutas = ["maçã", "banana", "pera", "pitaia", "melancia", "melão"];
let DC = document.getElementById('resultado');
for(let i = 0; i < frutas.length; i++){
    DC.innerHTML+=`
   <p> frutas são  ${i}- ${frutas[i]} </p>`

}