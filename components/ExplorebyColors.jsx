// import React from "react";

// const ExploreColors = () => {
//   const colors = [
//     { name: "RED PASTEL", color: "bg-red-400" },
//     { name: "LIME GREEN", color: "bg-lime-400" },
//     { name: "NAVY BLUE", color: "bg-blue-900" },
//     { name: "CLEAN WHITE", color: "bg-white border" },
//     { name: "BLUE SKY", color: "bg-sky-400" },
//     { name: "PURPLE", color: "bg-purple-500" },
//     { name: "PINK", color: "bg-pink-400" },
//     { name: "YELLOW", color: "bg-yellow-400" },
//     { name: "DARK GREEN", color: "bg-green-700" },
//   ];

//   return (
//     <div className="w-full border border-blue-100 rounded-md p-6 flex flex-col gap-4">
//       {/* Title */}
//       <h2 className="text-2xl font-semibold text-gray-800">Explore by Colors</h2>

//       {/* Colors Grid */}
//       <div className="flex flex-wrap gap-3">
//         {colors.map((item, index) => (
//           <button
//             key={index}
//             className="flex items-center gap-2 border border-gray-400 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200"
//           >
//             <span className={`w-4 h-4 rounded-full ${item.color}`} />
//             {item.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExploreColors;


import React, { useState, useEffect } from "react";

const ExploreColors = () => {
  const colors = [
    { name: "SOFT RED", value: "#f8d7da" },
    { name: "MINT GREEN", value: "#d1f7d6" },
    { name: "LIGHT NAVY", value: "#d6e4f0" },
    { name: "OFF WHITE", value: "#f8f9fa" },
    { name: "SKY MIST", value: "#d7f3f9" },
    { name: "LAVENDER", value: "#e6e6fa" },
    { name: "BLUSH PINK", value: "#fde2e4" },
    { name: "PALE YELLOW", value: "#fff9db" },
    { name: "SAGE GREEN", value: "#d8e2dc" },
  ];

  const [bgColor, setBgColor] = useState("#f8f9fa");

  // Jab bhi bgColor change hoga, body background update hoga
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  return (
    <div
      className="w-full border border-gray-200 rounded-md p-6 flex flex-col gap-4 shadow-sm transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-700">Explore by Colors</h2>

      {/* Colors Grid */}
      <div className="flex flex-wrap gap-3">
        {colors.map((item, index) => (
          <button
            key={index}
            onClick={() => setBgColor(item.value)}
            className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 bg-white/70"
          >
            <span
              className="w-4 h-4 rounded-full border"
              style={{ backgroundColor: item.value }}
            />
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExploreColors;


