let obj = {
    a: 10,
    b: function () {
        console.log(this.a)
    }
}
console.log(obj.b())