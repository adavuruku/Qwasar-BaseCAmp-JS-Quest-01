'use strict'
function my_array_unique(integer_array){
    let k=[]
    integer_array.forEach(element => {
        if (k.indexOf(element) < 0 ) k.push(element)
    })
    return k
}