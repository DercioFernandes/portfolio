"use client";  

import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import IntroScreen from "./IntroScreen";
import Portfolio from "./portfolio";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2200); // 4 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {showIntro ? <IntroScreen /> : <Portfolio />}
    </div>
  );
}
