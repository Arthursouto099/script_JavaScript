import * as rl from 'readline-sync'
import other from './other_programan.js' 

const obj = {name: rl.question("digite seu nome: "), email: rl.question("digite seu email: "), password: rl.question("Digite a senha para proseguir: ")}


if(obj.password === "157") {
    console.clear()
    console.log("ACESSO AUTORIZADO, você tem acesso a palavra secreta: ARTHUR O MELHOR PROGRAMADOR ")
    other(obj)
}


else {
    console.clear()
    console.log("ACESSO NEGADO, VOCÊ E BOIOLA")
}