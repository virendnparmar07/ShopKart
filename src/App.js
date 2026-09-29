import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import "./App.css";

function App() {
    return (
        <div className="app">
            <Navbar />

            <main className="app-main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;