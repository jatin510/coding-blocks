let a = {
    p: 10,
    q: 20,
    r: 30
}

let b = Object.create(a)
b.k = 'jatin'
b.l = true

let c = Object.create(b)