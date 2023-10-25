class TodoService {
    constructor() {

    }
    //methods
    findAll() {
        return [{ id: 1, status: false, title: 'learn react' }]
    }
}
let todoService = new TodoService()
todoService.findAll().forEach(todo=>console.log(todo))