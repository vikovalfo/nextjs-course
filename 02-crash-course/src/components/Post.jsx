import { Link } from "react-router-dom";
import classes from "./Post.module.css";

const Post = ({id, author, body }) => {
  return (
    <li className={classes.post}>
      <Link to={`/edit-post/${id}`}>
      <h1 className={classes.author}>{author}</h1>
      <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
};

export default Post;
