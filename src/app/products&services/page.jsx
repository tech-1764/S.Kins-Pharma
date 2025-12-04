"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

// ---- IMPORT ALL PRODUCT ARRAYS ----
import {
  // proteinProducts,
  suspensionProducts,
  syrupProducts,
  // thirdPartyProducts,
  // franchiseProducts,
  capsulesProducts,
  // sweetenerProducts
} from "@/data/productsData";
import { useRouter } from "next/navigation";
import { detailedProducts } from "@/data/detailedProducts";

export default function ProductsServices() {
  const pathname = usePathname;
  const router = useRouter();
  const allProducts = Object.values(detailedProducts).flat();
  const [previewImg, setPreviewImg] = useState(null);


  const categories = [
    // {
    //   id: "protein-powder",
    //   title: "Protein Powder",
    //   desc:
    //     "Prominent & leading manufacturer from Nalagarh, we offer Junior Chocolate Protein Powder, ORS Liquid, Sr Protein Powder and more.",
    //   products: proteinProducts,
    // },
    {
      id: "pharma-suspension",
      title: "Pharmaceutical Suspension",
      desc:
        "We offer Lycopene Multivitamins Suspension, Ferrous Ascorbate Suspension, Silymarin Lecithin with L-Ornithine and more.",
      products: suspensionProducts,
    },
    {
      id: "pharma-syrup",
      title: "Pharmaceutical Syrup",
      desc:
        "Our range includes Fungal Diastase & Pepsin Syrup, Recover-VZ, Digefast Pineapple Flavour and Urocital Syrup.",
      products: syrupProducts,
    },
    // {
    //   id: "third-party",
    //   title: "Third Party Manufacturing",
    //   desc:
    //     "Bestowed with vast knowledge, we offer prompt and reliable Third Party Pharma Manufacturing services.",
    //   products: thirdPartyProducts,
    // },
    // {
    //   id: "pcd-franchise",
    //   title: "PCD Pharma Franchise",
    //   desc:
    //     "Emerged as a reputed provider, we render qualitative PCD Pharma Franchise services across India.",
    //   products: franchiseProducts,
    // },
    {
      id: "capsules",
      title: "Pharmaceutical Capsules",
      desc:
        "Manufacturer of Multivitamin Capsules, Soft Gel Capsules and high-quality pharma capsules.",
      products: capsulesProducts,
    },
    // {
    //   id: "sweetener",
    //   title: "Artificial Sweetener",
    //   desc:
    //     "We offer high-quality Neo Sucralose Artificial Sweetener.",
    //   products: sweetenerProducts,
    // },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full py-9 px-4">
        <div className="w-full max-w-[1440px] mx-auto space-y-16">

          <div className="text-center text-left mb-10 px-4 pt-1 md:px-0">
            <h1 className="text-2xl md:text-3xl font-bold text-[#6E0000] mb-4">
              Nutraceutical Oral Liquid And Protein Powder
            </h1>
            <p className="text-gray-700 text-left max-w-[1440px] mx-auto">
              Established as a Sole Proprietorship firm in the year 2017, we "S Kins Pharma" are a leading Manufacturer of a wide range of Pharmaceutical Syrup, Pharmaceutical Suspension, Protein Powder, etc.
            </p>
          </div>

          {categories.map((cat, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-xl border border-[#E8CACA] p-10 bg-[#FFF5F5]"
            >
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-[#6E0000] text-left">
                {cat.title}
              </h2>

              {/* Description */}
              <p className="mt-3 text-gray-700 max-w-4xl text-left">
                {cat.desc}
              </p>

              {/* Products Grid */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                {cat.products.map((p, productIndex) => (
                  <div
                    key={productIndex}
                    className="bg-white rounded-xl border shadow-sm hover:shadow-lg transition p-4 flex flex-col"
                  >
                    {/* Image */}
                    <div className="w-full h-48 flex justify-center items-center">
                      <img
                        src={p.img}
                        alt={p.title}
                        onClick={() => setPreviewImg(p.img)}
                        className="w-full h-full object-contain cursor-pointer hover:scale-105 transition"
                      />
                    </div>


                    {/* Name */}
                    <p
                      onClick={() => router.push(`/products/${cat.id}#${p.id}`)}
                      className="mt-4 text-center font-medium text-gray-900 text-[15px] leading-5 px-1 cursor-pointer hover:text-[#6E0000] transition"
                    >
                      {p.title}
                    </p>

                  </div>
                ))}
              </div>

              {/* View More */}
              {/* <div className="flex justify-end mt-8">
                <button
                  onClick={() => router.push(`/products/${cat.id}`)}
                  className="bg-[#860000] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#5a0000] transition"
                >
                  View More
                </button>
              </div> */}

            </div>
          ))}

        </div>
        {previewImg && (
          <div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-[9999]"
          >
            {/* Close Button */}
            <button
              onClick={() => setPreviewImg(null)}
              className="absolute top-4 right-4 text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition animate-zoomOut"
            >
              <X size={26} />
            </button>

            {/* Image */}
            <img
              src={previewImg}
              className="max-w-[90%] max-h-[90%] object-contain animate-zoomIn"
            />
          </div>
        )}


      </div>

      <Footer />
    </>
  );
}
