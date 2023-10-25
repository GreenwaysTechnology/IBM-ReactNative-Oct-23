import { CustomerService } from "./customers/customer.service.js";
import generateRandom from "./util/randomutil.js";

let customers = new CustomerService();
console.log(customers.findAll())
console.log(generateRandom())
console.log(generateRandom())