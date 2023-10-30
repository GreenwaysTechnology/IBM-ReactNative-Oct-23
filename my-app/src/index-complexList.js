import React from "react"
import ReactDOM from "react-dom/client"
import { TODOS } from './mock-data/todos'

const TodoList = ({ todos }) => {
    return <>
        {
            todos.map(todo => {
                return <div key={todo.id}>
                    <TodoDetails todo={todo} />
                </div>
            })
        }
    </>
}
const TodoDetails = ({ todo }) => <>
    <h4>{todo.id}</h4>
    <h3>{todo.title}</h3>
    <h3>{todo.completed ? "completed" : "not completed"}</h3>
</>

const App = () => <>
    <TodoList todos={TODOS} />
</>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
