import  ReactDOM  from "react-dom/client"

//component using variable pattern

const Heading = <h1>Hello React</h1>

const root =  ReactDOM.createRoot(document.getElementById('root'))
root.render(Heading)