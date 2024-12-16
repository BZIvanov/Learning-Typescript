import { type FC } from "react";
import Post from "./Post";

const App: FC = () => {
  return (
    <Post title="Hello" description="My Post">
      <button>Remove</button>
    </Post>
  );
};

export default App;
