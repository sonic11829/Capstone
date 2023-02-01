import { Link } from 'react-router-dom'

export default function NavBar(props) {
    return (
        <nav>
            <Link to="/">Home</Link>
            &nbsp; | &nbsp;
            <Link to="/posts/new">Create A Post</Link>
        </nav>
    )
}