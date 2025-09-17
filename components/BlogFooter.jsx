// import React, { useEffect, useState } from "react";

// const BlogPage = () => {
//   const [product, setProduct] = useState(null);
//   const [categories, setCategories] = useState([]);

//   // Fetch single product
//   useEffect(() => {
//     fetch("https://api.escuelajs.co/api/v1/products/1") // product with ID=1
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data);
//       })
//       .catch((err) => console.error("Error fetching product:", err));
//   }, []);

//   // Fetch categories
//   useEffect(() => {
//     fetch("https://api.escuelajs.co/api/v1/categories")
//       .then((res) => res.json())
//       .then((data) => {
//         setCategories(data);
//       })
//       .catch((err) => console.error("Error fetching categories:", err));
//   }, []);

//   return (
//     <div className="w-full">
//       {/* Blog Section */}
//       <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
//         {/* Left Image */}
//         <div>
//           {product ? (
//             <img
//               src={product.images[0]}
//               alt={product.title}
//               className="rounded-lg shadow-md w-full object-cover"
//             />
//           ) : (
//             <div className="w-full h-64 bg-gray-300 animate-pulse rounded-lg"></div>
//           )}
//         </div>

//         {/* Right Content */}
//         <div className="space-y-4">
//           <p className="text-sm text-gray-500 font-medium">From The Blog</p>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
//             {product ? product.title : "Loading..."}
//           </h2>
//           <p className="text-gray-600 text-base leading-relaxed">
//             {product
//               ? product.description
//               : "Please wait while we load the blog content..."}
//           </p>
//           <button className="px-6 py-2 border border-gray-800 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300">
//             READ MORE
//           </button>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="bg-black text-gray-300 py-12 mt-8">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">
//           {/* Column 1 */}
//           <div>
//             <h3 className="text-white font-bold text-lg mb-4">ECOMMERCE</h3>
//             <p className="text-sm mb-4">
//               Subscribe to get 10% off your first order and stay updated on our
//               latest collection.
//             </p>
//             <div className="flex gap-2">
//               <input
//                 type="email"
//                 placeholder="Type your email address"
//                 className="flex-1 px-3 py-2 rounded-md text-black text-sm focus:outline-none"
//               />
//               <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 transition">
//                 Submit
//               </button>
//             </div>
//           </div>

//           {/* Column 2 */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">POPULAR</h4>
//             <ul className="space-y-2 text-sm">
//               <li>Shop</li>
//               <li>Men</li>
//               <li>Women</li>
//               <li>Accessories</li>
//             </ul>
//           </div>

//           {/* Column 3 (Dynamic Categories from API) */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">MENU</h4>
//             <ul className="space-y-2 text-sm">
//               {categories.length > 0 ? (
//                 categories.map((cat) => (
//                   <li key={cat.id} className="hover:text-white cursor-pointer">
//                     {cat.name}
//                   </li>
//                 ))
//               ) : (
//                 <li>Loading categories...</li>
//               )}
//             </ul>
//           </div>

//           {/* Column 4 */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">OTHERS</h4>
//             <ul className="space-y-2 text-sm">
//               <li>Tracking Package</li>
//               <li>About Us</li>
//               <li>Contact Us</li>
//               <li>Terms and Conditions</li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default BlogPage;

import React, { useEffect, useState } from "react";
import { fetchCategories, fetchProducts } from "../lib/api"; // adjust path if needed

const BlogFooterPage = () => {
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);

  // Fetch first product
  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProducts(0, 1); // sirf ek product laa rahe hain
        setProduct(data[0]); // first product
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    getProduct();
  }, []);

  // Fetch categories
  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    getCategories();
  }, []);

  return (
    <div className="w-full">
      {/* Blog Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Image */}
        <div>
          {product ? (
            <img
              src={product?.images?.[0] || "https://via.placeholder.com/400x300?text=No+Image"}
              alt={product?.title || "Product"}
              className="rounded-lg shadow-md w-full object-cover"
            />
          ) : (
            <div className="w-full h-64 bg-gray-300 animate-pulse rounded-lg"></div>
          )}
        </div>

        {/* Right Content */}
        <div className="space-y-4">
          <p className="text-sm text-gray-500 font-medium">From The Blog</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            {product ? product.title : "Loading..."}
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            {product ? product.description : "Please wait while we load the blog content..."}
          </p>
          <button className="px-6 py-2 border border-gray-800 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300">
            READ MORE
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-gray-300 py-12 mt-8">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">ECOMMERCE</h3>
            <p className="text-sm mb-4">
              Subscribe to get 10% off your first order and stay updated on our latest collection.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Type your email address"
                className="flex-1 px-3 py-2 rounded-md text-black text-sm focus:outline-none"
              />
              <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 transition">
                Submit
              </button>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-semibold mb-4">POPULAR</h4>
            <ul className="space-y-2 text-sm">
              <li>Shop</li>
              <li>Men</li>
              <li>Women</li>
              <li>Accessories</li>
            </ul>
          </div>

          {/* Column 3 (Dynamic Categories) */}
          <div>
            <h4 className="text-white font-semibold mb-4">MENU</h4>
            <ul className="space-y-2 text-sm">
              {categories.length > 0 ? (
                categories.map((cat) => (
                  <li key={cat.id} className="hover:text-white cursor-pointer">
                    {cat.name}
                  </li>
                ))
              ) : (
                <li>Loading categories...</li>
              )}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white font-semibold mb-4">OTHERS</h4>
            <ul className="space-y-2 text-sm">
              <li>Tracking Package</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogFooterPage;

