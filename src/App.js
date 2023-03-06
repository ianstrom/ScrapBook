import './App.css';
import MainFeed from './MainFeed';
// import Messaging from './Messaging';
import Profile from './Profile';
import CreatePost from './CreatePost';
import Login from './Login';
import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {
  const [user, setUser] = useState({})
  const [following, setFollowing] = useState([])

  function getCurrentUser(user) {
    setUser(user)
  }

  useEffect(() => {
    fetch(`http://localhost:3000/users/${user.id}`)
    .then(data => data.json())
    .then(user => user.follwing.forEach((followingId) => {
      fetch(`http://localhost:3000/users/${followingId}`)
      .then(data => data.json())
      .then(user => setFollowing([...following, user]))
      }))
  }, [user])

  return (
    <div className="App">

      <Route exact path="/">
        <Login getCurrentUser={getCurrentUser}/>
      </Route>

      <Route path="/mainfeed">
        <MainFeed following={following}/>
      </Route>

      <Route path="/profile:id">
        <Profile />
      </Route>

      <Route path="/createpost">
        <CreatePost />
      </Route>

      {/* <Route>
        <Messaging path="/messages:id"/>
      </Route>  STRETCH GOAL */}

    </div>
  );
}

export default App;
