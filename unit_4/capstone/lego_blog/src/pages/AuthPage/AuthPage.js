import styles from './AuthPage.module.scss'
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"

export default function AuthPage(props){
    return(
        <main className={styles.main}>
            <h1>Auth Page</h1>
            <SignUpForm setUser={props.setUser} />
            <LoginForm setUser={props.setUser} />
        </main>
    )
}