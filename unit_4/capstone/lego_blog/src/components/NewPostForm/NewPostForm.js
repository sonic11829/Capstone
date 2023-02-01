import { useState, useEffect } from 'react'

export default function NewPostForm (props) {
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

    return (
        <>
            <h2>Create A Post!</h2>
            {'Title '}<input value={newPost.postTitle} onChange={handleChange} name="postTitle"></input><br/>
                <button onClick={() => createPost() }>Create Post</button>
        </>
    )
}