import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

export default function Cart() {
  const { cartItems, removeFromCart, cartTotal } = useCart();
  const { language, texts } = useLanguage();
  const priceFormatter = new Intl.NumberFormat(
    language === "fr" ? "fr-FR" : "en-US",
    {
      style: "currency",
      currency: "EUR",
    }
  );

  return (
    <aside className="cart-card">
      <div className="section-heading">
        <div>
          <span className="section-tag">{texts.cart}</span>
          <h2>{texts.cartTitle}</h2>
        </div>
        <p>{cartItems.length} {texts.items}</p>
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
                <strong>{item.name}</strong>
                <p>
                  {item.quantity} x {priceFormatter.format(item.price)}
                </p>
              </div>
              <strong className="line-price">
                {priceFormatter.format(item.price * item.quantity)}
              </strong>
              <button
                type="button"
                className="ghost-btn"
                onClick={() => removeFromCart(item.id)}
              >
                {texts.remove}
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="cart-total">
        <span>{texts.total}</span>
        <strong>{priceFormatter.format(cartTotal)}</strong>
      </div>
    </aside>
  );
}
