function contar() {
    let ini = document.getElementById("inicio")
    let fim = document.getElementById("fim")
    let passo = document.getElementById("passo")
    let res = document.getElementById("res")
    
    if (ini.value.length == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        res.innerHTML = "impossível contar, preencha todos os dados corretamente"
        // window.alert("preencha corretamente os dados")
    } else {
         res.innerHTML = "contando..."
         let i = Number(ini.value)
         let f = Number (fim.value)
         let p = Number (passo.value)
        if  (p <= 0) {
            window.alert (" passo inválido! considerando passo 1")
            p = 1
        } 
        if (i < f) {
             for (let c = i ; c <= f ; c += p) {
                res.innerHTML += `${c}  `
            } 
        } else {
            for(let c = i ; c >= f ; c -= p) {
                res.innerHTML += `${c}  `
            }
        }


        
    }
    }