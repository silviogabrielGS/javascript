function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = "agora são " + hora + " horas"
    if (hora > 0 && hora < 12) {
        img.src = "imagens/foto-manhã.jpg"
        document.body.style.background = "#ca9e23"
    } else if (hora >= 12 && hora < 18) {
        img.src = "imagens/foto-tarde.jpg"
        document.body.style.background = "#b46316"
    } else if (hora >= 18 && hora < 25) {
        img.src = "imagens/foto-noite.jpg"
        document.body.style.background = "rgb(52, 53, 66)"
    }
}