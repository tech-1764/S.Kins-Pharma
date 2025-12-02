"use client";

import { useState } from "react";

export default function ImageGallery({ images, alt }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // If no images or empty array, show placeholder
  if (!images || images.length === 0) {
    return (
      <div className="w-full h-64 flex justify-center items-center bg-gray-100 rounded-lg">
        <img
          src="/assets/placeholder.png"
          alt={alt}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Main Image */}
      <div className="w-full h-64 flex justify-center items-center bg-white rounded-lg border">
        <img
          src={images[selectedIndex]}
          alt={alt}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Thumbnails - only show if more than 1 image */}
      {images.length > 1 && (
        <div className="flex gap-2 justify-start">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-16 h-16 border-2 rounded-md overflow-hidden ${
                selectedIndex === index
                  ? "border-[#6E0000]"
                  : "border-gray-300 hover:border-gray-500"
              }`}
            >
              <img
                src={img}
                alt={`${alt} ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
