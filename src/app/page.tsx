'use client';

import { useState } from 'react';
import Navbar from '../app/components/Navbar'; // Import the Navbar component

export default function Home() {
  const [diameter, setDiameter] = useState(20); // Initial diameter in mm

  const handleSliderChange = (e: { target: { value: any; }; }) => {
    setDiameter(Number(e.target.value)); // Convert the value to a number
  };

  // Convert diameter from mm to pixels (1 mm = ~3.78 pixels, adjust as necessary)
  const diameterInPixels = diameter * 3.78;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> {/* Include the Navbar at the top */}
      
      <div className="flex flex-col items-center justify-center flex-grow p-4 text-center">
        <h1 className="text-2xl md:text-3xl mb-6 font-bold">Ring Size Calculator</h1>
        
        <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-md mx-auto">
          {/* Circle with only a border */}
          <div
            className="border-4 border-blue-500 rounded-full"
            style={{
              width: `${diameterInPixels}px`,
              height: `${diameterInPixels}px`,
            }}
          ></div>

          {/* Slider */}
          <input
            type="range"
            min="10"  // Set the minimum value based on the table
            max="33"  // Set the maximum value based on the table
            value={diameter}
            onChange={handleSliderChange}
            className="w-full"
          />
        </div>

        <div className="mt-4">
          <p className="text-lg font-medium">Current Diameter: {diameter} mm</p>
        </div>
      </div>
    </div>
  );
}
