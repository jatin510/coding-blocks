function createGreeting(salutaion) {
    function greet(name) {
        console.log(`hello ${salutaion} ${name}`)
    }

    return greet
}


let x = createGreeting('GOOD mORNING')
x('Nancy')


createGreeting('OOOO')('JANE')