import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "../components/Homepage/Home";
import BrandsIndex from "../components/Navbar components/brands/index";
import Login from "../components/Navbar components/Login";
import Addtocart from "../components/cart/AddToCart";
import Signup from "../components/Navbar components/Signup";
import Admin from "../components/admin/Admin";
import Iteminsider from "../components/ItemInsider";
import CategoriesIndex from "../components/Navbar components/categories/Index";
import Navbarupocurrency from "../components/Navbar components/Navbarupcurrency";
import LaptopPage from "../components/LaptopPage";
import CheckOutPage from "../components/checkout/CheckOutPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "types", element: <CategoriesIndex /> },
      { path: "brands", element: <BrandsIndex /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "addtocart", element: <Addtocart /> },
      { path: "admin", element: <Admin /> },
      { path: "item", element: <Iteminsider /> },
      { path: "currency", element: <Navbarupocurrency /> },
      { path: "laptops", element: <LaptopPage /> },
      { path: "checkout", element: <CheckOutPage /> },
    ],
  },
]);

export default routes;
