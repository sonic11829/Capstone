import styles from './App.module.scss'
import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage'
import PostPage from '../PostPage/PostPage'
import NewPostPage from '../NewPostPage/NewPostPage'
import { Routes, Route, useParams} from 'react-router-dom'
import {getUser} from '../../utilities/users-service'

function App() {
  const [state, setState] = useState(null)
  const [user, setUser ] = useState(getUser)

  const fetchState = async () => {
    try {
      const response = await fetch('/api/test')
      const data = await response.json()
      setState(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchState()
  }, [])

  return (
    <main className={styles.app}>
      {
        user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path='/posts/new' element={<NewPostPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </>
         :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;