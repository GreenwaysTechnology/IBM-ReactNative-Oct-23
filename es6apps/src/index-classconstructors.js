class Emplyoee {
    //instance variables
    id 
    name
    salary
    constructor(id = 0, name = 'Subramanian', salary = 100) {
        this.id = id 
        this.name =name 
        this.salary = salary
    }
}
//emp is just reference variable
//new is keyword
//Employee() consturctor call
let emp = new Emplyoee(2,'Subramanian Murugan',10000)
console.log(emp.id, emp.name, emp.salary)