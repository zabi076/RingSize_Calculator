'use client';

import { useState, useEffect } from 'react';
import Navbar from '../app/components/Navbar';
import AdBanner from './components/AdBanner';

export default function Home() {
  const [diameter, setDiameter] = useState(20); // Initial diameter in mm
  const [adLoaded, setAdLoaded] = useState(false);

  const handleSliderChange = (e: { target: { value: any; }; }) => {
    setDiameter(Number(e.target.value)); // Update diameter state with slider value
  };

  useEffect(() => {
    // Delay loading the ad until the component is fully mounted
    const timer = setTimeout(() => {
      setAdLoaded(true);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  // Increase the conversion factor for a larger circle
  const diameterInPixels = diameter * 5; // Adjusting the conversion factor to 5 for a larger circle

  // Calculate the circumference of the circle
  const circumference = (Math.PI * diameter).toFixed(2); // Circumference in mm

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> {/* Include the Navbar at the top */}

      <div className="flex flex-grow p-4">
        {/* Left Ad */}
        <div className="hidden lg:flex justify-center items-center w-1/6 ">
          {adLoaded && (
            <AdBanner dataAdSlot="9406794419" dataAdFormat="auto" dataFullWidthResponsive={true} />
          )}
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center flex-grow lg:w-4/6 p-4">
          <h1 className="text-2xl md:text-3xl mb-6 font-bold top-16">Ring Size Calculator</h1> {/* Fixed title */}

          {/* Card-like div containing the circle */}
          <div className="bg-white shadow-lg rounded-lg p-8 mt-24">
            {/* Circle */}
            <div className="relative flex justify-center items-center" style={{ height: `${diameterInPixels}px` }}>
              <div
                className="border-4 border-blue-500 rounded-full flex items-center justify-center"
                style={{
                  width: `${diameterInPixels}px`,
                  height: `${diameterInPixels}px`,
                }}
              >
                {/* Diameter label inside the circle */}
                <p className="text-sm md:text-lg font-medium text-gray-700">
                  {diameter.toFixed(2)} mm
                </p>
              </div>
            </div>
          </div>

          {/* Circumference */}
          <div className="mt-4 text-center">
            <p className="text-sm md:text-lg font-medium">Current Diameter: {diameter} mm</p>
            <p className="text-sm md:text-lg font-medium">Circumference: {circumference} mm</p>
          </div>
        </div>

        {/* Right Ad */}
        <div className="hidden lg:flex justify-center items-center w-1/6 ">
          {adLoaded && (
            <AdBanner dataAdSlot="9406794419" dataAdFormat="auto" dataFullWidthResponsive={true} />
          )}
        </div>
      </div>

      {/* Slider */}
      <div className=" bottom-24 w-full max-w-md mx-auto p-4">
        <input
          type="range"
          min="14"
          max="35"
          value={diameter}
          onChange={handleSliderChange}
          className="w-full"
        />
      </div>

      {/* Ad below slider for mobile */}
      <div className="lg:hidden flex justify-center items-center mt-4 bg-black">
        {adLoaded && (
          <AdBanner dataAdSlot="9406794419" dataAdFormat="auto" dataFullWidthResponsive={true} />
        )}
      </div>
    </div>
  );
}
