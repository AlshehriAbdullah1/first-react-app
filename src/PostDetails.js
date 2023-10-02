import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "./contexts/postsContexts";
export default function PostDetails({ title, body }) {
  const posts = useContext(PostsContext);
  const { id } = useParams();
  console.log(id);
  const post = posts.find((p) => {
    return p.id == id;
  });
  return (
    <>
      <h1>{post.title}</h1>

      <p>{post.body}</p>
    </>
  );
}
