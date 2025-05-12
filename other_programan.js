import * as rl from 'readline-sync'


export default function other ({name, email}) {
    console.clear()
    console.log('----------------------------------------')
    if(rl.question(`Certo ${name}, vulgo com o email de: ${email}. Qual a comida preferida do Arthur?: `) === "panqueca") {
        console.log("--------------------")
        console.log("EU te amo")
    }

    else {
        console.log("_-----------------------------")
        console.log("EU TE ODEIO")
    }
    

}