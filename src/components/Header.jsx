import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";

export default function Header({ onToggleCart }) {
  const { user, login, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, texts } = useLanguage();
  const { cartCount } = useCart();

  return (
    <header className="header-card">
      <nav className="top-nav">
        <div className="nav-brand">
          <span className="brand-badge">{texts.appBadge}</span>
          <div className="nav-brand-copy">
            <strong>Context Store</strong>
            <span>{user ? user.name : texts.guest}</span>
          </div>
        </div>

        <div className="nav-actions">
          <div className="nav-pill auth-pill">
            <span className="panel-kicker">Auth</span>
            <strong>{user ? user.name : texts.guest}</strong>
            <button
              type="button"
              className="ghost-btn nav-inline-btn"
              onClick={user ? logout : () => login()}
            >
              {user ? texts.logout : texts.login}
            </button>
          </div>

          <button
            type="button"
            className="nav-pill nav-icon-btn"
            onClick={toggleTheme}
            aria-label={texts.theme}
          >
            <span className="panel-kicker">{texts.theme}</span>
            <strong>{theme === "light" ? texts.themeLight : texts.themeDark}</strong>
          </button>

          <div className="nav-pill lang-pill">
            <span className="panel-kicker">{texts.language}</span>
            <div className="lang-switch">
              <button
                type="button"
                className={language === "fr" ? "lang-btn active" : "lang-btn"}
                onClick={() => setLanguage("fr")}
              >
                FR
              </button>
              <button
                type="button"
                className={language === "en" ? "lang-btn active" : "lang-btn"}
                onClick={() => setLanguage("en")}
              >
                EN
              </button>
            </div>
          </div>

          <button
            type="button"
            className="cart-toggle-btn"
            onClick={onToggleCart}
            aria-label={texts.openCart}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="cart-icon"
            >
              <path
                d="M3.5 5h2l2.2 9.1a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20.5 8H7.1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="19" r="1.4" fill="currentColor" />
              <circle cx="17" cy="19" r="1.4" fill="currentColor" />
            </svg>
            <span className="cart-toggle-count">{cartCount}</span>
          </button>
        </div>
      </nav>

      <div className="hero-layout">
        <div className="brand-block">
          <h1>{texts.heroTitle}</h1>
          <p>{texts.heroText}</p>
        </div>

        <aside className="hero-side">
          <span className="panel-kicker">Context API</span>
          <strong>4 shared states</strong>
          <p>
            {cartCount} {texts.items} /{" "}
            {theme === "light" ? texts.themeLight : texts.themeDark} /{" "}
            {language === "fr" ? "FR" : "EN"}
          </p>
        </aside>
      </div>
    </header>
  );
}
