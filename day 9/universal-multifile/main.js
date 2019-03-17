let lib;
if (typeof window === 'undefined') {
    lib = require('./lib')
    // console.log(lib.add(4, 5))
} else {
    lib = window
    // console.log(add(5, 6))
}

console.log(lib.add(4, 5))