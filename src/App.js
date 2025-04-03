import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routeConfig";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="bg-slate-200 overflow-hidden">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{ zIndex: 9999 }}
      />
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
