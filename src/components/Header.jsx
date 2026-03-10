import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { user, login, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, texts } = useLanguage();
  const { cartCount } = useCart();

  return (
    <header className="header-card">
      <div className="hero-layout">
        <div className="brand-block">
          <span className="brand-badge">{texts.appBadge}</span>
          <h1>{texts.heroTitle}</h1>
          <p>{texts.heroText}</p>
        </div>

        <aside className="hero-side">
          <span className="panel-kicker">Context API</span>
          <strong>4 shared states</strong>
          <p>
            {cartCount} {texts.items} •{" "}
            {theme === "light" ? texts.themeLight : texts.themeDark} •{" "}
            {language === "fr" ? "FR" : "EN"}
          </p>
        </aside>
      </div>

      <div className="header-grid">
        <section className="panel">
          <div className="panel-title-row">
            <span className="panel-kicker">Auth</span>
            <strong>{user ? texts.welcomeBack : texts.authHint}</strong>
          </div>
          <p>
            {user
              ? `${texts.connectedAs} : ${user.name}`
              : `${texts.disconnected} : ${texts.guest}`}
          </p>
          <div className="button-row">
            <button type="button" className="primary-btn" onClick={() => login()}>
              {texts.login}
            </button>
            <button type="button" className="ghost-btn" onClick={logout}>
              {texts.logout}
            </button>
          </div>
        </section>

        <section className="panel">
          <div className="panel-title-row">
            <span className="panel-kicker">{texts.theme}</span>
            <strong>{theme === "light" ? texts.themeLight : texts.themeDark}</strong>
          </div>
          <p>{texts.statusReady}</p>
          <button type="button" className="primary-btn" onClick={toggleTheme}>
            {theme === "light" ? texts.themeDark : texts.themeLight}
          </button>
        </section>

        <section className="panel">
          <div className="panel-title-row">
            <span className="panel-kicker">{texts.language}</span>
            <strong>{language === "fr" ? texts.languageFr : texts.languageEn}</strong>
          </div>
          <div className="button-row">
            <button
              type="button"
              className={language === "fr" ? "primary-btn" : "ghost-btn"}
              onClick={() => setLanguage("fr")}
            >
              FR
            </button>
            <button
              type="button"
              className={language === "en" ? "primary-btn" : "ghost-btn"}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>
        </section>

        <section className="panel panel-cart">
          <span className="panel-kicker">{texts.cart}</span>
          <strong className="cart-count">
            {cartCount} {texts.items}
          </strong>
        </section>
      </div>
    </header>
  );
}
