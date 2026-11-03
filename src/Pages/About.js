import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import "./About.css";


/* =========================================================
   TRUSTED BRANDS
========================================================= */

const brands = [
    {
        id: 1,
        name: "Samsung",
        image: "/brands/samsung.png"
    },
    {
        id: 2,
        name: "boAt",
        image: "/brands/boat.png"
    },
    {
        id: 3,
        name: "Puma",
        image: "/brands/puma.jpg"
    },
    {
        id: 4,
        name: "LG",
        image: "/brands/lg.png"
    },
    {
        id: 5,
        name: "Philips",
        image: "/brands/philips.jpg"
    },
    {
        id: 6,
        name: "The Ordinary",
        image: "/brands/ordinary.jpg"
    },
    {
        id: 7,
        name: "Nivea",
        image: "/brands/nivea.png"
    },
    {
        id: 8,
        name: "Himalaya",
        image: "/brands/himalaya.png"
    },
    {
        id: 9,
        name: "Apple",
        image: "/brands/apple.png"
    },
    {
        id: 10,
        name: "Fastrack",
        image: "/brands/fastrack.png"
    },
    {
        id: 11,
        name: "Amazon",
        image: "/brands/amazon.jpg"
    },
    {
        id: 12,
        name: "Levi's",
        image: "/brands/levis.png"
    },
    {
        id: 13,
        name: "Nike",
        image: "/brands/nike.png"
    },
    {
        id: 14,
        name: "Adidas",
        image: "/brands/adidas.png"
    },
    {
        id: 15,
        name: "Zara",
        image: "/brands/zara.png"
    },
    {
        id: 16,
        name: "H&M",
        image: "/brands/hm.png"
    },
    {
        id: 17,
        name: "Canon",
        image: "/brands/canon.png"
    },
    {
        id: 18,
        name: "Dyson",
        image: "/brands/dyson.png"
    },
    {
        id: 19,
        name: "Intel",
        image: "/brands/intel.jpg"
    },
    {
        id: 20,
        name: "Ray-Ban",
        image: "/brands/rayban.png"
    }
];


function About() {
    return (
        <main className="about-page">

            {/* Background Glow */}
            <div className="about-glow about-glow-one"></div>
            <div className="about-glow about-glow-two"></div>


            {/* =====================================================
                ABOUT HERO
            ===================================================== */}

            <section className="about-hero">

                {/* LEFT CONTENT */}
                <div className="about-content">

                    <div className="about-label">
                        <span></span>
                        ABOUT US
                    </div>

                    <h1>
                        About <span>us</span>
                    </h1>

                    <h2>
                        Making everyday shopping simpler,
                        <br />
                        faster and more enjoyable.
                    </h2>

                    <p>
                        At ShopKart, we believe great products should be
                        accessible to everyone. We are an online shopping
                        destination offering a wide range of high-quality
                        products at great prices, delivered right to your
                        doorstep.
                    </p>

                    <p>
                        From fashion and electronics to home essentials and
                        more — we're here to make shopping easier, better,
                        and more delightful for you.
                    </p>


                    {/* Buttons */}
                    <div className="about-buttons">

                        <Link
                            to="/product"
                            className="shop-btn"
                        >
                            Shop now
                            <span>→</span>
                        </Link>

                        <a
                            href="#brands"
                            className="learn-btn"
                        >
                            Learn more
                        </a>

                    </div>


                    {/* Tagline */}
                    <div className="about-tagline">
                        Shop Smarter, Live Better
                        <span></span>
                    </div>

                </div>


                {/* =====================================================
                    RIGHT VISUAL
                ===================================================== */}

                <div className="about-visual">

                    <div className="visual-card">

                        <div className="visual-top">
                            <span className="visual-dot"></span>
                            <span>SHOPKART</span>
                        </div>

                        <div className="visual-icon">
                            ✦
                        </div>

                        <h3>
                            Your world.
                            <br />
                            <span>Your cart.</span>
                        </h3>

                        <p>
                            Discover products you love,
                            all in one place.
                        </p>


                        <div className="visual-stats">

                            <div>
                                <strong>20+</strong>
                                <span>Products</span>
                            </div>

                            <div>
                                <strong>24/7</strong>
                                <span>Shopping</span>
                            </div>

                        </div>

                    </div>


                    {/* Floating Cards */}

                    <div className="floating-card floating-card-one">
                        <span>✦</span>
                        Quality Products
                    </div>

                    <div className="floating-card floating-card-two">
                        Fast & Easy Shopping
                        <span>→</span>
                    </div>

                </div>

            </section>


            {/* =====================================================
                TRUSTED BRANDS
            ===================================================== */}

            <section
                className="brands-section"
                id="brands"
            >

                <div className="brands-heading">

                    <div className="brands-label">
                        <span></span>
                        OUR PARTNERS
                    </div>

                    <h2>
                        Trusted by leading <span>brands</span>
                    </h2>

                    <p>
                        We're proud to partner with some of the world's
                        most trusted brands to bring you the best products
                        and shopping experience.
                    </p>

                </div>


                <div className="brands-grid">

                    {brands.map((brand) => (
                        <div
                            className="brand-item"
                            key={brand.id}
                        >
                            <img
                                src={brand.image}
                                alt={brand.name}
                            />
                        </div>
                    ))}

                </div>

            </section>

            <Footer />  
            
        </main>
        
    );
}


export default About;