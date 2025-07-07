import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="w-100 h-100 ">
        <DotLottieReact
          src="https://lottie.host/5adad9d7-54c6-4fb2-a9ac-71045196d7ba/jGdpqc0GRU.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Preloader;
