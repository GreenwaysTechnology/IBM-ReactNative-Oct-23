import { useState } from "react"
import ReactDOM from "react-dom/client"

const Review = props => {

    const [like, setLike] = useState(0)
    const [dislike, setDisLike] = useState(0)

    //listener 
    const onLike = () => {
        // setLike(like => {
        //     return like + 1
        // })
        setLike(like + 1)
    }
    return <div>
        <h1>Review Application</h1>
        <h1>Like {like} Dislike {dislike}</h1>
        <button onClick={onLike}>Like</button>
        <button onClick={() => {
            setDisLike(dislike + 1)
        }}>Dislike</button>

    </div>
}

const App = () => <>
    <Review />
</>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)