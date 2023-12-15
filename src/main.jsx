import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import NotPage from "./pages/NotPage.jsx";
import CheckInternet from "./components/CheckInternet.jsx";
import store from "./store/store.js";
import Home from "./pages/Home.jsx";
import Settings from "./pages/Settings.jsx";
import Profile from "./pages/Profile.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-tailwind/react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "Profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signUp",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <NotPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <ThemeProvider>
        <CheckInternet>
          <RouterProvider router={router} />
        </CheckInternet>
      </ThemeProvider>
    </Provider>
  </>
);
