import React from "react"
import ReactDOM from "react-dom/client"

class Review extends React.Component {

    //declare state 
    state = {
        like: 0,
        dislike: 0
    }
    //Listener 
    onLike = () => {
        this.setState((previousState, props) => {
            // return {
            //     like: previousState.like + 1,
            //     dislike: previousState.dislike
            // }
            // return Object.assign({}, previousState, { like: previousState.like + 1 })
            return { ...previousState, like: previousState.like + 1 }
        })
    }
    onDislike = () => {
        // this.setState((previousState, props) => {
        //     return { ...previousState, dislike: previousState.dislike + 1 }
        // })
        this.setState(previousState => ({ ...previousState, dislike: previousState.dislike + 1 }))
    }

    render() {
        console.log('render is called')
        return <div>
            <h1>Review Application</h1>
            <h2>Like {this.state.like} Dislike {this.state.dislike}</h2>
            <button onClick={this.onLike}>Like</button>
            <button onClick={this.onDislike}>Dislike</button>
        </div>
    }
}

const App = () => <>
    <Review />
</>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
