import { createContext, useContext, useState } from "react";

const LanguageContext = createContext(undefined);

const translations = {
  fr: {
    appBadge: "e-commerce",
    heroTitle: "Gestion d'etat global avec Context API",
    heroText:
      "Authentification, theme, langue et panier sont geres dans des Providers React sans Redux.",
    login: "Login",
    logout: "Logout",
    connectedAs: "Utilisateur connecte",
    disconnected: "Aucun utilisateur connecte",
    theme: "Theme",
    themeLight: "Light",
    themeDark: "Dark",
    language: "Langue",
    languageFr: "Francais",
    languageEn: "Anglais",
    cart: "Panier",
    items: "articles",
    productsTitle: "Liste des produits",
    productsText:
      "Ajoutez des produits au panier depuis la liste ci-dessous.",
    addToCart: "Ajouter au panier",
    cartTitle: "Produits dans le panier",
    cartEmpty: "Votre panier est vide pour le moment.",
    openCart: "Ouvrir le panier",
    closeCart: "Fermer le panier",
    remove: "Supprimer",
    total: "Total",
    statusReady: "Pret pour les demonstrations Context API",
    welcomeBack: "Bienvenue",
    authHint: "Connectez-vous pour simuler une session utilisateur.",
    guest: "Invite",
  },
  en: {
    appBadge: "Mini e-commerce app",
    heroTitle: "Global state management with Context API",
    heroText:
      "Authentication, theme, language and cart are managed through React Providers without Redux.",
    login: "Login",
    logout: "Logout",
    connectedAs: "Connected user",
    disconnected: "No user connected",
    theme: "Theme",
    themeLight: "Light",
    themeDark: "Dark",
    language: "Language",
    languageFr: "French",
    languageEn: "English",
    cart: "Cart",
    items: "items",
    productsTitle: "Product list",
    productsText: "Add products to the cart from the catalog below.",
    addToCart: "Add to cart",
    cartTitle: "Products in cart",
    cartEmpty: "Your cart is empty for now.",
    openCart: "Open cart",
    closeCart: "Close cart",
    remove: "Remove",
    total: "Total",
    statusReady: "Ready for Context API demos",
    welcomeBack: "Welcome",
    authHint: "Log in to simulate a user session.",
    guest: "Guest",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("fr");

  const toggleLanguage = () => {
    setLanguage((currentLanguage) =>
      currentLanguage === "fr" ? "en" : "fr"
    );
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        texts: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside a LanguageProvider");
  }

  return context;
}
