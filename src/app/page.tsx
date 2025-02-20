"use client";  

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { motion } from "framer-motion";
import MapWrapper from "./MapWrapper";

const images = ["/images/XRDev.png", "/images/NormalWebsite1.png", "/images/GameDev.png"];

const links = [
  "https://github.com/XRD-Group-11/VR-CS-1.6",
  "https://github.com/DercioFernandes/VIA-Marketplace",
  "https://github.com/DercioFernandes/Kiseki-Fighters"
];

const position: LatLngExpression = [55.857671413317064, 9.851414821036256]; // Explicitly typed

 
export default function Portfolio() {

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="grid grid-cols-2 gap-4 p-8 h-screen overflow-hidden">
      {/* Headline & Navbar */}
      <motion.div className="row-span-1 text-4xl  pl-10 pr-10 font-bold bg-richBlack rounded-2xl flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: -200 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
      > 
        Good Engineers Write Code, But Great Engineers Never Stop Learning. 
      </motion.div>
      
      {/* Image & Name Section */}
      <div className="grid grid-cols-2 gap-4 row-span-2 h-full">
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

        {/* Right: Name & Info Section */}
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
          <motion.div className="w-full h-full rounded-2xl overflow-hidden relative z-10"
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
              <FaLinkedin size={24} />
              <FaInstagram size={24} />
              <FaFacebook size={24} />
              <FaEnvelope size={24} />
            </div>
          </motion.div>
        </div>

      </div>



      {/* Stats Section */}
      <motion.div className="grid grid-cols-3 gap-4"
      initial={{ opacity: 0, x: -200 }} // Start hidden & move up
      animate={{ opacity: 1, x: 0 }} // Fade in & slide to position
      transition={{ duration: 0.5 }} // Smooth transition
      >
        <div className="bg-brightPink p-6 text-center rounded-2xl flex flex-col items-center justify-center">
          <div className="text-4xl font-bold">15+</div>
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

      {/* Gallery & About Section */}
      <motion.div className="rounded-2xl bg-richBlack p-4"
      initial={{ opacity: 0, x: -200 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.5 }} 
      >
        <h3 className="text-2xl font-bold mb-4 pl-2 ">My Projects</h3>
        
        {/* Row Layout for Gallery */}
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
            <motion.img
              key={currentImage} // Key forces re-render on change
              src={images[currentImage]}
              width={200}
              height={140}
              alt="Gallery"
              className="rounded-lg w-[200px] h-[140px] object-cover cursor-pointer"
              initial={{ opacity: 0, y: -50 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: 50 }} 
              transition={{ duration: 0.5 }} 
            />
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
        <p className="pt-1 pb-5 pl-5 pr-5 mt-2 text-white text-opacity-70">I am a Software Engineer with a passion for coding. Specialized in Interactive Media, I look forward to any challenge, even if it's out of my specialization scope. My secret passion's are XR, Machine Learning and Game Development. With more than 6 years studying Software Development, learning about many languages and frameworks, on diverse areas of Software Engineering, I am able to bring you some new young blood full of dedication and love for the area. I look forward to write the code of the future!</p>
      </motion.div>
      
    </div>
  );
}
