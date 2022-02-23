import { ReactElement } from "react";
import "./Layout.scss";

type Size = "none" | "small" | "" | "large";
type Alignment = "" | "top" | "center" | "bottom";
type Justify = "" | "between" | "evenly" | "around" | "center";

interface LayoutProps {
  children: string | ReactElement;
  gap?: Size;
  align?: Alignment;
  justify?: Justify;
  className?: string;
}

const Row = ({ children, gap = "", align = "", justify = "", className = "" }: LayoutProps): ReactElement => {
  const buildClass = (): string => {
    const classes = [];
    gap && classes.push(gap);
    align && classes.push(`align-${align}`);
    justify && classes.push(`justify-${justify}`);
    className && classes.push(className);
    return classes.join(" ");
  };

  return <div className={`row ${buildClass()}`}>{children}</div>;
};

const Col = ({ children, gap = "", align = "", justify = "", className = "" }: LayoutProps): ReactElement => {
  const buildClass = (): string => {
    const classes = [];
    gap && classes.push(gap);
    align && classes.push(`align-${align}`);
    justify && classes.push(`justify-${justify}`);
    className && classes.push(className);
    return classes.join(" ");
  };
  return <div className={`col ${buildClass()}`}>{children}</div>;
};

export { Row, Col };
