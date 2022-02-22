import { ReactElement } from "react";
import Icon from "../Icon";
import "./ButtonLink.scss";

interface ButtonLinkProps {
  to: string;
  children: ReactElement | string;
  className?: string;
}
const ButtonLink = ({ to, children, className = "" }: ButtonLinkProps): ReactElement => {
  return (
    <a href={to} className={`link-button ${className}`}>
      <span className="link-button-border"></span>
      <p>{children}</p>
      <Icon name="arrowRight" />
    </a>
  );
};

export default ButtonLink;
