import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import Modal from "../ui/Modal";

const PostsList = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([
    { author: "Dave", body: "No, this is sparta!" },
  ]);

  function onAddPostHandler(post) {
    setPosts((prevPosts) => [...prevPosts, post]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onAddPost={onAddPostHandler} onCancel={onStopPosting} />
        </Modal>
      )}
      <ul className={classes.posts}>
        {posts.map(({ author, body }) => (
          <Post key={Math.random()} author={author} body={body} />
        ))}
      </ul>
    </>
  );
};

export default PostsList;
