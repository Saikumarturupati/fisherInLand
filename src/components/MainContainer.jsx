import { Outlet } from "react-router";
const MainContainer = () => {
  return (
    <div className="main_container">
      <Outlet />
    </div>
  );
};
export default MainContainer;
