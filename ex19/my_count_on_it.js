'use strict'
function my_count_on_it(string_aray){
    let sad = string_aray.reduce((j,t)=>{
        j.push(t.length)
        return j
    },[])
    return sad
}
