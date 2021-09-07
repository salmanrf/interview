import {useState, useEffect} from "react";

import CardComponent from "./components/Card";

import "./css/style.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.status === 200 && res.json())
      .then((res) => {
        setPosts(res);
        setIsLoading(false);
      });
  }, []);
  
  return (
    <div className="app">
      <header id="main-header">
        <h2>Posts</h2>
      </header>
      <main id="posts-list">
        {!isLoading &&
          <>
            {posts.map((post) => (
              <CardComponent post={post} />
            ))}
          </>
        }
      </main>
    </div>
  );
}

export default App;
