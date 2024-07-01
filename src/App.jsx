import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Landing,
  About,
  Home,
  Login,
  Profile,
  Signing,
  TestPage,
} from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/signing",
    element: <Signing />,
  },
  {
    path: "/testpage",
    element: <TestPage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
