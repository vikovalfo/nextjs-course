import { useState, useEffect } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import Modal from "../ui/Modal";

const PostsList = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPosts(data.posts);
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
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onAddPost={onAddPostHandler} onCancel={onStopPosting} />
        </Modal>
      )}
      {posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map(({ author, body }) => (
            <Post key={Math.random()} author={author} body={body} />
          ))}
        </ul>
      ) : (
        <h3>No post available yet, please add one</h3>
      )}
    </>
  );
};

export default PostsList;
