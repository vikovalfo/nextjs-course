import classes from "./Post.module.css";

const Post = ({ author, body }) => {
  return (
    <li className={classes.post} key={Math.random()}>
      <h1 className={classes.author}>{author}</h1>
      <p className={classes.text}>{body}</p>
    </li>
  );
};

export default Post;
