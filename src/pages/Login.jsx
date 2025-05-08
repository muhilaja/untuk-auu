import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [dobError, setDobError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setUsernameError("");
    setDobError("");

    if (username.toLowerCase() !== "auu") {
      setUsernameError("Serius gataauu??");
      return;
    }

    const validDob = "2005-05-11";
    if (dob !== validDob) {
      setDobError("Kalau ini gatau parah sih");
      return;
    }

    console.log("Login data:", { username, dob });
    navigate("/utama");
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white px-4 py-8 overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full max-w-sm sm:max-w-md lg:max-w-lg px-6 mt-2">
        <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 mb-3">
          <DotLottieReact
            src="https://lottie.host/a45f4853-0c27-4da2-8027-acd4222f5918/cFRrjAMqVW.lottie"
            autoplay
            loop
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-pink-500 mb-6 drop-shadow-[0_0_10px_rgba(236,72,153,0.4)]">
          Login dulu yaaa
        </h1>
        <form onSubmit={handleLogin} className="space-y-6 w-full">
          <div className="flex flex-col mb-4">
            <label
              htmlFor="username"
              className="text-left font-medium text-lg mb-2 text-pink-500"
            >
              Nama yang sering aku panggil
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
              required
            />
            {usernameError && (
              <p className="text-red-500 text-sm mt-2">{usernameError}</p>
            )}
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="dob"
              className="text-left font-medium text-lg mb-2 text-pink-500"
            >
              Tanggal lahir yaa
            </label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
              required
            />
            {dobError && (
              <p className="text-red-500 text-sm mt-2">{dobError}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold text-white bg-pink-500 rounded-full shadow-md hover:bg-pink-600 transition duration-300"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}
