function contar() {
    var ini = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var res = document.getElementById("res")
    var c = 1

    if (ini.value.length == 0) {
        window.alert("preencha corretamente os dados")
    } else {
        var ini = Number(ini.value)
        var fim = Number(fim.value)
        var passo = Number(passo.value)

        for (ini ; fim < ini ; passo++) {
            res.innerHTML = passo

        } 
        
    }
}
  