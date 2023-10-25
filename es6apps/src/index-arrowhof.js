// function fetch(resolve) {
//     resolve('response')
// }
// let response = function (res) {
//     console.log(res)
// }
// fetch(response)
// fetch(function (res) {
//     console.log(res)
// })

const fetch = resolve => resolve('response')

let response = res => console.log(res)

fetch(response)

fetch(res => console.log(res))