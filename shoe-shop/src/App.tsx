// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Notification from "./components/Notification";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Login />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Notification />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
};

export default App;
