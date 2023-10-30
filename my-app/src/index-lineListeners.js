import React from "react"
import ReactDOM from "react-dom/client"

class Review extends React.Component {
    state = {
        like: 0,
        dislike: 0
    }
    render() {
        console.log('render is called')
        return <div>
            <h1>Review Application</h1>
            <h2>Like {this.state.like} Dislike {this.state.dislike}</h2>
            {/* inline listeners */}
            <button onClick={() => {
                this.setState(previousState => this.setState(previousState => ({ ...previousState, like: previousState.like + 1 })))
            }}>Like</button>
            <button onClick={() => {
                this.setState(previousState => ({ ...previousState, dislike: previousState.dislike + 1 }))
            }}>Dislike</button>
        </div>
    }
}

const App = () => <>
    <Review />
</>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
