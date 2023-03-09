import React from "react";
import PostContainer from "./PostContainer";

function MainFeed({ following, onLike, onComment, myUser, onCommentDelete, onClickUser }) {

    const posts = following.map((follower) => {
        return <PostContainer key={follower.id} posts={follower.posts} user={follower} onLike={onLike} onComment={onComment} myUser={myUser} onCommentDelete={onCommentDelete} onClickUser={onClickUser}/>
    })

    return (
        <div className="postsContainer">
            {posts}
        </div>
    )
}

export default MainFeed