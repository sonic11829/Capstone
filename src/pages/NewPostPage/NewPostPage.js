import styles from './NewPostPage.module.scss'
import NewPostForm from "../../components/NewPostForm/NewPostForm"

export default function NewPostPage(props) {
    return(
        <main className={styles.main}>
            <NewPostForm />
        </main>
    )
}