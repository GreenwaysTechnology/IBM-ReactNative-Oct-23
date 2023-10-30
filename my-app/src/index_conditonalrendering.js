import React from "react"
import ReactDOM from "react-dom/client"


const Error = props => {
    return <>
        <h2>{props.error}</h2>
    </>
}
const Spinner = props => {
    return <>
        <h2>Loading....</h2>
    </>
}
const PostList = props => {
    return <div>
        {
            props.posts.map(post => {
                return <div key={post.id}>
                    <h2>{post.id}</h2>
                    <h6>{post.title}</h6>
                    <p>{post.body}</p>
                </div>
            })
        }
    </div>
}

class Posts extends React.Component {

    state = {
        isLoaded: false,//spinner status
        posts: [],
        error: null
    }

    async componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        try {
            const posts = await (await fetch(url)).json()
            this.setState(previousState => {
                return { ...previousState, posts: previousState.posts.concat(posts), isLoaded: true }
            })
        }
        catch (err) {
            console.log(err)
            this.setState(previousState => {
                return {
                    ...previousState, isLoaded: true, error: err
                }
            })
        }
    }
    render() {
        //conditonal rendering 
        const { error, isLoaded, posts } = this.state
        if (error) {
            return <Error error={error} />
        } else if (!isLoaded) {
            return <Spinner />
        } else {
           return  <PostList posts={posts} />
        }
    }
}


const App = () => <>
    <Posts />
</>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
