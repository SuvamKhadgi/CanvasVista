import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Canvaspainting from "./pages/Canvaspaint.tsx";
import Acyricpaint from "./pages/acyricpaint.tsx";
import Oilpainting from "./pages/oilpainting.tsx";
import Digitalpainting from "./pages/digitalart.tsx";
import Ogpainting from "./pages/OGpainting.tsx";
import Watercolorpainting from "./pages/watercolorpainting.tsx";
import Nepalipainting from "./pages/nepalipaint.tsx";
import Handmade from "./pages/handmade.tsx";
import Dashboard from "./admin/admindashboard.tsx";
import CreateCardForm from "./admin/createpaint.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import ItemDisplay from "./pages/admin/ItemDsiplay.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/Canvas-paintings", element: <Canvaspainting /> },
  { path: "/admin-dashboard", element: <Dashboard /> },
  { path: "/Create-painting", element: <CreateCardForm /> },
  { path: "/acyric-painting", element: <Acyricpaint /> },
  { path: "/oil-painting", element: <Oilpainting /> },
  { path: "/og-painting", element: <Ogpainting /> },
  { path: "/watercolor-painting", element: <Watercolorpainting /> },
  { path: "/nepali-painting", element: <Nepalipainting /> },
  { path: "/handmade-painting", element: <Handmade /> },
  { path: "/digitalart-painting", element: <Digitalpainting /> },
  // {path:"/admin/itemdisplay",element:<ItemDisplay />},
]);

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}
export default App;
