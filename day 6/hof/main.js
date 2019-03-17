let x = 0;

console.log(typeof x)

function greet(name) {
    console.log('Hello ' + name)
}

y = greet

greet('Jatin')

console.log(typeof greet)

function takeGreeting(greeter) {
    greeter()
}

takeGreeting(y)