'use client';

import { useState } from 'react';
import Navbar from '../app/components/Navbar';
import AdBanner from './components/AdBanner';

export default function Home() {
  const [diameter, setDiameter] = useState(20); // Initial diameter in mm

  const handleSliderChange = (e: { target: { value: any; }; }) => {
    setDiameter(Number(e.target.value)); // Convert the value to a number
  };

  // Increase the conversion factor for a larger circle
  const diameterInPixels = diameter * 5; // Adjusting the conversion factor to 5 for a larger circle

  // Calculate the circumference of the circle
  const circumference = (Math.PI * diameter).toFixed(2); // Circumference in mm

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> {/* Include the Navbar at the top */}
 
      <div className="flex flex-col items-center justify-center flex-grow p-4 text-center">
        <h1 className="text-2xl md:text-3xl mb-6 font-bold fixed top-16">Ring Size Calculator</h1> {/* Fixed title */}
      
        {/* Card-like div containing the circle */}
        <div className="bg-white shadow-lg rounded-lg p-8 mt-24"> {/* Added card-like background */}
          <div className="relative w-full flex justify-center"> {/* Centered and positioned div */}
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
        
        {/* Display the circumference below the circle */}
        <div className="mt-4">
          <p className="text-sm md:text-lg font-medium">Current Diameter: {diameter} mm</p>
          <p className="text-sm md:text-lg font-medium">Circumference: {circumference} mm</p>
        </div>

        {/* Resized AdBanner positioned above the slider */}
        <div className="w-full max-w-md mx-auto p-4 mt-4">
          <AdBanner dataAdSlot="9406794419" dataAdFormat="auto" dataFullWidthResponsive={true} />
        </div>

        {/* Fixed slider */}
        <div className="fixed bottom-16 w-full max-w-md mx-auto p-4"> {/* Fixed position for the slider */}
          <input
            type="range"
            min="14"  // Set the minimum value to 14 mm
            max="35"  // Set the maximum value to 35 mm
            value={diameter}
            onChange={handleSliderChange}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
