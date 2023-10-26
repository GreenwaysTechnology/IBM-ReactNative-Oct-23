import ReactDOM from "react-dom/client"
import React from "react"

class Heading extends React.Component {
    render() {
        return <h1>Hello!</h1>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Heading></Heading>)