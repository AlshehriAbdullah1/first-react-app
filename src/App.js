import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Hello from "./Hello.js";
import Home from "./Home.js";
import PostsList from "./PostsList.js";
function App() {
  return (
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
      </div>

      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path="/" element={<Home></Home>} />
        <Route path="/posts" element={<PostsList></PostsList>} />
      </Routes>
    </div>
  );
}

export default App;
