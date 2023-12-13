import Post from "./Post";
import NewPost from "./NewPost";

import classes from "./PostsList.module.css";

const PostsList = () => {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Ale" body="This is madness" />
        <Post author="Dave" body="No, this is sparta!" />
      </ul>
    </>
  );
};

export default PostsList;
