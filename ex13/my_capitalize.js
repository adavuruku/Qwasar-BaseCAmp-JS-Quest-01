'use strict'
function my_capitalize(str){
    return str.replace(/\b\w/g, l => l.toUpperCase())
}
