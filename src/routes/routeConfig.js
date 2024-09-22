import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "../components/Homepage/Home";
import Login from "../components/Navbar components/Login";
import Addtocart from "../components/cart/AddToCart";
import Signup from "../components/Navbar components/Signup";
import Admin from "../components/admin/Admin";
import Iteminsider from "../components/ItemInsider";
import LaptopPage from "../components/LaptopPage";
import CheckOutPage from "../components/checkout/CheckOutPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "addtocart", element: <Addtocart /> },
      { path: "admin", element: <Admin /> },
      { path: "product/:name", element: <Iteminsider /> },
      { path: "category/:type", element: <LaptopPage /> },
      { path: "brand/:type", element: <LaptopPage /> },
      { path: "checkout", element: <CheckOutPage /> },
    ],
  },
]);

export default routes;
