import Post from "./components/Post";

function App() {
  return (
    <main>
      <Post
        author="Ale"
        body="This is madness"
      />
      <Post
        author="Dave"
        body="No, this is sparta!"
      />
    </main>
  );
}

export default App;
