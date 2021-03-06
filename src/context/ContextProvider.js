
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Context from './Context';

function ContextProvider({ children }) {
  const [allPosts, setAllPosts] = useState([]);
  const [loggedUser, setLoggedUser] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  const createPost = async (content) => {
    const URI = 'https://springboot-feed-api.herokuapp.com/api/v1/posts';
    const request = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "content": content,
        })
    };
      await fetch(URI, request);
      await getPosts();
  };

  const createUpvote = async (postId, userId) => {
    const URI = 'https://springboot-feed-api.herokuapp.com/api/v1/posts/up';
    const request = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "postId": postId,
            "userId": userId,
        })
    };
      await fetch(URI, request);
      await getPosts();
  }

  const getPosts = async () => {
    setIsFetching(true);
    const URI = "https://springboot-feed-api.herokuapp.com/api/v1/posts";
    const request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(URI, request)
      .then((response) => response.json())
      .then((posts) => setAllPosts(posts));
  }

  const getLoggedUser = async () => {
    setIsFetching(true);
    const baseUrl = "https://springboot-feed-api.herokuapp.com/api/v1/login";
    const request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    
    fetch(baseUrl, request)
      .then((response) => response.json())
      .then((user) => setLoggedUser(user));
  }

  useEffect(() => {
    if (allPosts !== undefined && loggedUser !== undefined) {
      setIsFetching(false);
    }
  }, [allPosts, loggedUser]);

  useEffect(() => {
    getLoggedUser();
    getPosts();
  }, []);


  return (
    <Context.Provider
      value={ {
        isFetching,
        setIsFetching,
        allPosts,
        setAllPosts,
        loggedUser,
        setLoggedUser,
        createPost,
        createUpvote,
      } }
    >
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContextProvider;
