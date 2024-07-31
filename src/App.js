import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routeConfig";
function App() {
  return (
    <div className="bg-slate-200 overflow-hidden">
    <RouterProvider router={routes} />
  </div>
  );
}

export default App;
