import { useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'

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
    // create
    const createPost = async () => {
        try {
            const response = await fetch(`/api/posts`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...newPost})
            })
            const data = await response.json()
            setFoundPost(data)
            setNewPost({
                postTitle: ''
            })
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

    const {id} = useParams()

    return (
        <>
            {
                posts && posts.length ? (<ul>
                    {
                        posts.map((post) => {
                            return (
                                <li key={id}>
                                    <Link to="/post/:id" key={id}>{post.postTitle}</Link>
                                </li>
                            )
                        })
                    }
                </ul>): <h1>No Posts have been created yet, Be the First!</h1>
            }
        </>
    )
}