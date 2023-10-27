import React from "react"
import ReactDOM from "react-dom/client"

class Profile extends React.Component {
    render() {
        return <div>
            <h1>Id {this.props.id}</h1>
            <h1> Name {this.props.name}</h1>
            <Status status={this.props.status} />
            <Address address={this.props.address} />
        </div>
    }
}

const Status = props => <>
    <p>Status {props.status ? "onLine" : "OffLine"}</p>
</>
const Address = props => <>
    <p>City {props.address.city}</p>
</>

//default Props 
Profile.defaultProps = {
    id: 0,
    name: 'name',
    status: false,
    address: {
        city: 'city'
    }
}




//parent 
const App = () => <>
    <Profile />
    <Profile id={1} name="Subramanian" status={true} address={{ city: 'Coimbatore' }} />
    <Profile id={2} name="Murugan" address={{ city: 'Chennai' }} />

</>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
