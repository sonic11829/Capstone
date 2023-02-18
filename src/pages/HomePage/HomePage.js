import styles from './HomePage.module.scss'
import HomePageForm from "../../components/HomePageForm/HomePageForm"

export default function HomePage(props) {
    return(
        <main className={styles.main}>
            <HomePageForm />
        </main>
    )
}