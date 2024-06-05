import React from "react";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import News from "./pages/News";
import { Footer } from "./components/Footer";
import { PageNotFound } from "./pages/PageNotFound";
import { AppLayout } from "./components/AppLayout";
import AddToCart from "./pages/AddToCart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="/cart" element={<AddToCart />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
