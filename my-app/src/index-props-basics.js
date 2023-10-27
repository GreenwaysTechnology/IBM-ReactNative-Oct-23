import ReactDOM from "react-dom/client"

//child
const Greeter = props => {
    console.log(props)
    return <h1>{props.message} {props.name}</h1>
}

//parent 
const App = () => <>
    {/* {Greeter('Hello')} */}
    {/* data is encapsulated into object and passed */}
    <Greeter message="Hello" name="Subramanian" />
</>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
