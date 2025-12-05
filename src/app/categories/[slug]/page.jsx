"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { productCategories } from "@/data/productsData";
import React from "react";

export default function CategoryPage({ params }) {
  const { slug } = React.use(params);
  const categoryData = productCategories[slug];

  if (!categoryData) {
    return (
      <>
        <Navbar />
        <div className="max-w-6xl mx-auto p-10 text-center">
          <h1 className="text-3xl font-bold text-[#6E0000]">Category Not Found</h1>
          <Link href="/products&services">
            <button className="mt-6 bg-[#860000] text-white px-6 py-3 rounded-full hover:bg-[#5a0000] transition">
              Back to Products & Services
            </button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="w-full py-16 px-4">
        <div className="w-full max-w-[1400px] mx-auto">

          {/* Category Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#6E0000] mb-4">
              {categoryData.title}
            </h1>
            <p className="text-gray-700 text-lg">
              {categoryData.description}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {categoryData.products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border shadow-sm hover:shadow-lg transition p-4 flex flex-col"
              >
                {/* Image */}
                <div className="w-full h-48 flex justify-center items-center">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Name */}
                <p className="mt-4 text-center font-medium text-gray-900 text-[15px] leading-5 px-1">
                  {product.title}
                </p>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="flex justify-center mt-12">
            <Link href="/products&services">
              <button className="bg-[#860000] text-white px-8 py-3 rounded-full shadow-md hover:bg-[#5a0000] transition">
                Back to All Categories
              </button>
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
