
//es 5 style of writing anonymous function 
let hello = function () {
    console.log('hello')
}
hello()
//es 6 style of writing anonymous function: arrow function 
hello = () => {
    console.log('hello')
}
hello()
//In arrow if function has only one line of code : we can remove {} and arrow 
hello = () => console.log('hello')
hello()
//args and parameters

let add = function (a = 0, b = 0) {
    return a + b
}
console.log(add(10, 10))

add = (a = 0, b = 0) => {
    return a + b
}
console.log(add(10, 10))

//if function only return statement , we can remove {} and return statement
add = (a = 0, b = 0) => a + b
console.log(add(10, 10))

//
let getValue = function (value) {
    return value
}
console.log(getValue(10))

getValue = (value) => {
    return value
}
console.log(getValue(10))

getValue = (value) => value
console.log(getValue(10))

//if arg is single and no default value, we can remove ()
getValue = value => value
console.log(getValue(10))
