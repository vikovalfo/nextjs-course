import classes from "./Post.module.css";

const Post = ({ author, body }) => {
  return (
    <div className={classes.post}>
      <h1 className={classes.author}>{author}</h1>
      <p className={classes.text}>{body}</p>
    </div>
  );
};

export default Post;
