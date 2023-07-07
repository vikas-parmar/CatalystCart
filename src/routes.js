import { Outlet, createBrowserRouter } from "react-router-dom";
import { Home, Product, Checkout, Login, Register, ProductList } from "./pages";
import { Announcement, Footer, Navbar, NewsLetter } from "./components";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Outlet />
      <NewsLetter />
      <Footer />
    </>
  );
};

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <ProductList />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/checkout/:id",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
