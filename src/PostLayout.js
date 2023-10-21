import { Outlet } from "react-router-dom";
export default function PostLayout() {
  return (
    <div>
      <h1>PostLayout!</h1>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
