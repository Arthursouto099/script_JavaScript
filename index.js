import * as rl from 'readline-sync'


const obj = {name: rl.question("digite seu nome: "), email: rl.question("digite seu email: "), password: rl.question("Digite a senha para proseguir: ")}


if(obj.password === "157") {
    console.clear()
    console.log("ACESSO AUTORIZADO, você tem acesso a palavra secreta: ARTHUR O MELHOR PROGRAMADOR ")
}


else {
    console.clear()
    console.log("ACESSO NEGADO, VOCÊ E BOIOLA")
}