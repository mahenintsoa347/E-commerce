import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { theme } = useTheme();
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsCartOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={`app-shell ${theme}`}>
      <Header onToggleCart={() => setIsCartOpen((current) => !current)} />
      <main className="content-grid content-grid-single">
        <ProductList />
      </main>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
