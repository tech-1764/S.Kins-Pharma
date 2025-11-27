"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { detailedProducts } from "@/data/detailedProducts";
import React from "react";

export default function CategoryPage({ params }) {
  const { slug } = React.use(params); // unwrap params promise

  const products = detailedProducts[slug];

  if (!products)
    return <div className="p-10 text-center">Category Not Found</div>;

  return (
    <>
      <Navbar />

      <div className="max-w-[1200px] mx-auto p-6 space-y-12">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#6E0000]">
          {slug.replace("-", " ").toUpperCase()}
        </h1>

        {/* Products List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl border p-6"
            >
              <img
                src={p.imgMain}
                className="w-full h-56 object-contain mb-4"
                alt={p.title}
              />

              <h2 className="text-xl font-semibold text-gray-900 mb-2">{p.title}</h2>

              <p className="text-gray-700 text-sm mb-2">
                <strong>Price:</strong> {p.price}
              </p>

              <p className="text-gray-700 text-sm mb-4">
                <strong>Pack Size:</strong> {p.packSize}
              </p>

              {/* View Details */}
              <button
                onClick={() => window.location.href = `/products/${p.id}`}
                className="bg-[#860000] text-white px-4 py-2 rounded-full hover:bg-[#5a0000]"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
