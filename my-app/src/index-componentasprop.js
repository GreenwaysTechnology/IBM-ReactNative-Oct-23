import React from "react"
import ReactDOM from "react-dom/client"

const Header = props => {
    return <>
        <h1>{props.title}</h1>
        {props.children}
    </>
}

const MenuBar = props => {
    return <ul>
        {props.menus.map(menu => {
            return <li>{menu}</li>
        })}
    </ul>
}

const App = () => <>
    <Header title="IBM">
        {/* Passing menubar as prop */}
        <MenuBar menus={["Menu1", "Menu2", "Menu3", "Menu 4"]} />
    </Header>
</>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
