var idade = 17
    console.log("voce tem " + idade + " anos" )
if (idade < 16) {
    console.log("você não vota")
} else if (idade < 18 || idade > 65 ) {
    console.log("voto opcional")
} else if (idade > 18 ) {
    console.log("voto obrigatório")
}