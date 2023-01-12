function montar() {
    var ini = document.getElementById("inicio")
    var tab = document.getElementById("seltab")
    
    if (ini.value.length == 0) {
        window.alert("preencha corretamente os dados")
    } else {
        var n = Number(ini.value)
        var c = 1
        tab.innerHTML = ""
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }

                
    
    }
    }