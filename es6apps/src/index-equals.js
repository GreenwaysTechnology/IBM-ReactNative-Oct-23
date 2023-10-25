let a = 10;
let b = 10;

if (a == b) {
    console.log('a and b are equal')
} else {
    console.log('a and b are not equal')
}
if (a === b) {
    console.log('a and b are equal')
} else {
    console.log('a and b are not equal')
}
let x = 10;
let y = "10";
// double equal always compares values only not types 
if (x == y) {
    console.log('x and y are equal')
} else {
    console.log('y and y are not equal')
}
// tripl equal always compares values and types
if (x === y) {
    console.log('x and y are equal')
} else {
    console.log('y and y are not equal')
}