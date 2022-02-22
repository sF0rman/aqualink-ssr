import { ReactElement } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import "./Shell.scss";

const Shell = (): ReactElement => {
  const isLanding = useLocation().pathname === "/";
  return (
    <div className={`shell ${isLanding ? "landing" : ""}`}>
      <Navigation />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Shell;
