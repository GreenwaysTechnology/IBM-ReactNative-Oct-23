import React from "react"
import ReactDOM from "react-dom/client"

const Profile = props => {
    const { id, name, status, address } = props.profile
    return <div>
        <h1>Id {id}</h1>
        <h1> Name {name}</h1>
        <Status status={status} />
        <Address address={address} />
    </div>
}

const Status = ({ status }) => <>
    <p>Status {status ? "onLine" : "OffLine"}</p>
</>
const Address = ({ address: { city } }) => <>
    <p>City {city}</p>
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
