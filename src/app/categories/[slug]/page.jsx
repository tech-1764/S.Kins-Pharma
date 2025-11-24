// import { categories } from "@/data/categories";
// import Link from "next/link";

// export default function CategoryPage({ params }) {
//   const data = categories[params.slug];

//   if (!data) return <h1>Not Found</h1>;

//   return (
//     <div className="p-10 max-w-6xl mx-auto">
//       <h2 className="text-3xl font-bold text-[#6E0000]">{data.title}</h2>
//       <p className="mt-2 text-gray-700">{data.description}</p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
//         {data.products.map((p) => (
//           <Link key={p.slug} href={`/products/${p.slug}`}>
//             <div className="p-4 bg-white border rounded-xl shadow hover:shadow-lg transition">
//               <img src={p.img} className="h-40 w-full object-contain" />
//               <p className="mt-3 text-center font-medium">{p.title}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
