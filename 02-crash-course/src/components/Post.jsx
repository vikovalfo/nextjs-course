const Post = ({author, body}) => {
    return (
        <div>
            <h1>{author}</h1>
            <p>{body}</p>
        </div>
    );
};

export default Post;