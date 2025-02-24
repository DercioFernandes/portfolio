"use client";  

import Image from "next/image";
import { useState} from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaGithub } from "react-icons/fa";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";
import MapWrapper from "./MapWrapper";

const images = ["/images/XRDev.png", "/images/NormalWebsite1.png", "/images/GameDev.png", "/images/NormalWebsite1.png", "/images/NormalWebsite2.jpg", "/images/NormalWebsite3.jpg"];

const links = [
  "https://github.com/XRD-Group-11/VR-CS-1.6",
  "https://github.com/DercioFernandes/VIA-Marketplace",
  "https://github.com/DercioFernandes/Kiseki-Fighters",
  "https://github.com/DercioFernandes/portfolio",
  "https://github.com/DercioFernandes/AnimeUltimaPAP",
  "https://github.com/Mariaaa18/SEP4IOT"
];

const titles = [
  "VR CS-1.6 (Unity VR)",
  "VIA-Marketplace (Java)",
  "Kiseki Fighters (Unity)",
  "My Portfolio (Next.Js)",
  "Anime Ultima (PHP)",
  "IOT Semester Project (C)"
]

export default function Portfolio() {
    const [currentImage, setCurrentImage] = useState(0);
    const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    return (
      <div className="grid md:grid-cols-2 sm:grids-col-1 gap-4 p-8 h-screen ">
        {/* Headline & Navbar */}
        <motion.div 
          className="row-span-1 md:text-4xl sm:text-2xl !sm:pt-5
                    pl-10 pr-10 font-bold bg-richBlack rounded-2xl 
                    flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: -200 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
        > 
          Good Engineers Write Code, But Great Engineers Never Stop Learning.
        </motion.div>
        
        {/* Image, Map & Name Section */}
        <div className="grid md:grid-cols-2 sm:grids-col-1 gap-4 row-span-2 h-full">
          {/* Left: Profile Image */}
          <motion.div className="flex-1 h-full"
          initial={{ opacity: 0, y: 200 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          >
            <Image 
              src="/images/me.png" 
              width={500} 
              height={500} 
              className="w-full h-full rounded-2xl object-cover" 
              alt="Profile" 
            />
          </motion.div>
          {/* Right: Map & Info Section */}
          <div className="flex flex-col h-full relative">
            {/* Positioned "Based in" Text */}
            <motion.div className="absolute top-2 left-2 text-bone bg-opacity-50 px-2 py-1 ml-10 rounded-md font-bold z-20"
            initial={{ opacity: 0, x: 200 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }} 
            >
              Based in:
            </motion.div>
            {/* Map Component */}
            <motion.div className="w-full h-full rounded-2xl overflow-hidden relative z-10 min-h-[300px]"
            initial={{ opacity: 0, x: 200 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }} 
            >
              <MapWrapper />
            </motion.div>
            {/* Name + Info Section */}
            <motion.div 
              className="flex flex-col items-center w-full bg-tangerine rounded-2xl flex-grow justify-center p-7 mt-5"
              initial={{ opacity: 0, x: 200 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.5 }} 
            >
              <div className="text-lg font-semibold">Dercio Fernandes</div>
              <div className="flex gap-4 mt-2">
                <Link href="https://www.linkedin.com/in/d%C3%A9rcio-fernandes/" target="_blank">
                  <FaLinkedin size={24} className="cursor-pointer hover:text-blue-500" />
                </Link>
                <Link href="https://www.instagram.com/dercio_fernandes/" target="_blank">
                  <FaInstagram size={24} className="cursor-pointer hover:text-pink-500" />
                </Link>
                <Link href="https://www.facebook.com/dercio.fernandes.96/" target="_blank">
                  <FaFacebook size={24} className="cursor-pointer hover:text-blue-700" />
                </Link>
                <Link href="mailto:dercioarmandocc@gmail.com">
                  <FaEnvelope size={24} className="cursor-pointer hover:text-gray-500" />
                </Link>
                <Link href="https://github.com/DercioFernandes" target="_blank">
                  <FaGithub size={24} className="cursor-pointer hover:text-gray-400" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
  
        {/* Stats Section */}
        <motion.div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4"
        initial={{ opacity: 0, x: -200 }} // Start hidden & move up
        animate={{ opacity: 1, x: 0 }} // Fade in & slide to position
        transition={{ duration: 0.5 }} // Smooth transition
        >
          <div className="bg-brightPink p-6 text-center rounded-2xl flex flex-col items-center justify-center">
            <div className="text-4xl font-bold">6+</div>
            <div>Projects</div>
          </div>
          <div className="bg-lapisLazuli p-6 text-center rounded-2xl flex flex-col items-center justify-center">
            <div className="text-4xl font-bold">10+</div>
            <div>Languages/Frameworks</div>
          </div>
          <div className="bg-pigmentGreen p-6 text-center rounded-2xl flex flex-col items-center justify-center">
            <div className="text-4xl font-bold">1+</div>
            <div>Years Experience</div>
          </div>
        </motion.div>
  
        {/* Portolio & About Section */}
        <motion.div className="rounded-2xl bg-richBlack p-4"
        initial={{ opacity: 0, x: -200 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }} 
        >
          <h3 className="text-2xl font-bold mb-4 pl-2 ">My Projects</h3>
          {/* Row Layout for Portolio */}
          <div className="flex flex-row items-center justify-center space-x-4">
            {/* Previous Arrow */}
            {currentImage > 0 && (
              <button onClick={prevImage} className="text-white text-3xl">
                <Image 
                  src={images[currentImage-1]}
                  width={64} 
                  height={64} 
                  alt="Previous"
                />
              </button>
            )}
            {/* Image Display with Animation */}
            <Link href={links[currentImage]} target="_blank">
              <div className="relative group w-[200px] h-[140px]">
                {/* Image */}
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  width={200}
                  height={140}
                  alt="Gallery"
                  className="rounded-lg w-full h-full object-cover cursor-pointer"
                  initial={{ opacity: 0, y: -50 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: 50 }} 
                  transition={{ duration: 0.5 }} 
                />
                
                {/* Hover Text Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {titles[currentImage]}
                </div>
              </div>
            </Link>
            {/* Next Arrow */}
            {currentImage + 1 < images.length && (
              <button onClick={nextImage} className="text-white text-3xl">
                <Image 
                  src={images[currentImage + 1]}
                  width={64} 
                  height={64} 
                  alt="Next"
                />
              </button>
            )}
          </div>
        </motion.div>
        <motion.div className="rounded-2xl bg-richBlack"
        initial={{ opacity: 0, y: 200 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        >
          <h2 className="pt-5 pl-5 pr-5 text-2xl font-bold">About</h2>
          <p className="pt-1 pb-5 pl-5 pr-5 mt-2 text-white text-opacity-70">
            I am a 21yo Software Engineer with a passion for coding. Specialized in Interactive Media, I look forward to any challenge, even if it&apos;s out of my specialization scope. My secret passions are XR, Machine Learning, and Game Development. With more than 6 years studying Software Development, learning about many languages and frameworks, on diverse areas of Software Engineering, I am able to bring you some new young blood full of dedication and love for the area. I look forward to writing the code of the future!
        </p>
        </motion.div>
      </div>
    );
  }