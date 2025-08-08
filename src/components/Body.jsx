import Header from "./Header.jsx";
import SideBar from "./SideBar.jsx";
import MainContainer from "./MainContainer.jsx";

function Body() {
  return (
    <div>
      <Header />
      <div className="app_container">
        <SideBar />
        <MainContainer />
      </div>
    </div>
  );
}
export default Body;
