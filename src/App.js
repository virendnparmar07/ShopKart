import { Routes, Route } from "react-router-dom";
import React, { useEffect, useReducer, useState } from "react";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/About";

import "./App.css";

function App() {
    const [cart, dispatch] = useReducer(
        cartReducer,
        []
    );

    const [cartLoaded, setCartLoaded] = useState(false);

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");

        if (savedCart) {
            dispatch({
                type: "LOAD_CART",
                payload: JSON.parse(savedCart)
            });
        }

        setCartLoaded(true);
    }, []);

    useEffect(() => {
        if (!cartLoaded) {
            return;
        }

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );
    }, [cart, cartLoaded]);

    return (
        <div className="app">

            <Navbar
                cart={cart}
            />

            <main className="app-main">

                <Routes>

                    {/* Home */}
                    <Route
                        path="/"
                        element={<Home />}
                    />

                    {/* Products */}
                    <Route
                        path="/product"
                        element={
                            <Product
                                dispatch={dispatch}
                            />
                        }
                    />

                    {/* Cart */}
                    <Route
                        path="/cart"
                        element={
                            <Cart
                                cart={cart}
                                dispatch={dispatch}
                            />
                        }
                    />

                    {/* Login */}
                    <Route
                        path="/login"
                        element={<Login />}
                    />

                    {/* Register */}
                    <Route
                        path="/register"
                        element={<Register />}
                    />

                    {/* About */}
                    <Route
                        path="/about"
                        element={<About />}
                    />

                </Routes>

            </main>

        </div>
    );
}


function cartReducer(state, action) {

    switch (action.type) {

        case "ADD_ITEM": {
            const existingItem = state.find(
                (item) => item.id === action.payload.id
            );

            if (existingItem) {
                return state.map((item) =>
                    item.id === action.payload.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                );
            }

            return [
                ...state,
                {
                    ...action.payload,
                    quantity: 1
                }
            ];
        }


        case "INCREASE_QUANTITY":

            return state.map((item) =>
                item.id === action.payload
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            );


        case "DECREASE_QUANTITY":

            return state
                .map((item) =>
                    item.id === action.payload
                        ? {
                            ...item,
                            quantity: item.quantity - 1
                        }
                        : item
                )
                .filter(
                    (item) => item.quantity > 0
                );


        case "REMOVE_ITEM":

            return state.filter(
                (item) => item.id !== action.payload
            );


        case "CLEAR_CART":

            return [];


        case "LOAD_CART":

            return action.payload;


        default:

            return state;
    }
}

export default App;