function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = "agora são " + hora + " horas"
    if (hora > 0 && hora < 12) {
        img.src = "imagens/foto-manhã.jpg"
    } else if (hora >= 12 && hora < 18) {
        img.src = "imagens/foto-tarde.jpg"
    } else if (hora >= 18 && hora < 25) {
        img.src = "imagens/foto-noite.jpg"
    }
}