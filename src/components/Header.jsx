import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";

export default function Header({ onToggleCart }) {
  const { user, login, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, texts } = useLanguage();
  const { cartCount } = useCart();
  const isLightTheme = theme === "light";

  return (
    <header className="header-card">
      <nav className="top-nav">
        <div className="nav-brand">
          <div className="store-logo" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="store-logo-icon">
              <path
                d="M4 8.5 6 5h12l2 3.5V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 10a3 3 0 0 0 6 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </div>
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
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={texts.theme}
            title={isLightTheme ? texts.themeDark : texts.themeLight}
          >
            {isLightTheme ? (
              <svg viewBox="0 0 24 24" aria-hidden="true" className="theme-icon">
                <circle cx="12" cy="12" r="4" fill="currentColor" />
                <path
                  d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.5 1.5M6.8 17.2l-1.5 1.5M18.7 18.7l-1.5-1.5M6.8 6.8 5.3 5.3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true" className="theme-icon">
                <path
                  d="M19 14.8A7.8 7.8 0 0 1 9.2 5a8.5 8.5 0 1 0 9.8 9.8Z"
                  fill="currentColor"
                />
              </svg>
            )}
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
