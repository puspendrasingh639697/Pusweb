


// import React from "react";

// const brands = [
//   { name: "Asons", color: "text-green-600" },
//   { name: "Bestin", color: "text-blue-800 italic" },
//   { name: "Rupeedot", color: "text-[#e11d48]" },
//   { name: "Agni Devices", color: "text-[#0057b7]" },
//   { name: "Ankur Electrical", color: "text-red-600" },
//   { name: "Diamore", color: "text-[#89c440]" }
// ];

// // -------- STATS DATA --------
// const stats = [
//   { value: "24+", label: "Years In AI & Engineering" },
//   { value: "50+", label: "AI Models Deployed" },
//   { value: "30+", label: "Enterprise AI Use Cases" },
//   { value: "99.9%", label: "AI System Uptime" },
//   { value: "100%", label: "Secure Data Ownership" },
// ];

// export default function BrandsAndStats() {
//   return (
//     <div className="w-full">

//       {/* -------- HEADING -------- */}
//       <div className="text-center py-8 bg-white">
//         <h1 className="text-3xl md:text-4xl font-bold text-black">
//           Trusted by Leading Brands
//         </h1>
//         <p className="text-black mt-2">
//           We collaborate with top companies across industries
//         </p>
//       </div>

//       {/* -------- BRANDS MARQUEE -------- */}
//       <div className="overflow-hidden w-full bg-white py-6 border-b">
//         <div className="flex animate-marquee whitespace-nowrap gap-12">
//           {[...brands, ...brands].map((brand, index) => (
//             <span
//               key={index}
//               className={`text-lg md:text-xl font-semibold ${brand.color}`}
//             >
//               {brand.name}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* -------- STATS SECTION -------- */}
//       <section className="py-14 bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] ">
//         <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          
//           {stats.map((item, index) => (
//             <div
//               key={index}
//               className="p-4 bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]  backdrop-blur-md rounded-xl shadow-md hover:scale-105 transition duration-300"
//             >
//               <h2 className="text-2xl md:text-3xl font-bold text-white">
//                 {item.value}
//               </h2>
//               <p className="text-sm mt-2 text-white">
//                 {item.label}
//               </p>
//             </div>
//           ))}

//         </div>
//       </section>

//     </div>
//   );
// }



import React from "react";

// -------- BRANDS DATA --------
const brands = [
  { name: "Asons", color: "text-green-600" },
  { name: "Bestin", color: "text-blue-800 italic" },
  { name: "Rupeedot", color: "text-[#e11d48]" },
  { name: "Agni Devices", color: "text-[#0057b7]" },
  { name: "Ankur Electrical", color: "text-red-600" },
  { name: "Diamore", color: "text-[#89c440]" }
];

// -------- STATS DATA --------
const stats = [
  { value: "24+", label: "Years In AI & Engineering" },
  { value: "50+", label: "AI Models Deployed" },
  { value: "30+", label: "Enterprise AI Use Cases" },
  { value: "99.9%", label: "AI System Uptime" },
  { value: "100%", label: "Secure Data Ownership" },
];

export default function BrandsAndStats() {
  return (
    <div className="w-full">

      {/* -------- HEADING -------- */}
      <div className="text-center py-8 bg-white">
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          Trusted by Leading Brands
        </h1>
        <p className="text-black mt-2">
          We collaborate with top companies across industries
        </p>
      </div>

      {/* -------- BRANDS MARQUEE (SMOOTH INFINITE) -------- */}
      <div className="overflow-hidden w-full bg-white py-6 border-b">
        <div className="flex w-max animate-marquee">
          {[...brands, ...brands].map((brand, index) => (
            <span
              key={index}
              className={`mx-8 text-lg md:text-xl font-semibold ${brand.color}`}
            >
              {brand.name}
            </span>
          ))}
        </div>
      </div>

      {/* -------- STATS SECTION -------- */}
      <section className="py-14 bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)]">
        
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          
          {stats.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-md hover:scale-105 transition duration-300"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {item.value}
              </h2>
              <p className="text-sm mt-2 text-white">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}