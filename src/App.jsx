import { useEffect, useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ThemeContextProvider } from "./context/context";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import Products from "./componants/Products";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

let cart = [];

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const setLight = () => {
    setThemeMode("light");
  };

  const setDark = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />}>
          <Route index element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
        </Route>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    )
  );
  return (
    <ThemeContextProvider value={{ themeMode, setLight, setDark, cart }}>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}

export default App;
