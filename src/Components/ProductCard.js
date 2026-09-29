
import "./ProductCard.css";

function ProductCard({ title, price, image }) {
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
        </div>
    );
}

export default ProductCard;