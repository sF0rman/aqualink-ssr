import { ReactElement, useState } from "react";
import Logo from "../../resources/logo-white.png";
import NavItem from "./NavItem";
import "./Navigation.scss";
import Icon from "../Icon";

const Navigation = (): ReactElement => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navigation">
      <img src={Logo} className="main-logo" alt="" />
      <div className={`nav-drawer ${menuOpen ? "open" : ""}`}>
        <Icon name={menuOpen ? "cross" : "bars"} size="2x" className={`menuToggle mobile ${menuOpen ? "open" : ""}`} onClick={toggleDrawer} />
        <NavItem to="/">Home</NavItem>
        <NavItem to="/products">Products</NavItem>
        <NavItem to="/about">About AQUALINK</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </div>
    </div>
  );
};

export default Navigation;
