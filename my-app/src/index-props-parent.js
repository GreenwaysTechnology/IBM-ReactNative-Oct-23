import ReactDOM from "react-dom/client"

const Profile = props => <div>
    <h1>Id {props.id}</h1>
    <p>Name {props.name}</p>
    <Status status={props.status} />
    <Address address={props.address} />
</div>

const Status = props => <>
    <p>Status {props.status ? "onLine" : "OffLine"}</p>
</>
const Address = props => <>
    <p>City {props.address.city}</p>
</>


//parent 
const App = () => <>
    <Profile id={1} name="Subramanian" status={true} address={{ city: 'Coimbatore' }} />
    <Profile id={2} name="Murugan" status={false} address={{ city: 'Chennai' }} />
    <Profile id={3} name="Ram" status={true} address={{ city: 'Banaglore' }} />
</>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
