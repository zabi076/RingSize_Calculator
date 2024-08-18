'use client';

import { useState } from 'react';
import Navbar from '../app/components/Navbar';

export default function Home() {
  const [diameter, setDiameter] = useState(20); // Initial diameter in mm

  const handleSliderChange = (e: { target: { value: any; }; }) => {
    setDiameter(Number(e.target.value)); // Convert the value to a number
  };

  // Increase the conversion factor for a larger circle
  const diameterInPixels = diameter * 5; // Adjusting the conversion factor to 5 for a larger circle

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> {/* Include the Navbar at the top */}

      <div className="flex flex-col items-center justify-center flex-grow p-4 text-center">
        <h1 className="text-2xl md:text-3xl mb-6 font-bold">Ring Size Calculator</h1>

        <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-md mx-auto">
          {/* Circle with only a border */}
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

          {/* Slider */}
          <input
            type="range"
            min="18"  // Set the minimum value to 18 mm
            max="40"  // Set the maximum value to 40 mm
            value={diameter}
            onChange={handleSliderChange}
            className="w-full"
          />
        </div>

        <div className="mt-4">
          <p className="text-sm md:text-lg font-medium">Current Diameter: {diameter} mm</p>
        </div>
      </div>
    </div>
  );
}
