function createCounter(init, delta) {

    function count() {
        init += delta
        return init

    }

    return count
}

var c1 = createCounter(3, 4)

console.log(c1())
console.log(c1())
console.log(c1())
console.log(c1())