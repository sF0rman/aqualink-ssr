import { ReactElement } from "react";
import "./Layout.scss";

interface LayoutProps {
  children: string | ReactElement;
  className?: string;
}

const Row = ({ children, className }: LayoutProps): ReactElement => {
  return <div className="row">{children}</div>;
};

const Col = ({ children, className }: LayoutProps): ReactElement => {
  return <div className="col">{children}</div>;
};

export { Row, Col };
