import './App.css';
import MainFeed from './MainFeed';
// import Messaging from './Messaging';
import Profile from './Profile';
import CreatePost from './CreatePost';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import PostContainer from './PostContainer';



function App() {
  const [user, setUser] = useState(false)
  const [following, setFollowing] = useState([])
  const navigate = useNavigate()

  function getCurrentUser(user1) {
    setUser(user1)
    setFollowing([])

    fetch(`http://localhost:3000/users/${user1.id}`)
      .then(data => data.json())
      .then(user => user.following.forEach((followingId) => {
        fetch(`http://localhost:3000/users/${followingId}`)
          .then(data => data.json())
          .then(user => setFollowing((following) => [...following, user]))
      }))
  }

  useEffect(() => {
    if(user) {
      navigate("/mainfeed")
    }
  }, [user])

  // console.log(following)

  return (
    <div className="App">
      {(user ? <NavBar /> : null)}
      <Routes>
        <Route exact path="/" element={ <Login getCurrentUser={getCurrentUser} /> } />
        
        <Route path="/mainfeed" element={ <MainFeed following={following} /> } />

        <Route path="/profile" element={ <Profile user={user}/> } />

        <Route path="/createpost" element={ <CreatePost user={user} getCurrentUser={getCurrentUser}/> } />

        <Route path="/profileposts" element={ <PostContainer /> }/>
      </Routes>

      {/* <Route>
        <Messaging path="/messages:id"/>
      </Route>  STRETCH GOAL */}

    </div>
  );
}

export default App;
