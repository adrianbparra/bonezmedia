import React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Container } from "semantic-ui-react";

import { CartProvider } from "./context/cartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Installs from "./pages/Installs";
import Item from "./pages/Item";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import Order from "./pages/Order";

import "./App.css";
import Cart from "./pages/Cart";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <CartProvider>
                <Container className="app">
                    <Navbar />

                    <Routes>
                        <Route exact path="/" element={<Home />} />

                        <Route path="/shop" element={<Shop />} />

                        <Route path="/shop/:id" element={<Item />} />

                        <Route path="/installs" element={<Installs />} />

                        <Route path="/cart" element={<Cart />} />

                        <Route
                            path="/privacypolicy"
                            element={<PrivacyPolicy />}
                        />

                        <Route path="/contactus" element={<ContactUs />} />

                        <Route path="/order/:session_id" element={<Order />} />
                    </Routes>

                    <Footer />
                </Container>
            </CartProvider>
        </QueryClientProvider>
    );
}

export default App;
