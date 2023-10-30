import React from "react"
import ReactDOM from "react-dom/client"

class Review extends React.Component {
    state = {
        like: 0,
        dislike: 0
    }
    //biz 
    onLike = () => {
        this.setState(previousState => this.setState(previousState => ({ ...previousState, like: previousState.like + 1 })))
    }
    onDislike = () => {
        this.setState(previousState => this.setState(previousState => ({ ...previousState, dislike: previousState.dislike + 1 })))
    }
    render() {
        return <>
            {/* state as prop and function as prop: dynamic props */}
            <ReviewDisplay {...this.state} onLike={this.onLike} onDislike={this.onDislike} />
        </>
    }
}

const ReviewDisplay = props => {
    return <div>
        <h1>Review Application</h1>
        <h1>Like {props.like} Dislike {props.dislike}</h1>
        <button onClick={props.onLike}>Like</button>
        <button onClick={props.onDislike}>Dislike</button>

    </div>
}

const App = () => <>
    <Review />
</>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
