function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("anonas")
    var res = document.getElementById("res")
    if (fano.value.length == 0  || fano.value > ano ) {
        window.alert("verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName("sexo")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id" , "foto")
        if (fsex[0].checked) {
            genero = " homem "
            if (idade < 10) {
                // criança
                img.setAttribute("src" , "foto-criança-m.jpg")
            } else if (idade < 21) {
                // jovem
                img.setAttribute("src" , "foto-jovem-m.jpg")
            } else if (idade < 50) {
                // adulto
                img.setAttribute("src" , "foto-bebe-m.jpg")
            } else if (idade > 50) {
                // idoso
                img.setAttribute("src" , "foto-idoso-m.jpg")
            }
        } else if (fsex[1].checked) {
            genero =" mulher "
            if (idade < 10) {
                // criança
            } else if (idade < 21) {
                // jovem
            } else if (idade < 50) {
                // adulto
            } else if (idade > 50) {
                // idoso
            }
        }
        res.innerHTML = " você é " + genero + " de " + idade + " anos de idade"
        res.appendChild(img)
    }

}