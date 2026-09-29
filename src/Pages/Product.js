
import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import "./Product.css";

function Product() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [retry, setRetry] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchProducts() {
            setLoading(true);
            setError("");

            try {
                const response = await fetch(
                    "https://fakestoreapi.noksha.dev/api/products",
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error("Unable to load products.");
                }

                const json = await response.json();
                const data = json.data || json;

                if (!Array.isArray(data)) {
                    throw new Error("Invalid product data.");
                }

                setProducts(data);
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(
                        "Something went wrong while loading products."
                    );
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        fetchProducts();

        return () => controller.abort();
    }, [retry]);

    const filteredProducts = products.filter((item) =>
        item.title?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="products-page">
            {/* Page heading */}
            <section className="products-header">
                <div className="products-heading">
                    <span className="products-tag">
                        DISCOVER OUR COLLECTION
                    </span>

                    <h1>
                        Explore <span>Products</span>
                    </h1>

                    <p>
                        Find something you love from our
                        collection of products.
                    </p>
                </div>

                <div className="products-count">
                    <span className="count-number">
                        {products.length}
                    </span>
                    <span className="count-label">
                        Products
                    </span>
                </div>
            </section>

            {/* Search bar */}
            <section className="products-toolbar">
                <div className="product-search">
                    <span className="search-icon">⌕</span>

                    <input
                        type="search"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        aria-label="Search products"
                    />

                    {search && (
                        <button
                            type="button"
                            className="clear-search"
                            onClick={() => setSearch("")}
                            aria-label="Clear search"
                        >
                            ×
                        </button>
                    )}
                </div>

                <div className="results-label">
                    {loading
                        ? "Loading products..."
                        : `${filteredProducts.length} results`}
                </div>
            </section>

            {/* Loading */}
            {loading && (
                <div className="products-loading">
                    <div className="loading-spinner"></div>
                    <p>Loading your products...</p>
                </div>
            )}

            {/* Error */}
            {!loading && error && (
                <div className="products-message">
                    <div className="message-icon">!</div>
                    <h2>Couldn't load products</h2>
                    <p>{error}</p>

                    <button
                        type="button"
                        className="retry-btn"
                        onClick={() => setRetry((prev) => prev + 1)}
                    >
                        Try Again
                    </button>
                </div>
            )}

            {/* Product grid */}
            {!loading && !error && (
                <>
                    {filteredProducts.length > 0 ? (
                        <div className="product-container">
                            {filteredProducts.map((item) => (
                                <ProductCard
                                    key={item.id}
                                    title={item.title}
                                    price={item.price}
                                    image={item.image}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="products-message">
                            <div className="message-icon">⌕</div>
                            <h2>No products found</h2>
                            <p>
                                Try searching for another product.
                            </p>

                            <button
                                type="button"
                                className="retry-btn"
                                onClick={() => setSearch("")}
                            >
                                Clear Search
                            </button>
                        </div>
                    )}
                </>
            )}
        </main>
    );
}

export default Product;