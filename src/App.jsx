import { productsData } from "./api/api";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} loader={productsData}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    )
  );
  return (
    <>
      <div className="font-bodyFont bg-gray-100">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
