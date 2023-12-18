export default function BlogPost({ params }) {
    return (
        <>
            <h1>Blog Post</h1>
            <h2>{params.post}</h2>
        </>
    );
}