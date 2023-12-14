import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import Modal from "../ui/Modal";

const PostsList = ({ isPosting, onStopPosting }) => {
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author="Dave" body="No, this is sparta!" />
      </ul>
    </>
  );
};

export default PostsList;
