function analisador() {
    var num = document.getElementById("number")
    var select = document.getElementById("listanumber")
    var n = Number(num.value) 
    
    if (n > 100 || n == 0) {
        window.alert("número inválido ou já foi adicionado" )
    } 
    else {
        var numeros = [n]
        var item = document.createElement("option")
        item.text = `o número ${n} foi adicionado `
        select.appendChild(item)
        if (n = n) { 
            window.alert("número inválido ou já foi adicionado")
        }
    }
    
    
}



