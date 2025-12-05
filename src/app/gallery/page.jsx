"use client";

import Image from "next/image";
import { productCategories } from "@/data/productsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  const teamPics = [
    {
      "title": "Owner of S.Kins Pharma",
      "img": "/team/1_1.jpeg"
    },
    {
      "title": "Our wide range of products",
      "img": "/team/1.jpeg"
    },
    {
      "title": "Team working in company",
      "img": "/team/2.jpeg"
    },
    {
      "title": "Team working in company",
      "img": "/team/3.jpeg"
    },
    {
      "title": "Team working in company",
      "img": "/team/4.jpeg"
    },
  ]

  // Combine all product arrays into a single list
  const allImages = Object.values(productCategories)
    .flatMap((cat) =>
      cat.products.map((p) => ({
        title: p.title,
        img: p.img,
        category: cat.title,
      }))
    );

  return (
    <>
      <Navbar />

      <div className="px-6 md:px-10 lg:px-20 py-7">
        {/* Title + Subtitle */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#800000]">
            Our Product Gallery
          </h1>
          <p className="text-gray-600 mt-2">
            Explore our wide range of Pharmaceutical Products with high-quality manufacturing.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {
            teamPics.map((item, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-xl border bg-white shadow-md"
              >
                {/* IMAGE */}
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* HOVER TITLE OVERLAY */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full 
                            group-hover:translate-y-0 transition-all duration-500 
                            bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                  {/* <p className="text-gray-300 text-xs">{item.category}</p> */}
                </div>
              </div>
            )
          )
        }
      
       
      {allImages.map((item, idx) => (
        <div
          key={idx}
          className="relative group overflow-hidden rounded-xl border bg-white shadow-md"
        >
          {/* IMAGE */}
          <Image
            src={item.img}
            alt={item.title}
            width={400}
            height={400}
            className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* HOVER TITLE OVERLAY */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full 
                            group-hover:translate-y-0 transition-all duration-500 
                            bg-gradient-to-t from-black/80 to-transparent p-3">
            <p className="text-white font-semibold text-sm">{item.title}</p>
            <p className="text-gray-300 text-xs">{item.category}</p>
          </div>
        </div>
      ))}
    </div >
      </div >

    <Footer />
    </>
  );
}
