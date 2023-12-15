import { useState, useEffect } from "react";

import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [isFecthing, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPosts(data.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  async function onAddPostHandler(post) {
    await fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((prevPosts) => [...prevPosts, post]);
  }

  return (
    <>
      {!isFecthing && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map(({ author, body }) => (
            <Post key={Math.random()} author={author} body={body} />
          ))}
        </ul>
      )}
      {!isFecthing && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFecthing && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
