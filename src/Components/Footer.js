
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="shopkart-footer">

            <div className="footer-container">

                {/* BRAND COLUMN */}
                <div className="footer-brand">

                    <Link to="/" className="footer-logo">
                        <span className="footer-logo-icon">🛍</span>
                        Shop<span>Kart</span>
                    </Link>

                    <p>
                        Shop smart. Live better.
                        Discover amazing products and enjoy
                        a better shopping experience with ShopKart.
                    </p>

                    <div className="footer-socials">
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">▶</a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
                    </div>

                </div>

                {/* QUICK LINKS */}
                <div className="footer-column">

                    <h3>Quick Links</h3>

                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Products</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/cart">Shopping Cart</Link></li>
                    </ul>

                </div>

                {/* CUSTOMER SERVICE */}
                <div className="footer-column">

                    <h3>Customer Service</h3>

                    <ul>
                        <li><Link to="/login">My Account</Link></li>
                        <li><Link to="/register">Create Account</Link></li>
                        <li><Link to="/product">Browse Products</Link></li>
                        <li><Link to="/about">About ShopKart</Link></li>
                    </ul>

                </div>

                {/* NEWSLETTER */}
                <div className="footer-newsletter">

                    <h3>Stay Connected</h3>

                    <p>
                        Subscribe to get updates about new arrivals,
                        special offers and exciting deals.
                    </p>

                    <form
                        className="newsletter-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Newsletter subscription will be available soon!");
                        }}
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            aria-label="Email address"
                            required
                        />

                        <button type="submit" aria-label="Subscribe">
                            →
                        </button>
                    </form>

                    <span className="newsletter-note">
                        Stay updated with ShopKart.
                    </span>

                </div>

            </div>

            {/* FOOTER BOTTOM */}
            <div className="footer-bottom">

                <p>
                    © {new Date().getFullYear()} ShopKart.
                    All rights reserved.
                </p>

                <p className="footer-tagline">
                    Made for smarter shopping <span>♥</span>
                </p>

            </div>

        </footer>
    );
}

export default Footer;
