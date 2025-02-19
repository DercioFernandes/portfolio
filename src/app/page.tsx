"use client";  

import Image from "next/image";
import { useState } from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

const images = ["/images/blue.jpg", "/images/red.jpg", "/images/green.jpg"];

export default function Portfolio() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="grid grid-cols-2 gap-4 p-8">
      {/* Headline & Navbar */}
      <div className="row-span-1 text-4xl pt-20 pl-10 pr-10 font-bold bg-richBlack rounded-2xl"> Engineering The Code You Wish And Making Your Needs Become True. </div>
      
      {/* Image & Name Section */}
      <div className="flex w-full gap-4">
        <div className="flex-1">
          <Image 
            src="/images/pfplinkediv2n.png" 
            width={500} 
            height={500} 
            className="w-full h-auto rounded-2xl object-cover" 
            alt="Profile" 
          />
        </div>
        <div className="flex-1 relative">
          {/* Positioned Text */}
          <div className="absolute top-2 left-2 text-white bg-richBlack bg-opacity-50 px-2 py-1 rounded-md font-bold">
            Based in:
          </div>

          {/* Image */}
          <Image 
            src="/images/location.png" 
            width={500} 
            height={500} 
            className="w-full h-auto rounded-2xl object-cover bg-richBlack h-full" 
            alt="Profile" 
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-brightPink p-6 text-center rounded-2xl">
          <div className="text-2xl font-bold">100+</div>
          <div>Projects</div>
        </div>
        <div className="bg-lapisLazuli p-6 text-center rounded-2xl">
          <div className="text-2xl font-bold">50+</div>
          <div>Clients</div>
        </div>
        <div className="bg-pigmentGreen p-6 text-center rounded-2xl">
          <div className="text-2xl font-bold">5+</div>
          <div>Years Experience</div>
        </div>
      </div>

      {/* Name + Info Section */}
      <div className="flex flex-col items-center w-full bg-richBlack rounded-2xl pt-7 pb-7">
        <div className="text-lg font-semibold">Dercio Fernandes</div>
        
        <div className="flex gap-4 mt-2">
          <FaLinkedin size={24} />
          <FaInstagram size={24} />
          <FaFacebook size={24} />
          <FaEnvelope size={24} />
        </div>
      </div>
      
      {/* Gallery & About Section */}
      <div className="rounded-2xl bg-richBlack flex flex-col items-center p-4">
        <h3 className="text-2xl font-bold mb-4">My Projects</h3>
        
        {/* Row Layout for Gallery */}
        <div className="flex flex-row items-center justify-center space-x-4">
          {/* Previous Arrow */}
          <button onClick={prevImage} className="text-white text-3xl">⬅</button>
          
          {/* Image Display */}
          <Image src={images[currentImage]} width={200} height={150} alt="Gallery" className="rounded-lg" />
          
          {/* Next Arrow */}
          <button onClick={nextImage} className="text-white text-3xl">➡</button>
        </div>
      </div>

      <div className="rounded-2xl bg-richBlack">
        <h2 className="pt-5 pl-5 pr-5 text-2xl font-bold">About</h2>
        <p className="pt-1 pl-5 pr-5 mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
      </div>
    </div>
  );
}
