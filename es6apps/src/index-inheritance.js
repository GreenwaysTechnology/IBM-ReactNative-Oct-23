class Account {
    constructor() {
        console.log('account constructor')
    }
    deposit() {
        return 100
    }
}
class SavingsAccount extends Account {
    constructor() {
        super()
        console.log('savings account')
    }
    deposit() {
        return 10000 * super.deposit()
    }
}
let sb = new SavingsAccount()
console.log(sb.deposit())