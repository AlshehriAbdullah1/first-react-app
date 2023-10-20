import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import createPost from "./createPost";
import Hello from "./Hello.js";
import Home from "./Home.js";
import PostsList from "./PostsList.js";
import PostDetails from "./PostDetails";
import { PostsContext } from "./contexts/postsContexts";
import React from "react";
function App() {
  const postsData = [
    {
      id: 1,
      title: "Post 1",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Post 2",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Post 3",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      title: "Post 4",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      title: "Post 5",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <PostsContext.Provider value={postsData}>
      <div className="App">
        <div style={{ fontSize: "30px" }}>
          <Link to={"/home" || "/"}>
            <button style={{ fontSize: "30px" }}>Home</button>
          </Link>

          <Link to="/hello">
            <button style={{ fontSize: "30px" }}>Hello</button>
          </Link>

          <Link to={"/posts"}>
            <button style={{ fontSize: "30px" }}>Posts</button>
          </Link>
          <Link to={"/posts/create"}>
            <button style={{ fontSize: "30px" }}>create post</button>
          </Link>
        </div>

        <Routes>
          <Route path="/hello" element={<Hello />} />
          <Route path="/" element={<Home></Home>} />
          <Route path="/posts" element={<PostsList></PostsList>} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/posts/create" element={<createPost></createPost>} />
        </Routes>
      </div>
    </PostsContext.Provider>
  );
}

export default App;
