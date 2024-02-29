import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Allitems from "./admin/allitem.tsx";
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
import Users from "./admin/users.tsx"
import Account from "./pages/account.tsx";
import UpdateProfile from "./pages/updateprofile.tsx";
import Searchproduct from "./pages/search.tsx";
import Whislist from "./pages/wishlist.tsx";
import Feedback from "./pages/feedback.tsx";
// import help
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/Canvas-paintings", element: <Canvaspainting /> },
  { path: "/acyric-painting", element: <Acyricpaint /> },
  { path: "/oil-painting", element: <Oilpainting /> },
  { path: "/og-painting", element: <Ogpainting /> },
  { path: "/watercolor-painting", element: <Watercolorpainting /> },
  { path: "/nepali-painting", element: <Nepalipainting /> },
  { path: "/handmade-painting", element: <Handmade /> },
  { path: "/digitalart-painting", element: <Digitalpainting /> },
  { path: "/myaccount", element: <Account /> },
  { path: "/updateprofile", element: <UpdateProfile /> },
  { path: '/Search', element: <Searchproduct /> },
  { path: '/wishlist', element: <Whislist /> },
  { path: '/feedback', element: <Feedback /> },
  // { path: '/help', element: <Help /> },

  { path: "/admin-dashboard", element: <Dashboard /> },
  { path: "/Create-painting", element: <CreateCardForm /> },
  { path: "/users", element: <Users /> },
  { path: "/all-items", element: <Allitems /> },
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
