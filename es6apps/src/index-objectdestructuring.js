
//without object desstructuring:
function printStudent_(student) {
    console.log(`ID ${student.id}`)
    console.log(`Name ${student.name}`)
    console.log(`City ${student.address.city}`)
}
function printStudent__(student) {
    //destructuring 
    const { id, name, address } = student
    console.log(`ID ${id}`)
    console.log(`Name ${name}`)
    console.log(`City ${address.city}`)
}
function printStudent___(student) {
    //destructuring 
    const { id, name, address: { city } } = student
    console.log(`ID ${id}`)
    console.log(`Name ${name}`)
    console.log(`City ${city}`)
}
// function printStudent({ id, name, address: { city } }) {
//     console.log(`ID ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`City ${city}`)
// }

const printStudent = ({ id, name, address: { city } }) => {
    console.log(`ID ${id}`)
    console.log(`Name ${name}`)
    console.log(`City ${city}`)
}
printStudent({ id: 1, name: 'Subramaian', address: { city: 'Coimbatore' } })