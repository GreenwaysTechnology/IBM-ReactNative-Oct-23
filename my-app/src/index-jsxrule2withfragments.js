import ReactDOM from "react-dom/client"
import React, { Fragment } from "react"
// const Heading = () => <h1>IBM</h1>
//                 <p>This is react</p>


// const Heading = () => <div>
//      <h1>IBM</h1>
//     <p>This is react</p>
// </div>

//Using framgements
// const Heading = () => <React.Fragment>
//     <h1>IBM</h1>
//     <p>This is react</p>
// </React.Fragment>

// const Heading = () => <Fragment>
//     <h1>IBM</h1>
//     <p>This is react</p>
// </Fragment>
const Heading = () => <>
    <h1>IBM</h1>
    <p>This is react</p>
</>

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Heading></Heading>)
root.render(<Heading/>)

