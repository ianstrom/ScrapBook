import './App.css';
import MainFeed from './MainFeed';
// import Messaging from './Messaging';
import MyProfile from './MyProfile';
import CreatePost from './CreatePost';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Search from './Search';
import ClickedProfile from './ClickedProfile';



function App() {
  const [myUser, setMyUser] = useState(false)
  const [users, setUsers] = useState([])
  const [clickedUser, setClickedUser] = useState(false)
  const [following, setFollowing] = useState([])
  const [isFollowing, setIsFollowing] = useState()
  const [isLiked, setIsLiked] = useState()

  const navigate = useNavigate()

  function getAllUsers(users) {
    setUsers(users)
  }

  function getCurrentUser(user1) {
    setMyUser(user1)
    setFollowing([])

    fetch(`http://localhost:3000/users/${user1.id}`)
      .then(data => data.json())
      .then(user => user.following.forEach((followingId) => {
        fetch(`http://localhost:3000/users/${followingId}`)
          .then(data => data.json())
          .then(user => {
            setFollowing((following) => [...following, user])
          })
      }))
  }

  function onClickUser(userToDisplay) {
    setClickedUser(userToDisplay)
    // console.log(userToDisplay)
    const isFollowingStateValue = (userToDisplay.followers.find(id => id === myUser.id) ? true : false)
    setIsFollowing(isFollowingStateValue)
    navigate("/clickedprofile")
  }

  // console.log(clickedUser)

  function onFollow() {
    const clickedUserFollowOrUnfollowArray = (isFollowing ? clickedUser.followers.filter((follower) => follower !== myUser.id) : [...clickedUser.followers, myUser.id])
    changeClickedUserFollowers(clickedUserFollowOrUnfollowArray)
    const myUserFollowingArray = (isFollowing ? myUser.following.filter((follower) => follower !== clickedUser.id) : [...myUser.following, clickedUser.id])
    changeMyUserFollowing(myUserFollowingArray)
    setIsFollowing(!isFollowing)
  }

  function changeClickedUserFollowers(array) {
    fetch(`http://localhost:3000/users/${clickedUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ followers: array })
    })
      .then(data => data.json())
      .then(data => setClickedUser(data))
  }

  function changeMyUserFollowing(array) {
    fetch(`http://localhost:3000/users/${myUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ following: array })
    })
      .then(data => data.json())
      .then(data => {
        setMyUser(data)
        getCurrentUser(data)
        fetch('http://localhost:3000/users')
          .then(data => data.json())
          .then(data => setUsers(data))
      })
  }

  function onLike(user, postToUpdate) {
    const postIndex = user.posts.findIndex((post) => post.id === postToUpdate.id)
    const likeArray = (isLiked ? postToUpdate.likes.filter((liker) => liker !== myUser.username) : [...postToUpdate.likes, myUser.username])
    let updatedUser = user
    updatedUser.posts[postIndex].likes = likeArray

    fetch(`http://localhost:3000/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedUser)
    })
      .then(data => data.json())
      .then(
        fetch('http://localhost:3000/users')
        .then(data => data.json())
        .then(data => setUsers(data))
    ) /* a way to set state to display new like on post and update entire userdata*/

      setIsLiked(!isLiked)
  }

  function onComment(user, postToUpdate, comment) {
    const postIndex = user.posts.findIndex((post) => post.id === postToUpdate.id)
    const commentArray = [...postToUpdate.comments, comment]
    let updatedUser = user
    updatedUser.posts[postIndex].comments = commentArray


    fetch(`http://localhost:3000/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedUser)
    })
      .then(data => data.json())
      .then(
        fetch('http://localhost:3000/users')
        .then(data => data.json())
        .then(data => setUsers(data))
    )
  }

  return (
    <div className="App">
      {(myUser ? <NavBar /> : null)}
      <Routes>
        <Route exact path="/" element={<Login getCurrentUser={getCurrentUser} getAllUsers={getAllUsers} />} />

        <Route path="/mainfeed" element={<MainFeed following={following} onLike={onLike} onComment={onComment} />} />

        <Route path="/profile" element={<MyProfile user={myUser} onLike={onLike} onComment={onComment}/>} />

        <Route path="/createpost" element={<CreatePost user={myUser} getCurrentUser={getCurrentUser} />} />

        <Route path="/clickedprofile" element={<ClickedProfile isFollowing={isFollowing} clickedUser={clickedUser} myUser={myUser} onFollow={onFollow} onLike={onLike} onComment={onComment}/>} />

        <Route path="/search" element={<Search users={users} onClickUser={onClickUser} clickedUser={clickedUser} />} />
      </Routes>

      {/* <Route>
        <Messaging path="/messages:id"/>
      </Route>  STRETCH GOAL */}

    </div>
  );
}

export default App;
