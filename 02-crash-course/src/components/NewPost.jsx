import classes from "./NewPost.module.css";

const NewPost = ({ onAddAuthor, onAddBody }) => {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={(event) => onAddBody(event.target.value)}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={(event)=> onAddAuthor(event.target.value)}
        />
      </p>
    </form>
  );
};

export default NewPost;
