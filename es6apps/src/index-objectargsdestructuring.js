function getStock_() {
    return {
        id: 1,
        symbol: 'google',
        qty: 100,
        price: 25000
    }
}
console.log(getStock_())

// function getStock(id,symbol,qty,price) {
//     return {
//         id: id,
//         symbol: symbol,
//         qty: qty,
//         price: price
//     }
// }
// console.log(getStock(1,'facebook',100,2344))

// function getStock(id,symbol,qty,price) {
//     return {
//         //if key:value is same id:id , we can remove any one 
//         id,
//         symbol,
//         qty,
//         price
//     }
// }
// console.log(getStock(1,'facebook',100,2344))

//arrows
// const getStock = (id = 0, symbol = 'google', qty = 0, price = 0) => {
//     return {
//         //if key:value is same id:id , we can remove any one 
//         id,
//         symbol,
//         qty,
//         price
//     }
// }
// console.log(getStock(1, 'facebook', 100, 2344))

const getStock = (id = 0, symbol = 'google', qty = 0, price = 0) => ({
    id,
    symbol,
    qty,
    price
})

console.log(getStock(1, 'facebook', 100, 2344))