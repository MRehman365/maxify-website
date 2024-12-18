import { useState, CSSProperties, React } from "react";
import ClipLoader from "react-spinners/ClipLoader";

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

const LoadingSpinner = () => {
  //   let [loading, setLoading] = useState(true);
  //   let [color, setColor] = useState("#ffffff");
  return (
    <div className="sweet-loading">
      <img src="./loader.scg" alt="" />
    </div>
  );
};

export default LoadingSpinner;
