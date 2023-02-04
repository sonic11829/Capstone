import styles from "./PostForm.module.scss"
import { useParams } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'

export default function PostForm (props) {
    const [posts, setPosts] = useState(null)
    const [showPost, setShowPost] = useState(false)
    const [foundPost, setFoundPost] = useState(null)
    const inputRef = useRef(null)
    const [newPost, setNewPost] = useState({
        postTitle: ''
    })
    const {id} = useParams()
    // index
    const getPosts = async () => {
        try {
            console.log("getting posts")
            const response = await fetch('/api/posts/' + id)
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

    useEffect(()=> {
        getPosts()
    }, [])

    return (
        <>   
            {
            posts ? 
            <div className={styles.wrapper}>
                <h2>{posts.postTitle}</h2>
                <input
                    ref={inputRef}
                    style={{ display: showPost ? 'block' : 'none' }}
                    type='text'
                    name="postTitle"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                        const postTitle = inputRef.current.value
                        updatePost(posts._id, { postTitle })
                        setShowPost(false)
                        }
                    }}
                    defaultValue={posts.postTitle}
                />
                <div className={styles.buttons}>
                <button onClick={() => setShowPost(!showPost)}>Edit</button>
                <button onClick={() => deletePost(posts._id)}>Delete Post</button>
                </div>
            </div>
            : ""
            }
        </>
    )
}