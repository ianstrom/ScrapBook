import React from "react";
import PostContainer from "./PostContainer";

function MainFeed({ following, onLike, onComment, myUser, onCommentDelete, onClickUser }) {
    // console.log(following)

    // let arrayOfPosts = [] 

    // for (let i = 0; i < following.length; i++) {
    //     if (following[i].posts.length < 1) {
    //         return null
    //     } else {
    //         let selectedFollowing = following[i]
    //         following[i].posts.forEach((post) => {
    //             selectedFollowing.posts = [post]
    //             console.log(post)
    //             arrayOfPosts.push(selectedFollowing)
    //             console.log(arrayOfPosts)
    //         })
    //     }
    // }

    // // function shufflePosts(array) {
    // //     for (let i = array.length - 1; i > 0; i--) {
    // //         let j = Math.floor(Math.random() * (i + 1))
    // //         [array[i], array[j]] = [array[j], array[i]]
    // //     }
    // //     return array
    // // }

    // // shufflePosts(arrayOfPosts)

    // // let postsToShuffle =

    // const shuffleArray = (array) => {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         const temp = array[i];
    //         array[i] = array[j];
    //         array[j] = temp;
    //     }
    // }

    // console.log(arrayOfPosts)
    // shuffleArray(arrayOfPosts)

    let posts = following.map((follower) => {
        return <PostContainer key={follower.id} posts={follower.posts} user={follower} onLike={onLike} onComment={onComment} myUser={myUser} onCommentDelete={onCommentDelete} onClickUser={onClickUser} />
    })

    return (
        <div className="postsContainer">
            {posts}
        </div>
    )
}

export default MainFeed