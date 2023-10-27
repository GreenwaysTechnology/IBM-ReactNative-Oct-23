import ReactDOM from "react-dom/client"
import { Blog } from "./blog/Blog"


const App = () => <>
    <Blog />
</>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
