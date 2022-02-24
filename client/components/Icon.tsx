import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import {
  faAnchor,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp, faBars, faEnvelope, faXmark
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Icon = "" | "arrowRight" | "arrowLeft" | "arrowUp" | "arrowDown" | "anchor" | "bars" | "cross" | "envelope";

interface IconProps {
  name: Icon;
  size?: SizeProp;
  className?: string;
  onClick?: () => void;
}

const Icon = ({ name, size, className = "", onClick }: IconProps) => {
  const getIcon = () => {
    switch (name) {
      case "arrowRight":
        return <FontAwesomeIcon onClick={onClick} className={className} size={size} icon={faArrowRight} />;
      case "arrowLeft":
        return <FontAwesomeIcon onClick={onClick} className={className} size={size} icon={faArrowLeft} />;
      case "arrowUp":
        return <FontAwesomeIcon onClick={onClick} className={className} size={size} icon={faArrowUp} />;
      case "arrowDown":
        return <FontAwesomeIcon onClick={onClick} className={className} size={size} icon={faArrowDown} />;
      case "anchor":
        return <FontAwesomeIcon onClick={onClick} className={className} size={size} icon={faAnchor} />;
      case "bars":
        return <FontAwesomeIcon onClick={onClick} className={className} size={size} icon={faBars} />;
      case "cross":
        return <FontAwesomeIcon onClick={onClick} className={className} size={size} icon={faXmark} />;
      case "envelope":
        return <FontAwesomeIcon onClick={onClick} className={className} size={size} icon={faEnvelope} />;
      default:
        return <></>;
    }
  };

  return getIcon();
};

export default Icon;
