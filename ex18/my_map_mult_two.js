'use strict'
function my_map_mult_two(array){
    let sad = array.reduce((j,t)=>{
        j.push(t*2)
        return j
    },[])
    return sad
}
