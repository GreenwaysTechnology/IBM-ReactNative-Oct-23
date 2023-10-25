function sayGreet(message) {
    console.log(message)
}
sayGreet('hello')

let add = function (a = 0, b = 0) {
    return a + b
}
//hardcoded value
let result = add(10, 10)
console.log(result)
let x = 10
let y = 10
//variables
result = add(x, y)
console.log(result)
/////////////hof - function as parameter 

function fetch(resolve) {
    resolve('response')
}
let response = function (res) {
    console.log(res)
}
fetch(response)
fetch(function (res) {
    console.log(res)
})