import { ReactElement } from "react";
import Logo from "../../resources/logo-white.png";
import NavItem from "./NavItem";
import "./Navigation.scss";

const Navigation = (): ReactElement => {
  return (
    <div className="navigation">
      <img src={Logo} alt="" />
      <div className="nav-drawer">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/products">Products</NavItem>
        <NavItem to="/about">About AQUALINK</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </div>
    </div>
  );
};

export default Navigation;
