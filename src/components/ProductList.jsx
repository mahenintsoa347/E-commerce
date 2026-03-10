import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

const products = [
  {
    id: 1,
    name: { fr: "Casque audio", en: "Headphones" },
    description: {
      fr: "Son immersif et reduction de bruit pour travailler partout.",
      en: "Immersive sound and noise cancellation for focused work anywhere.",
    },
    price: 180000,
    category: { fr: "Audio", en: "Audio" },
  },
  {
    id: 2,
    name: { fr: "Montre connectee", en: "Smart watch" },
    description: {
      fr: "Suivi d'activite, notifications et autonomie longue duree.",
      en: "Activity tracking, notifications and long battery life.",
    },
    price: 260000,
    category: { fr: "Accessoires", en: "Accessories" },
  },
  {
    id: 3,
    name: { fr: "Sac urbain", en: "Urban backpack" },
    description: {
      fr: "Compartiments pratiques pour ordinateur, chargeur et carnets.",
      en: "Smart compartments for laptop, charger and notebooks.",
    },
    price: 145000,
    category: { fr: "Lifestyle", en: "Lifestyle" },
  },
  {
    id: 4,
    name: { fr: "Lampe de bureau", en: "Desk lamp" },
    description: {
      fr: "Eclairage reglable pour bureau, lecture ou streaming.",
      en: "Adjustable lighting for desk work, reading or streaming.",
    },
    price: 98000,
    category: { fr: "Maison", en: "Home" },
  },
];

export default function ProductList() {
  const { addToCart } = useCart();
  const { language, texts } = useLanguage();
  const priceFormatter = new Intl.NumberFormat(
    language === "fr" ? "fr-MG" : "en-US",
    {
      style: "currency",
      currency: "MGA",
      maximumFractionDigits: 0,
    }
  );

  return (
    <section className="catalog-card">
      <div className="section-heading">
        <div>
          <span className="section-tag">{texts.productsTitle}</span>
          <h2>{texts.productsTitle}</h2>
        </div>
        <p>{texts.productsText}</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <div className="product-head">
              <span className="category-pill">{product.category[language]}</span>
              <span className="product-index">0{product.id}</span>
            </div>
            <h3>{product.name[language]}</h3>
            <p>{product.description[language]}</p>
            <div className="product-footer">
              <strong className="price-tag">
                {priceFormatter.format(product.price)}
              </strong>
              <button
                type="button"
                className="primary-btn"
                onClick={() =>
                  addToCart({
                    id: product.id,
                    name: product.name[language],
                    price: product.price,
                  })
                }
              >
                {texts.addToCart}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
