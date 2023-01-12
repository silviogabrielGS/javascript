let num = [5,8,3,6,7]


for (let pos = 0; pos < num.length; pos++) {
    console.log(`o valor ${num[pos]} está na posição ${pos} `)
}

for(let pos in num){
    console.log(num[pos])
}
