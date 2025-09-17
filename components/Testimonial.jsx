import React, { useEffect, useState } from "react";

const Testimonial = () => {
  const [image, setImage] = useState("");

  // Example API se image fetch
  useEffect(() => {
    // Dummy API (replace with your API endpoint)
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        // API response se image
        setImage(data.results[0].picture.large);
      });
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl overflow-hidden flex flex-col md:flex-row items-center p-8 md:p-12 shadow-lg">
      {/* Left Content */}
      <div className="flex-1 space-y-4">
        <p className="text-gray-300 text-sm">What people said</p>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Love the way they <br /> handle the order.
        </h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Very professional and friendly at the same time. They packed the order
          on schedule and the detail of their wrapping is top notch. One of my
          best experience for buying online items. Surely will come back for
          another purchase.
        </p>

        {/* User Info */}
        <div>
          <h4 className="font-semibold text-pink-400">Samantha William</h4>
          <span className="text-xs text-gray-400">Verified Customer</span>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center mt-6 md:mt-0">
        {image ? (
          <img
            src={image}
            alt="Customer"
            className="rounded-lg w-72 h-72 object-cover shadow-md"
          />
        ) : (
          <div className="w-72 h-72 bg-gray-500 rounded-lg animate-pulse"></div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
