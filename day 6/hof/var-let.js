//var scope is inside function

// let scope is inside block


let x = 10;



function aplha() {
    let x = 10;
    console.log(x)

    if (true)
        x = 20;

    console.log(x);

}

aplha()