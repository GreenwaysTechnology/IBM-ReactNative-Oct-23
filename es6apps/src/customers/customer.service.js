

export class CustomerService {
    constructor() {
        console.log('Customer service is initalized')
    }
    findAll() {
        return [{ id: 1, name: 'a' }]
    }
}