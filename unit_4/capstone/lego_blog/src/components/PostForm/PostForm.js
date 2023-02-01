import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function PostForm (props) {
    const [user, setUser ] = useState(null)
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
    // delete
    const deletePost = async (id) => {
        try {
            const response = await fetch(`/api/posts/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            setFoundPost(data)
        } catch (error) {
            console.error(error)
        }
    }
    // update
    const updatePost = async (id, updatedData) => {
        try {
            const response = await fetch(`/api/posts/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...updatedData})
            })
            const data = await response.json()
            setFoundPost(data)
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
                
                    
                        posts.map((post) => {
                            return (
                                <>
                                <h2>{post.postTitle}</h2>
                                <br/><button onClick={() => deletePost(post._id)}>Delete Post</button>
                                </>
                            )
                        })
                    
                
            }
            

        </>
    )
}

// <key={id}>{post.postTitle}</>