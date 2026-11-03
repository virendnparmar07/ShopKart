import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ userName, cart = [] }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    const cartCount = cart.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );

    return (
        <header className="shop-navbar">
            <nav className="navbar-inner">

                {/* Logo */}
                <Link
                    className="navbar-brand"
                    to="/"
                    onClick={closeMenu}
                >
                    <span className="brand-icon">✦</span>

                    <span>
                        Shop
                        <span className="brand-highlight">
                            Kart
                        </span>
                    </span>
                </Link>


                {/* Mobile menu button */}
                <button
                    className={`navbar-toggler ${
                        menuOpen ? "menu-open" : ""
                    }`}
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={
                        menuOpen
                            ? "Close navigation"
                            : "Open navigation"
                    }
                    aria-expanded={menuOpen}
                    aria-controls="navbarNav"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>


                {/* Navigation links */}
                <div
                    className={`navbar-collapse ${
                        menuOpen ? "show" : ""
                    }`}
                    id="navbarNav"
                >

                    <div className="navbar-links">

                        {/* Home */}
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `nav-link ${
                                    isActive ? "active" : ""
                                }`
                            }
                            onClick={closeMenu}
                        >
                            Home
                        </NavLink>


                        {/* Products */}
                        <NavLink
                            to="/product"
                            className={({ isActive }) =>
                                `nav-link ${
                                    isActive ? "active" : ""
                                }`
                            }
                            onClick={closeMenu}
                        >
                            Products
                        </NavLink>


                        {/* Cart */}
                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                `nav-link ${
                                    isActive ? "active" : ""
                                }`
                            }
                            onClick={closeMenu}
                        >
                            Cart

                            <span className="cart-count">
                                {cartCount}
                            </span>
                        </NavLink>


                        {/* About */}
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `nav-link ${
                                    isActive ? "active" : ""
                                }`
                            }
                            onClick={closeMenu}
                        >
                            About
                        </NavLink>

                    </div>


                    {/* Authentication links */}
                    <div className="navbar-actions">

                        {/* Login */}
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                `nav-login ${
                                    isActive ? "active" : ""
                                }`
                            }
                            onClick={closeMenu}
                        >
                            Login
                        </NavLink>


                        {/* Sign Up */}
                        <NavLink
                            to="/register"
                            className={({ isActive }) =>
                                `nav-register ${
                                    isActive ? "active" : ""
                                }`
                            }
                            onClick={closeMenu}
                        >
                            Sign Up
                            <span> → </span>
                        </NavLink>

                    </div>

                </div>

            </nav>
        </header>
    );
}