import React from "react"
import ReactDOM from "react-dom/client"

const ProfileMaster = props => {
    // const { id, name, status, address } = props.profile
    return <div>
        {/* <ProfileDetails id={id} name={name} status={status} address={address} /> */}
        <ProfileDetails {...props.profile} />
    </div>
}

const ProfileDetails = ({ id, name, status, address: { city } }) => {
    return <>
        <h1>Id {id}</h1>
        <h4>Name {name}</h4>
        <h3>Status {status ? "Online" : "OffLine"}</h3>
        <h4>City {city}</h4>
    </>
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
    <ProfileMaster profile={profile} />
</>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
