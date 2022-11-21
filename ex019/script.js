function contar() {
    var ini = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var res = document.getElementById("res")
    var c

    if (ini.value.length == 0) {
        window.alert("preencha corretamente os dados")
    } else {
         res.innerHTML = ("contando...")
         var i = Number(ini.value)
         var f = Number (fim.value)
         var p = Number (passo.value)
         
         for (var c = i ; i <= f ; c += p) {
            res.innerHTML += "." + c 
            
         }
        
    }
    }