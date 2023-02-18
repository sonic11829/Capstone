import styles from './PostPage.module.scss'
import PostForm from "../../components/PostForm/PostForm"

export default function PostPage(props) {
    return(
        <main className={styles.main}>
            <PostForm />
        </main>
    )
}