function add(x) {

    let sum = x;

    function create(y) {
        if (typeof y == 'undefined') {
            console.log(sum)
            return sum;

        }

        sum = sum + y;

        return create;
    }

    return create;

}

// // //////////// // // 
// // arnav bhaiya // // 
// // //////////// // //

// function add(n) {
//     function addMore(m) {
//         if (typeof m == 'undefined')
//             return n

//         n += m
//         return addMore;
//     }

//     return addMore;
// }

console.log(`sum`)

let z = add(1)(4)(3)(1)() // return 6

console.log(z)