// /pages/StandardSize.js
'use client';

import Navbar from '../components/Navbar'; // Adjust the path if needed

export default function StandardSizeChart() {
  return (
    <>
      <Navbar /> {/* Include the Navbar at the top */}
      
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl md:text-3xl mb-6 font-bold">Standard Ring Size Chart</h1>
        
        <table className="table-auto w-full max-w-md mx-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Ring Size</th>
              <th className="border border-gray-300 px-4 py-2">Diameter (mm)</th>
              <th className="border border-gray-300 px-4 py-2">Diameter (inches)</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 24 }, (_, i) => i + 10).map(size => (
              <tr key={size}>
                <td className="border border-gray-300 px-4 py-2">{size}</td>
                <td className="border border-gray-300 px-4 py-2">{(size + 9.8).toFixed(1)}</td>
                <td className="border border-gray-300 px-4 py-2">{((size + 9.8) / 25.4).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
