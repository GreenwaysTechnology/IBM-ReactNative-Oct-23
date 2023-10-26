import ReactDOM from "react-dom/client"

//Blog Header:
const BlogHeader = () => <h1>My First Component</h1>

const BlogListItems = () => <>
    <li>Components are building blocks</li>
    <li>Components helps to reuse</li>
    <li>Components helps to scale ui</li>
</>

const BlogList = () => <ol>
    <BlogListItems />
</ol>

const Blog = () => {
    return <article>
        <BlogHeader />
        <BlogList />
    </article>
}

const App = () => <>
    <Blog />
    <Blog />
    <Blog />
    <Blog />
</>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

