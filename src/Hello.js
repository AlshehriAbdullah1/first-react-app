import { Link } from "react-router-dom";

export default function Hello() {
  return (
    <>
      <h1>Hello Woeld</h1>

      <div
        style={{ background: "Orange", padding: "10px", borderRadius: "20px" }}
      >
        <Link to="/home">
          <h1>Go to Home Page</h1>
        </Link>
      </div>
    </>
  );
}
