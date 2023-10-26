import ReactDOM from "react-dom/client"


// const heading = () => <>
//     <h1>IBM</h1>
//     <p>This is react</p>
// </>
const Heading = () => <>
    <h1>IBM</h1>
    <p>This is react</p>
</>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Heading/>)

