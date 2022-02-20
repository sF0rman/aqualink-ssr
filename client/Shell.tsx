import { ReactElement, useState } from "react";
import "./Shell.scss";

const Shell = (): ReactElement => {
  const [total, setTotal] = useState<number>(0);

  const increment = (): void => {
    setTotal(total + 1);
  };

  return (
    <div className="shell">
      <button onClick={increment}>Increment</button>
      <p>Total: {total}</p>
    </div>    
  );
};

export default Shell;
