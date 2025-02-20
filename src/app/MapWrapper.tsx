"use client"; // Ensure this runs on the client side

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Import MapComponent dynamically (without SSR)
const DynamicMapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-white">
      Loading map...
    </div>
  ),
});

const MapWrapper = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden relative">
      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-richBlack rounded-2xl">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-white border-t-transparent"></div>
        </div>
      )}

      {/* Show the map after loading */}
      {!isLoading && <DynamicMapComponent />}
    </div>
  );
};

export default MapWrapper;
