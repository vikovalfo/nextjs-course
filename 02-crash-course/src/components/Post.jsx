const names = ['Ale', 'Dave'];

const Post = () => {

    const chosenName = Math.random() > 0.5 ? names[0] : names[1];
    return (
        <div>
            {chosenName}
        </div>
    );
};

export default Post;