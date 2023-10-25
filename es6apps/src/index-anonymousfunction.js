//function as literal
let a = 10
//let is keyword ; a is variable; 10 value(literal)

//hello is just variable, function(){} is value (literal)
//Anonymous function 
let hello = function () {
    console.log('hello')
}
hello()

///Anonymous functions with args and return 
let add = function (a = 0, b = 0) {
    return a + b
}
console.log(add(10,10))