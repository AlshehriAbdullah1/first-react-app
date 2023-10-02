import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "./contexts/postsContexts";
export default function PostsList() {
  console.log("PostsList");
  const posts = useContext(PostsContext);
  let postsList = posts.map((post) => {
    return (
      <div
        key={post.id}
        style={{
          backgroundColor: "orange",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        <Link to={`/postDetails/${post.id}`}>
          <h1>{post.title}</h1>
        </Link>
      </div>
    );
  });
  return <>{postsList}</>;
}
