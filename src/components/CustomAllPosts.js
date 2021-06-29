import React from "react";

const CustomAllPosts = ({ loggedUser, allPosts, isFetching, createUpvote }) => {


  if (isFetching) return <span>Carregando...</span>;
  else {
    return allPosts.reverse().map((post) => (
      <div class="ui raised very padded text container segment">
        <h3 class="ui blue header">{post.username}</h3>
        <p>{post.content}</p>
        { post.upvotedByUser &&
          <button style={{ 
            border: 0,
            backgroundColor: "inherit" }}
            onClick={() => {
              createUpvote(post.id, loggedUser.id)
            }}
          >
            <i class="heart icon">
              {post.upvotes}
            </i>
          </button>
        }
        {!post.upvotedByUser &&
          <button style={{ 
            border: 0,
            backgroundColor: "inherit" }}
            onClick={() => {
              createUpvote(post.id, loggedUser.id);
            }}
          >
            <i class="heart outline icon">
              {post.upvotes}
            </i>
          </button>
        } 
      </div>
    ));
  }
};

export default CustomAllPosts;
