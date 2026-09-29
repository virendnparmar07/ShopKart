
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

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
                        Shop<span className="brand-highlight">Kart</span>
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
                        menuOpen ? "Close navigation" : "Open navigation"
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
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                            onClick={closeMenu}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/product"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                            onClick={closeMenu}
                        >
                            Products
                        </NavLink>

                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                            onClick={closeMenu}
                        >
                            Cart
                        </NavLink>
                    </div>

                    {/* Authentication links */}
                    <div className="navbar-actions">
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                `nav-login ${isActive ? "active" : ""}`
                            }
                            onClick={closeMenu}
                        >
                            Login
                        </NavLink>

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