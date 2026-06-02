alert("Bem vindo");
let login = prompt("Olá, digite o seu login");
let senha = prompt("Olá, digite o sua senha");
let login_correto = "Admin";
let senha_correta = 1234;

if (login == login_correto && senha == senha_correta){

alert("Login e senha corretos, bem vindo.")
document.getElementById('resultado').innerHTML= "PARA-BENS"
}
else if(login === login_correto && senha === senha_correta) {
alert("Login ou senha incorretos, tente novamente")
document.getElementById('resultado').innerHTML= "FALTOU POUCO, PEBA"
}
else{
    alert("Login e senha incorretos, tente novamente")
    document.getElementById('resultado').innerHTML= "ERROU SEU PEBA"
}