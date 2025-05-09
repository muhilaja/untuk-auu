import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function KataPuitis() {
  const navigate = useNavigate();

  const back = () => {
    navigate("/utama");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 px-6 py-8 relative font-[Poppins]">
      {/* Audio Otomatis */}
      <audio autoPlay loop>
        <source src={import.meta.env.BASE_URL + "song.mp3"} type="audio/mpeg" />
        Browser tidak mendukung audio.
      </audio>

      {/* Kontainer Kata-kata Puitis */}
      <div className="flex items-center justify-center w-full min-h-screen relative z-10">
        <div className="bg-white shadow-xl rounded-3xl p-8 sm:p-12 w-full sm:w-10/12 md:w-3/4 lg:w-2/3 text-center border-4 border-pink-200 backdrop-blur-sm bg-opacity-90">
          <h1 className="text-4xl sm:text-5xl font-bold text-pink-600 mb-6 drop-shadow-md tracking-wide">
            HAHAHAHAHA DITEKANNYA JUGA
          </h1>
          <br />

          <p className="text-gray-700 text-justify text-lg sm:text-xl leading-relaxed mb-6">
            Aku mau bilang banyak banyak makasih auu. Makasih udah ada sampai
            sejauh ini. Awalnya aku kira aku cuman ingin kau au rupanya makin
            lama makin buat aku sadar kalau aku butuh kau. Itu 2 hal berbeda
            jauh auu. Awalnya emang niat aku bekawan dekat aja tapi gatau
            rupanya kita udah sampai sedekat ini. Makasih atas hal-hal yang udah
            pernah kau lakukan. Salah satunya ngirim pap "SEKALI LIHAT".{" "}
          </p>

          <motion.img
            src={import.meta.env.BASE_URL + "auu3.jpg"} // Menggunakan BASE_URL untuk konsistensi
            alt="Foto Ulang Tahun"
            className="w-full sm:w-full lg:w-full h-auto object-cover mx-auto border-4 border-pink-400 shadow-lg mb-8"
            initial={{ y: -20 }}
            animate={{ y: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />

          <p className="text-gray-700 text-justify text-lg sm:text-xl leading-relaxed mb-6">
            Ini aku ingat kali, ini kau ngirim pap setelah kita ngerjain android
            studi. Aku ingat kali sebegimana berterima kasihnya kau auu. Gatau
            yaa banyak hal yang aku sukai dari kau, salah satunya pas kau
            ngucapin terima kasih yang lucu. Asli aku gatau auu kenapa, tapi pas
            kau yang bilang itu rasanya beda aja. Makanya aku selalu suka
            nolongin kau, karna aku suka lihat respon kau setelah itu auu. Bukan
            aku ingin dipuji auu, tapi ucapan dari kau tu terasa kali tulusnya
            auu, ga ada kata-kata yang bisa menggambarkannya. Apalagi besoknya
            setelah kejadian itu untuk pertama kalinya kau ngirim pap itu. Itu
            asal kau tau, pas aku lihatnya dalam kondisi baru bangun. Aku ga
            nyangka kau bakal ngirim itu, dan aku tau itu pasti awal yang baik.
            Kau lihat aja mata aku kalau ga percaya, itu masih bengkak karna
            baru bangun. Langsung aja tu tau kau, langsung ku foto karna yaa
            sayang aja hal-hal pertama kayak gini ga diabadikan. Coba kau
            bayangkan gini lah auu, misalnya kau lagi tidur ni kan tiba-tiba pas
            bangun lihat ada yang ngepap dengan muka lucunya, kayak antara lagi
            dimimpi atau dikehidupan nyata. Terus itu pas pula lagi puasa, yaa
            rasa lapar dan haus hilang rasanya, aku cuman terfokus sama foto itu
            aja.
          </p>

          <p className="text-gray-700 text-justify text-lg sm:text-xl leading-relaxed mb-6">
            Aku yakin kau pasti ga nyangka kalau aku nyimpan foto nii auu. Ya
            karna itu untuk pertama kali nya auu kau ngirim pap. Gatau aku mau
            bilang apa lagi soal foto itu, kayak ga ada kata-kata yang bisa
            menggambarkannnya. Mungkin lagi dan lagi aku bilang makasih auu,
            banyak hal yang kau lakukan itu buat bahagia. Dan makasih juga untuk
            mengajarkan untuk tetap tenang dan tidak buru-buru auu, karna aku
            tau itu bukan aku kali. Dengan dekat sama kau aku belajar itu, yaa
            kau tau sendiri lah aku gimana orangnya. Aku suka kepastian walau
            sering dilakukan dalam buru-buru. Dekat dengan kau juga aku belajar
            sabar auu, tetap tenang dalam menghadapi segala hal. Itu sesuatu
            yang luar biasa bagi aku auu, karna aku gatau sebegitu pentingnya ga
            buru-buru, karna dalam pikiran aku kalau bisa dilakukan sekarang
            kenapa tidak. Mungkin itulah auu, banyak perbedaan diantara kita,
            aku juga gatau kedepannya gimana. Biar semesta yang memutuskan, dan
            aku akan mengusahakan yang terbaik.
          </p>

          <p className="text-gray-700 text-justify text-lg sm:text-xl leading-relaxed mb-6">
            Disclaimer: JANGAN NGIRIM PAP SEKALI LIHAT LAGI, BINGUNG AKU MAU
            MASUKIN FOTO APA
          </p>

          {/* Tombol untuk Kembali */}
          <motion.button
            onClick={back}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-gradient-to-r from-pink-500 to-pink-400 text-white py-3 px-8 rounded-xl shadow-lg hover:from-pink-600 transition-all duration-300"
          >
            ✨ Kembali
          </motion.button>
        </div>
      </div>

      {/* Animasi Wiggle */}
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
