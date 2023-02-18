import styles from './HomePageForm.module.scss'
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function HomePageForm (props) {
    const [posts, setPosts] = useState([])
    const [foundPost, setFoundPost] = useState(null)
    const [newPost, setNewPost] = useState({
        postTitle: ''
    })
    // index
    const getPosts = async () => {
        try {
            const response = await fetch('/api/posts')
            const data = await response.json()
            setPosts(data)
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = (evt) => {
        setNewPost({...newPost, [evt.target.name]: evt.target.value})
    }

    useEffect(()=> {
        getPosts()
    }, [foundPost])

    return (
        <div className={styles.wrapper}>
            {
                posts && posts.length ? (<ul>
                    {
                        posts.map((post) => {
                            return (
                                <li>
                                    <Link to={`/posts/${post._id}`}><h1>{post.postTitle}</h1></Link>
                                </li>
                            )
                        })
                    }
                </ul>): <h1>No Posts have been created yet, Be the First!</h1>
            }
        </div>
    )
}