import ReactDOM from "react-dom/client"

//simple data binding 
const Greeter = () => {
    let message = 'Hello'
    return <h1>{message}</h1>
}


const App = () => <>
    <Greeter />
</>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
