
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import "./Home.css";

function Home({ dispatch }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch featured products
    useEffect(() => {
        const controller = new AbortController();

        async function fetchFeaturedProducts() {
            try {
                const response = await fetch(
                    "https://fakestoreapi.noksha.dev/api/products",
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error("Unable to fetch products");
                }

                const json = await response.json();
                const data = json.data || json;

                if (!Array.isArray(data)) {
                    throw new Error("Invalid product data");
                }

                const normalizedProducts = data.map((item) => ({
                    ...item,
                    id: item._id
                }));

                setProducts(normalizedProducts.slice(0, 4));

            } catch (error) {
                if (error.name !== "AbortError") {
                    console.error("Featured products error:", error);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        fetchFeaturedProducts();

        return () => controller.abort();
    }, []);

    return (
        <div className="home-page">

            {/* HERO SECTION */}
            <section className="home-hero">

                <div className="hero-content">

                    <span className="hero-tag">
                        ✨ Welcome to ShopKart
                    </span>

                    <h1>
                        Shop Smarter,
                        <span> Live Better.</span>
                    </h1>

                    <p className="hero-description">
                        Discover amazing products at unbeatable prices.
                        Your one-stop shop for everything you love!
                    </p>

                    <div className="hero-buttons">
                        <Link to="/product" className="hero-shop-btn">
                            Shop Now <span>→</span>
                        </Link>

                        <Link to="/about" className="hero-about-btn">
                            Discover More
                        </Link>
                    </div>

                    <div className="hero-highlights">

                        <div className="hero-highlight">
                            <span className="highlight-icon">👥</span>
                            <div>
                                <h4>10K+</h4>
                                <p>Happy Customers</p>
                            </div>
                        </div>

                        <div className="hero-highlight-divider"></div>

                        <div className="hero-highlight">
                            <span className="highlight-icon">🚚</span>
                            <div>
                                <h4>Free Shipping</h4>
                                <p>On orders over ₹499</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* HERO VISUAL */}
                <div className="hero-visual">

                    <div className="hero-glow"></div>

                    <div className="hero-shopping-card">

                        <div className="shopping-card-top">
                            <span>SHOPKART</span>
                            <span className="shopping-star">✦</span>
                        </div>

                        <div className="shopping-bag">
                            <div className="bag-handle"></div>
                            <div className="bag-body">
                                <span>SK</span>
                            </div>
                        </div>

                        <div className="shopping-products">
                            <div className="floating-product product-one">🎧</div>
                            <div className="floating-product product-two">⌚</div>
                            <div className="floating-product product-three">👟</div>
                        </div>

                        <div className="shopping-card-bottom">
                            <span>YOUR STYLE. YOUR CHOICE.</span>
                            <span>✦ ✦ ✦</span>
                        </div>

                    </div>

                    <div className="hero-offer-card">
                        <span>UP TO</span>
                        <strong>50%</strong>
                        <span>OFF</span>
                    </div>

                    <div className="hero-floating-note">
                        <span>✦</span>
                        Great Deals Everyday
                    </div>

                </div>
            </section>


            {/* FEATURED PRODUCTS SECTION */}
            <section className="home-featured">

                <div className="featured-heading">
                    <span className="featured-tag">
                        OUR COLLECTION
                    </span>

                    <h2>
                        Featured <span>Products</span>
                    </h2>

                    <p>
                        Discover our handpicked products, just for you.
                    </p>
                </div>

                {loading ? (
                    <div className="featured-message">
                        Loading featured products...
                    </div>
                ) : products.length > 0 ? (

                    <div className="featured-grid">

                        {products.map((item) => (
                            <article className="home-product-card" key={item.id}>

                                <div className="home-product-image">
                                    <img
                                        src={item.image || "/images/placeholder.png"}
                                        alt={item.title}
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                "/images/placeholder.png";
                                        }}
                                    />

                                    <span className="featured-badge">
                                        Featured
                                    </span>
                                </div>

                                <div className="home-product-info">

                                    <span className="home-product-category">
                                        {item.category || "General"}
                                    </span>

                                    <h3 title={item.title}>
                                        {item.title}
                                    </h3>

                                    <div className="home-product-bottom">

                                        <span className="home-product-price">
                                            ₹{Number(item.price).toFixed(2)}
                                        </span>

                                        <button
                                            className="home-add-cart"
                                            onClick={() => {
                                                dispatch({
                                                    type: "ADD_ITEM",
                                                    payload: item
                                                });
                                            }}
                                        >
                                            🛒 Add to Cart
                                        </button>

                                    </div>
                                </div>
                            </article>
                        ))}

                    </div>

                ) : (
                    <div className="featured-message">
                        Featured products are currently unavailable.
                    </div>
                )}

                <div className="featured-view-all">
                    <Link to="/product">
                        View All Products →
                    </Link>
                </div>

            </section>

            <Footer />

        </div>
    );
}

export default Home;
