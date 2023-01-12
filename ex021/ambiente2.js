let valores = [1,6,3,8,5,6]
let qvalores = valores.length
console.log( `você tem ${qvalores} valores`)
let pos = valores.indexOf(8) 
if (pos == -1) {
    console.log(`esse numero não existe`)
} else {
    console.log(`seu número está na posição ${pos}`)
}