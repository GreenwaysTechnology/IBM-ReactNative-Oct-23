import ReactDOM from "react-dom/client"
//Pure function Rule A:

function Profile(profile) {
    return profile
}

Profile({ id: 1, name: 'Subramaian' })


//child
const Greeter = props => {
    //cant change the prop :Props are read only 
   // props.message = 'Hai'
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
