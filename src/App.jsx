import "./App.css";
// import { createBroweserRouter, RouterProvider } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import ContactUs from "./components/ContactUs.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <div className="home-container">Welcome to Home page!</div>,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <ContactUs />,
        },
      ],
    },
  ]);
  return (
    <div className="routing-container">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
