import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Utama() {
  const navigate = useNavigate();

  const goToKataPuitis = () => {
    navigate("/katapuitis");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 px-4 py-8 relative overflow-hidden font-[Poppins]">
      {/* Audio Otomatis */}
      <audio autoPlay loop>
        <source src="/song.mp3" type="audio/mpeg" />
        Browser tidak mendukung audio.
      </audio>

      <div className="flex flex-col sm:flex-row items-start justify-start w-full max-w-screen-lg mx-auto space-y-8 sm:space-y-0 sm:space-x-8 z-10">
        {/* Kartu Ucapan */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white shadow-2xl rounded-3xl p-6 sm:p-10 w-full sm:w-1/2 text-center border-4 border-pink-200 backdrop-blur-sm bg-opacity-90"
        >
          <img
            src={import.meta.env.BASE_URL + "auu.png"}
            alt="Foto"
            className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full mx-auto border-4 border-pink-400 shadow-lg mb-6"
          />
          <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-4 drop-shadow-md tracking-wide">
            🎉 Selamat Ulang Tahun Auu 🎂
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Semoga panjang umur, sehat selalu, dan diberi kelancaran dalam
            segala urusan. Semoga apa yang diharapkan kedepannya bisa tercapai.
            Semoga kebaikan selalu menyertaimu ya auu
          </p>
        </motion.div>

        {/* Foto tergantung & tombol */}
        <div className="relative w-full flex flex-col items-center mt-32 sm:mt-0 sm:w-1/2">
          <motion.div
            drag
            dragConstraints={{ top: -100, bottom: 100, left: -50, right: 50 }}
            dragElastic={0.4}
            whileHover={{ scale: 1.05 }}
            className="z-10"
          >
            <motion.img
            https://raw.githubusercontent.com/muhilaja/untuk-auu/main/public/auu2.jpg

              className="w-44 h-44 sm:w-64 sm:h-75 object-cover rounded-xl border-4 border-pink-400 shadow-xl"
              initial={{ y: -20 }}
              animate={{ y: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.button
            onClick={goToKataPuitis}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-gradient-to-r from-pink-500 to-pink-400 text-white py-2 px-6 rounded-xl shadow-lg hover:from-pink-600 transition-all duration-300"
          >
            Jangan ditekan!
          </motion.button>
        </div>
      </div>

      {/* Wiggle keyframe */}
      <style jsx>{`
        .animate-wiggle {
          animation: wiggle 1.5s ease-in-out infinite;
        }

        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(-2deg);
          }
          50% {
            transform: rotate(2deg);
          }
        }
      `}</style>
    </div>
  );
}
