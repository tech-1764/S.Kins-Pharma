// components/ProductsSection.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  {
    title: "Junior Chocolate Protein Powder",
    img: "/products/pro1.png",
  },
  {
    title: "Energy Drink Cum ORS Liquid",
    img: "/products/pro2.png",
  },
  {
    title: "Chocolate Protein Powder",
    img: "/products/pro3.png",
  },
  {
    title: "Sr Protein Powder",
    img: "/products/pro4.png",
  },
  {
    title: "Strawberry Flavour Protein Powder",
    img: "/products/pro5.png",
  },
];

export default function ProductsSection() {
  return (
<>
    <Navbar />

    <div className="w-full bg-[#FFF8F8] py-14 px-6 md:px-20">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#6E0000]">
        Protein Powder
      </h2>

      {/* Subheading */}
      <p className="mt-3 text-center text-gray-700 max-w-3xl mx-auto">
        Prominent & Leading Manufacturer from Nalagarh, we offer Junior Chocolate 
        Protein Powder, Energy Drink Cum ORS Liquid, Chocolate Protein Powder, Sr 
        Protein Powder and Strawberry Flavour Protein Powder.
      </p>

      {/* View More */}
      <div className="text-center mt-4">
        <button className="text-[#860000] font-semibold underline hover:text-black">
          View More
        </button>
      </div>

      {/* Products Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((p, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border hover:shadow-md transition p-4 flex flex-col"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-40 object-contain mx-auto"
            />
            <p className="mt-4 text-center font-medium text-gray-800 leading-5">
              {p.title}
            </p>
          </div>
        ))}
      </div>
    </div>

    <Footer />
    </>
  );
}
