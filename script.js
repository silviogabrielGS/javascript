 let fruits = [ "banana" , "maçâ" , "uva" , "laranja"]

 let bigFruits = fruits.filter((item) => {
    return item.length > 4
 })

 console.log(bigFruits)