import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import {
  Landing,
  About,
  Home,
  Login,
  Profile,
  Signin,
  TestPage,
} from './pages/index';
import ProtectedRoute from './helpers/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: "/", // not protected
    element: <Landing />,
  },
  {
    path: "/about", // not protected
    element: <About />,
  },
  {
    path: "/home", // protected
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login", // not protected
    element: <Login />,
  },
  {
    path: "/profile", // protected
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signin", // not protected
    element: <Signin />,
  },
  {
    path: "/testpage", // not protected
    element: <TestPage />,
  },
  {
    path: "logout",
    element: () => {
      // Implement logout functionality if needed
    },
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
