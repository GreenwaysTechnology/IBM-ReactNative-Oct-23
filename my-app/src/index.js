import { useEffect, useState } from "react"
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
    console.log(props)
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
const Posts = props => {
    let initalState = {
        isLoaded: false,
        items: [],
        error: null
    }
    const [posts, setPosts] = useState(initalState)

    async function fetchPosts() {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const values = await (await fetch(url)).json()
            setPosts({ ...posts, isLoaded: true, items: posts.items.concat(values) })
        }
        catch (err) {
            setPosts({ ...posts, isLoaded: true, error: err })

        }
    }

    //useEffect : ComponentDidMount 
    useEffect(() => {
        fetchPosts()
        console.log(posts)

    }, [])

    console.log(posts)
    const { error, isLoaded, items } = posts
    if (error) {
        return <Error error={error} />
    } else if (!isLoaded) {
        return <Spinner />
    } else {
        return <PostList posts={items} />
    }
}

const App = () => <>
    <Posts />
</>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)