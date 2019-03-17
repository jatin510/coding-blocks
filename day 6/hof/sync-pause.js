let btnwait = document.getElementById('btnwait');
let btnclick = document.getElementById('btnclick');
let result = document.getElementById('result');


btnwait.onclick = function () {
    let start = new Date().getTime();
    console.log('hello')

    setTimeout(function () {
        result.innerText = "Wait Over"
    }, 5000)

}


let count = 0;
btnclick.onclick = function () {
    console.log(++count);
}