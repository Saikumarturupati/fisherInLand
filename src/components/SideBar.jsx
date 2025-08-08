import { Link } from "react-router";
const SideBar = () => {
  return (
    <div className="side_container">
      <button className="home">
        <Link to="/">Home</Link>
      </button>
      <button className="about">
        <Link to="/about">About</Link>
      </button>
      <button className="contact">
        <Link to="/contact">contact us</Link>
      </button>
    </div>
  );
};
export default SideBar;
