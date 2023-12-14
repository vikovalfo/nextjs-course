import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import Modal from '../ui/Modal';

const PostsList = () => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  return (
    <>
      <Modal>
        <NewPost
          onAddAuthor={(author) => setEnteredAuthor(author)}
          onAddBody={(body) => setEnteredBody(body)}
        />
      </Modal>
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Dave" body="No, this is sparta!" />
      </ul>
    </>
  );
};

export default PostsList;
