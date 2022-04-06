import './App.css';
import React, { useState, useEffect } from 'react'
import { Article } from './components/Article'
import { getPosts } from './services/posts'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts().then((servicePosts) => setPosts(servicePosts))
  }, [])

  return (
    <div className="App">
      <Article items={posts} />
    </div>
  );
}

export default App;
