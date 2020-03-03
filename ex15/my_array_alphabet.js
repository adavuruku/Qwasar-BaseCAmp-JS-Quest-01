'use strict'
function my_array_alphabet(){
    let alpha = []
    for(let i = 97; i <= 122; i++)
        alpha.push(String.fromCharCode(i))
    return alpha
}
console.log(my_array_alphabet());
