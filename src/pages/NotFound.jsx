import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white text-center px-4 py-8 overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full max-w-sm sm:max-w-md lg:max-w-lg px-6">
        <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 mb-6">
          <DotLottieReact
            src="https://lottie.host/093c35c7-532d-4f37-b463-916e6aa69151/nGJ0hZ007V.lottie"
            autoplay
            loop
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-pink-500 mb-4 drop-shadow-[0_0_10px_rgba(236,72,153,0.4)]">
          Oops! Ke beranda dulu…
        </h1>
        <Link
          to="/"
          className="inline-block px-8 py-3 font-semibold text-white bg-pink-500 rounded-full shadow-md hover:bg-pink-600 transition duration-300"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
