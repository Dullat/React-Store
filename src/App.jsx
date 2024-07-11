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
      </Route>
    )
  );
  return (
    <ThemeContextProvider value={{ themeMode, setLight, setDark }}>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}

export default App;
