import { useEffect } from "react";
import { useState, CSSProperties, React } from "react";
// import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpinner = () => {

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Set overflow hidden when the spinner is active

    return () => {
      document.body.style.overflow = "auto"; // Restore overflow when the spinner is unmounted
    };
  }, []); // This runs once when the component mounts and cleans up on unmount

  return (
    <div className="sweet-loading w-full h-[100vh] flex justify-center items-center absolute z-10 bg-[#ffffffa8]">
      <img src="./loader.png" alt="loader" className="w-16 h-16 animate-spinfast" />
    </div>

  );
};

export default LoadingSpinner;
