'use strict';
let sam = [];
if (process.argv.length > 2) {
    for(let i=2; i<process.argv.length; i++)
        sam.push(process.argv[i])
}
console.log(sam);
