import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

export default function Cart({ isOpen, onClose }) {
  const { cartItems, removeFromCart, cartTotal } = useCart();
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
    <>
      <button
        type="button"
        className={isOpen ? "cart-overlay visible" : "cart-overlay"}
        onClick={onClose}
        aria-label={texts.closeCart}
      />

      <aside className={isOpen ? "cart-card cart-card-open" : "cart-card"}>
        <div className="cart-topbar">
          <div className="section-heading">
            <div>
              <span className="section-tag">{texts.cart}</span>
              <h2>{texts.cartTitle}</h2>
            </div>
            <p>
              {cartItems.length} {texts.items}
            </p>
          </div>

          <button
            type="button"
            className="cart-close-btn"
            onClick={onClose}
            aria-label={texts.closeCart}
          >
            X
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-state">
            <p>{texts.cartEmpty}</p>
          </div>
        ) : (
          <div className="cart-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-copy">
                  <strong className="cart-item-name">{item.name}</strong>
                  <div className="cart-item-meta">
                    <span className="qty-badge">{item.quantity} x</span>
                    <p>{priceFormatter.format(item.price)} / unite</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="cart-remove-btn"
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`${texts.remove} ${item.name}`}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="remove-icon">
                    <path
                      d="M6 7h12M9.5 7V5.8c0-.4.3-.8.8-.8h3.4c.5 0 .8.4.8.8V7M8.5 10.5V17M12 10.5V17M15.5 10.5V17M7.5 7l.7 11c0 .6.5 1 1.1 1h5.4c.6 0 1.1-.4 1.1-1l.7-11"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{texts.remove}</span>
                </button>
                <strong className="line-price">
                  {priceFormatter.format(item.price * item.quantity)}
                </strong>
              </div>
            ))}
          </div>
        )}

        <div className="cart-total">
          <span>{texts.total}</span>
          <strong>{priceFormatter.format(cartTotal)}</strong>
        </div>
      </aside>
    </>
  );
}
