import styles from "./NavBar.module.scss"
import { Link } from 'react-router-dom'

export default function NavBar(props) {
    return (
        <nav className={styles.nav}>
            <Link to="/"><h2>Home</h2></Link>
            &nbsp; &nbsp;
            <Link to="/posts/new"><h2>Create A Post</h2></Link>
        </nav>
    )
}