import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
// import Register from "./pages/Register.tsx";
// import Dashboard from "./pages/Dashboard.tsx";
// import ItemCreate from "./pages/admin/ItemCreate.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import ItemDisplay from "./pages/admin/ItemDsiplay.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  // {path:"/register",element:<Register />},
  // {path:"/dashboard",element:<Dashboard />},
  // {path:"/admin/itemcreate",element:<ItemCreate />},
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
