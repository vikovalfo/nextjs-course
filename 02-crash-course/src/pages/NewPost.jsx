import { useState } from "react";

import classes from "./NewPost.module.css";
import Modal from "../ui/Modal";

const NewPost = ({ onAddPost, onCancel }) => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  return (
    <Modal>
      <form
        className={classes.form}
        onSubmit={(event) => {
          event.preventDefault();
          const postData = {
            body: enteredBody,
            author: enteredAuthor,
          };
          onAddPost(postData);
          onCancel();
        }}
      >
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            required
            rows={3}
            onChange={(event) => setEnteredBody(event.target.value)}
            value={enteredBody}
          />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={(event) => setEnteredAuthor(event.target.value)}
            value={enteredAuthor}
          />
        </p>
        <p className={classes.actions}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
};

export default NewPost;
