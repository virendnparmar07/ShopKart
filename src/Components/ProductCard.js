import "./ProductCard.css";

function ProductCard({ title, price, image, product, dispatch }) {
    const formattedPrice = Number(price);

    return (
        <div className="product-card">
            <div className="product-image">
                <img
                    src={image || "/images/placeholder.png"}
                    alt={title || "Product"}
                    onError={(e) => {
                        e.currentTarget.src = "/images/placeholder.png";
                    }}
                />
            </div>

            <h3>{title || "Untitled Product"}</h3>

            <p>
                ₹
                {Number.isFinite(formattedPrice)
                    ? formattedPrice.toFixed(2)
                    : "N/A"}
            </p>

            <button
                className="add-cart-button"
                onClick={() => {
                    dispatch({
                        type: "ADD_ITEM",
                        payload: product
                    });
                }}
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;