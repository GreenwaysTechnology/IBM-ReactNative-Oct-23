import ReactDOM from "react-dom/client"


// function Heading() {
//     return <h1>Hello React!!</h1>
// }
// const Heading = () => {
//     return <h1>Hello React!!</h1>
// }
const Heading = () => <h1>Hello React!!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'))
//imperative style
//root.render(Heading())
//declarative style
root.render(<Heading></Heading>)