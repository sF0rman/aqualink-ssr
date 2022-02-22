import { ReactElement } from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  to: string;
  children: string | ReactElement;
}

const NavItem = ({ to, children }: NavItemProps): ReactElement => {
  return (
    <Link to={to} className="nav-item">
      {children}
    </Link>
  );
};

export default NavItem;
