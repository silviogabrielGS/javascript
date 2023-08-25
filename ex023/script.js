var numeros = [n]
var num = document.getElementById("number")
var select = document.getElementById("listanumber")
var n = Number(num.value) 

function analisador() {
    
    
    if (n > 100 || n == 0) {
        window.alert("número inválido ou já foi adicionado" )
    } 
    else {
        
        var item = document.createElement("option")
        item.text = `o número ${n} foi adicionado `
        select.appendChild(item)

    }
}

function finalizar() {
    if (numeros.length == 0) {
        window.alert("atribua valores antes de continuar")
    }
}



