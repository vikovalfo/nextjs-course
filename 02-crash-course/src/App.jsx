import { useState } from "react";

import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <MainHeader onCreatePost={() => setIsModalVisible(true)} />
      <main>
        <PostsList
          isPosting={isModalVisible}
          onStopPosting={() => setIsModalVisible(false)}
        />
      </main>
    </>
  );
}

export default App;
