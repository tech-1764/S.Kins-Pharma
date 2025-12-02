"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import { detailedProducts, categoryDescriptions } from "@/data/detailedProducts";
import React from "react";

export default function CategoryDetailsPage({ params }) {
  const { slug } = React.use(params); // unwrap params

  const products = detailedProducts[slug];

  if (!products)
    return <div className="p-10 text-center">Category Not Found</div>;

  // Convert slug → "protein powder" (nice UI)
  const categoryName = slug.replace(/-/g, " ");

  return (
    <>
      <Navbar />

      <div className="max-w-[1200px] mx-auto p-6 space-y-7">

        {/* CATEGORY HEADING */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#6E0000]">
          {categoryName.toUpperCase()}
        </h1>

        {/* DYNAMIC CATEGORY DESCRIPTION */}
        <p className="text-gray-700 text-[18px] mb-6">
          {categoryDescriptions[slug] || categoryDescriptions["default"]}
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto p-6 space-y-12">
        {/* PRODUCT CARDS */}
        {products.map((p) => (
          <div
            id={p.id}
            key={p.id}
            className="bg-[#FFF5F5] rounded-2xl border shadow-md p-8"
          >
            {/* CLICKABLE TITLE */}
            <a
              href={`#${p.id}`}
              className="text-2xl font-bold text-[#6E0000] hover:underline"
            >
              {p.title}
            </a>

            {/* GRID */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* IMAGE GALLERY */}
              <ImageGallery images={p.images} alt={p.title} />

              {/* RIGHT DETAILS SECTION */}
              <div className="space-y-4 text-gray-700 text-[15px]">

                {/* PRICE SEPARATE */}
                <p className="text-xl font-semibold text-[#6E0000]">
                  Price: <span className="font-normal">{p.price}</span>
                </p>

                {/* AUTO-GENERATED DETAILS */}
                {/* AUTO-GENERATED DETAILS — NOW IN TABLE */}
                <div className="overflow-x-auto mt-0">
                  <table className="min-w-full border border-gray-300 rounded-lg">
                    <tbody>
                      {Object.entries(p)
                        .filter(([key, value]) =>
                          ![
                            "id",
                            "title",
                            "price",
                            "images",
                            "otherDetails",
                            "description",
                            "cta"
                          ].includes(key)
                        )
                        .map(([key, value]) => (
                          <tr key={key} className="border-collapse border border-gray-300">
                            <td className="py-2 px-3 font-semibold text-gray-800 w-1/3 border border-gray-300 bg-gray-400">
                              {key
                                .replace(/([A-Z])/g, " $1")
                                .replace("-", " ")
                                .toUpperCase()}
                            </td>
                            <td className="py-2 px-3 text-gray-700 bold bg-gray-350">
                              {value}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                {/* DESCRIPTION */}
                {p.description && (
                  <p className="mt-2 text-gray-700">{p.description}</p>
                )}

                {/* OTHER DETAILS LIST */}
                {p.otherDetails && (
                  <div className="mt-3">
                    <h3 className="text-lg font-semibold mb-2">More Details:</h3>
                    <ul className="list-disc ml-6 space-y-1">
                      {p.otherDetails.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA (Yes I am interested) */}
                <button className="mt-4 bg-[#6E0000] text-white px-4 py-2 rounded-lg">
                  {p.cta}
                </button>
              </div>


            </div>
          </div>
        ))}

      </div>

      <Footer />
    </>
  );
}
