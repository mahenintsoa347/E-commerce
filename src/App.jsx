import { useEffect } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return (
    <div className={`app-shell ${theme}`}>
      <Header />
      <main className="content-grid">
        <ProductList />
        <Cart />
      </main>
    </div>
  );
}

