import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage'
import PostPage from '../PostPage/PostPage'
import NewPostPage from '../NewPostPage/NewPostPage'
import { Routes, Route, useParams} from 'react-router-dom'

function App() {
  const [state, setState] = useState(null)
  const [user, setUser ] = useState(null)

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
  
  const {id} = useParams()

  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/post/:id' key={id} element={<PostPage />} />
            <Route path='/posts/new' element={<NewPostPage />} />
          </Routes>
        </>
         :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;