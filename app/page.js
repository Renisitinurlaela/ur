"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedAnswers = JSON.parse(localStorage.getItem("answers") || "[]");
      setAnswers(savedAnswers);
      const loggedIn = localStorage.getItem("isAdmin") === "true";
      setIsAdmin(loggedIn);
    }
  }, []);

  const handleAnswer = (response) => {
    const newAnswer = `${response} - ${new Date().toLocaleString()}`;
    setAnswers((prevAnswers) => {
      const updatedAnswers = [newAnswer, ...prevAnswers];
      localStorage.setItem("answers", JSON.stringify(updatedAnswers));
      return updatedAnswers;
    });
  };
  

  const handleAdminLogin = () => {
    const password = prompt("Masukkan password admin:");
    if (password === "galbisecret") {
      setIsAdmin(true);
      localStorage.setItem("isAdmin", "true");
      alert("Login sebagai admin berhasil!");
    } else {
      alert("Password salah!");
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem("isAdmin");
  };

  const handleDeleteAnswer = (index) => {
    if (index < 0 || index >= answers.length) {
      console.error("Index tidak valid");
      return;
    }
    const updatedAnswers = [...answers];
    updatedAnswers.splice(index, 1);
    setAnswers(updatedAnswers);
    localStorage.setItem("answers", JSON.stringify(updatedAnswers));
  };
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-100 text-center p-4 relative">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-white text-2xl font-bold">💙</h1>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          <ul className="hidden md:flex space-x-6 text-white font-semibold">
            {"Tentang Alasan Kenangan Ajakan".split(" ").map((menu, index) => (
              <li key={index}>
                <Link
                  href={`/#${menu.toLowerCase()}`}
                  className="hover:text-blue-300 transition-all duration-300"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {isMenuOpen && (
          <ul className="md:hidden bg-blue-900 text-white text-center py-4">
            {"Tentang Alasan Kenangan Ajakan".split(" ").map((menu, index) => (
              <li key={index} className="py-2">
                <Link
                  href={`/#${menu.toLowerCase()}`}
                  className="block hover:text-blue-300 transition-all duration-300"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>

      <div className="pt-24">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-blue-700 mb-4"
        >
          Hei, aku cuma mau bilang...
        </motion.h1>

        {!showMessage && (
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-blue-500 text-white rounded-2xl shadow-lg"
              onClick={() => setShowMessage(true)}
            >
              More
            </motion.button>
          </motion.div>
        )}

        {showMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-6 text-blue-700 max-w-xl"
          >
            <p className="text-xl font-semibold">
              Maaf kalo kesan nya alay dan ga jelas yaa,
              Aku memang pernah salah langkah, sempat jauh, sempat hilang arah… tapi setiap detik tanpamu rasanya sangat hampa. 
              Kalau kamu kasih aku satu kesempatan lagi, aku janji bakal jaga hati kamu lebih baik dari sebelumnya. 
              Gimana kalau kita coba lagi, pelan-pelan, belajar bareng dari yang kemarin? Aku masih sayang, dan aku masih percaya... 
              kita masih bisa jadi ‘kita’ lagi. Jadi, mau nggak kamu jadi rumahku lagi? 🌹
              maaf aku ga bisa ngasih kata kata romantis kayak orang orang,
              aku emang ga jelas tapi hubungan kita jangan ikutan ga jelas yaa
            </p>
            <p className="mt-4 italic">
              Aku harap kita bisa memulai semua nya dari awal dan memperbaiki semua nya galbi
            </p>

            <motion.div
              className="flex justify-center mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-blue-300 text-blue-900 font-medium rounded-full shadow"
                onClick={() => setShowMessage(false)}
              >
                Sembunyikan
              </motion.button>
            </motion.div>

            {/* Ya/Tidak Buttons */}
            <div className="mt-6">
            <p className="mt-4 italic">
            so do you want to be my girlfriend again galbina💙
            </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-2 bg-green-500 text-white font-medium rounded-full shadow mr-4"
                onClick={() => handleAnswer("Ya")}
              >
                Yes
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-2 bg-red-500 text-white font-medium rounded-full shadow"
                onClick={() => handleAnswer("Tidak")}
              >
                No
              </motion.button>
            </div>

            {/* Admin Section */}
            <div className="mt-10">
              {!isAdmin ? (
                <button
                  className="mt-4 px-4 py-2 bg-black text-white rounded-full shadow"
                  onClick={handleAdminLogin}
                >
                  Secret
                </button>
              ) : (
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-blue-700">Jawaban Orang Lain:</h2>
                    <button
                      className="text-sm text-red-500 underline"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                  {answers.length === 0 ? (
                    <p className="text-gray-500 italic">Belum ada jawaban.</p>
                  ) : (
                    <ul className="space-y-2">
                      {answers.map((ans, index) => (
                        <li key={index} className="bg-blue-50 p-2 rounded text-blue-800 flex justify-between items-center">
                          <span>{ans}</span>
                          <button
                            className="text-red-500 text-sm ml-4"
                            onClick={() => handleDeleteAnswer(index)}
                          >
                            Hapus
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
