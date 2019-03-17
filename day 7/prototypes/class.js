class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    isAdult() {
        return this.age >= 18
    }
}

let p = new Person('Jatin', 20)

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age)
        this.grade = grade
    }

    get section() {
        return 1
    }
}

let s = new Student('Shanhok', 20, 5)