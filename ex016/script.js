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
            if (idade < 3) {
                // bebe
                img.setAttribute("src" , "foto-bebe-m.jpg")
            } else if (idade < 10) {
                // criança
                img.setAttribute("src" , "foto-criança-m.jpg")
            } else if (idade < 21) {
                // jovem
                img.setAttribute("src" , "foto-jovem-m.jpg")
            } else if (idade < 50) {
                // adulto
                img.setAttribute("src" , "foto-adulto-m.jpg")
            } else if (idade > 50) {
                // idoso
                img.setAttribute("src" , "foto-idoso-m.jpg")
            }
        } else if (fsex[1].checked) {
            genero =" mulher "
              if (idade < 3) {
                // bebe
                img.setAttribute("src" , "foto-bebe-f.jpg")
            } else if (idade < 10) {
                // criança
                img.setAttribute("src" , "foto-criança-f.jpg")
            } else if (idade < 21) {
                // jovem
                img.setAttribute("src" , "foto-jovem-f.png")
            } else if (idade < 50) {
                // adulto
                img.setAttribute("src" , "foto-adulto-f.jpg")
            } else if (idade > 50) {
                // idoso
                img.setAttribute("src" , "foto-idoso-f.jpg")
            }
        }

        res.style.textAlign = "center"
        res.innerHTML = " você é " + genero + " de " + idade + " anos de idade"
        res.appendChild(img)
    }

}