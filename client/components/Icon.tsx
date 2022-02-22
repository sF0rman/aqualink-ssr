import { faAnchor, faArrowDown, faArrowLeft, faArrowRight, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

type Icon = "" | "arrowRight" | "arrowLeft" | "arrowUp" | "arrowDown" | "anchor";

interface IconProps {
  name: Icon;
  size?: SizeProp;
  className?: string;
}

const Icon = ({ name, size, className = "" }: IconProps) => {
  const getIcon = () => {
    switch (name) {
      case "arrowRight":
        return <FontAwesomeIcon className={className} size={size} icon={faArrowRight} />;
      case "arrowLeft":
        return <FontAwesomeIcon className={className} size={size} icon={faArrowLeft} />;
      case "arrowUp":
        return <FontAwesomeIcon className={className} size={size} icon={faArrowUp} />;
      case "arrowDown":
        return <FontAwesomeIcon className={className} size={size} icon={faArrowDown} />;
      case "anchor":
        return <FontAwesomeIcon className={className} size={size} icon={faAnchor} />;
      default:
        return <></>;
    }
  };

  return getIcon();
};

export default Icon;
