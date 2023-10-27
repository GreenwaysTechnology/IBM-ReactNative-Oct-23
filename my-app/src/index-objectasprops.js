import React from "react"
import ReactDOM from "react-dom/client"

const Profile = props => {
    return <div>
        <h1>Id {props.profile.id}</h1>
        <h1> Name {props.profile.name}</h1>
        <Status status={props.profile.status} />
        <Address address={props.profile.address} />
    </div>

}

const Status = props => <>
    <p>Status {props.status ? "onLine" : "OffLine"}</p>
</>
const Address = props => <>
    <p>City {props.address.city}</p>
</>

//default Props 
Profile.defaultProps = {
    profile: {
        id: 0,
        name: 'name',
        status: false,
        address: {
            city: 'city'
        }
    }
}
const profile = {
    id: 1,
    name: 'Subramanian',
    status: false,
    address: {
        city: 'Coimbatore'
    }
}
const App = () => <>
    <Profile profile={profile} />
</>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
