import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import { CartProvider } from "./Pages/CartContext";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <h1>ZenCartopia.</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}
