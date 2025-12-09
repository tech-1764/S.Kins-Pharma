"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { productsMenu } from "@/data/productsMenu";
import { productCategories } from "@/data/productsData";
import { usePathname } from "next/navigation";



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const pathname = usePathname();


    // Convert all products into one array
    const allProducts = Object.values(productCategories)
        .flatMap(category =>
            category.products.map(p => ({
                title: p.title,
                img: p.img,
                category: category.title
            }))
        );

    // Filter logic
    const filteredProducts = allProducts.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase())
    );

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Products & Services", href: "/products&services" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact Us", href: "/contact" },
    ];




    return (
        <div className="overflow: hidden;
overflow-x: hidden;
">
            {/* ===== TOP SECTION (not sticky) ===== */}
            <header className="w-full">

                {/* ===== TOP INFO BAR ===== */}
                <div className="bg-[#F5E6E6] text-[#5A0000] text-sm border-b shadow-md border-[#E4C2C2]">
                    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-2 px-4">
                        <span className="flex items-center gap-1">
                            📞 <strong>Call:</strong>
                            <a href="tel:+919805861822" className="ml-1 hover:underline">
                                +91-98058 61822
                            </a>
                        </span>

                        <span className="hidden md:block text-[#860000] font-semibold tracking-wide">
                            Welcome to S.Kins Pharma
                        </span>

                        <span className="flex items-center gap-1">
                            ✉️ <strong>Email:</strong>
                            <a href="mailto:mkt.skinspharma@gmail.com" className="ml-1 hover:underline">
                                mkt.skinspharma@gmail.com
                            </a>
                        </span>
                    </div>
                </div>

                {/* ===== MIDDLE SECTION ===== */}
                <div className="bg-white">
                    <div className="container mx-auto flex flex-col md:flex-row justify-around items-center py-5 px-4 gap-6">

                        {/* Left - Social Icons */}
                        <div className="hidden sm:flex items-center gap-5 text-[#860000]">
                            <a href="#" className="hover:text-[#6E0000]"><FaFacebookF size={18} /></a>
                            <a href="#" className="hover:text-[#6E0000]"><FaTwitter size={18} /></a>
                            <a href="#" className="hover:text-[#6E0000]"><FaLinkedinIn size={18} /></a>
                        </div>

                        {/* Center Logo */}
                        <Link href="/" className="flex items-center gap-3 text-center">
                            <img src="/assets/logo.jpg" alt="Logo" className="h-16 w-auto rounded-md shadow-sm" />
                            <span className="text-3xl font-bold tracking-wide text-[#860000]">
                                S.Kins Pharma
                            </span>
                        </Link>

                        {/* SEARCH INPUT */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search products or services..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full border border-gray-300 rounded-full py-2.5 pl-4 pr-10 text-sm 
                     focus:outline-none focus:ring-2 focus:ring-[#C9A93A]"
                            />
                            <Search className="absolute right-3 top-2.5 text-gray-500" size={18} />
                        </div>

                        {/* SEARCH RESULTS */}
                        {query && (
                            <div className="mt-3 bg-white rounded-xl border shadow max-h-64 overflow-y-auto">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((product, idx) => (
                                        <Link key={idx} href="/products&services">
                                            <div
                                                key={idx}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b last:border-none"
                                            >
                                                <p className="font-medium text-sm">{product.title}</p>
                                                <p className="text-xs text-gray-500">{product.category}</p>
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="px-4 py-3 text-sm text-gray-500">No products found</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </header>


            {/* ===== MAIN NAV BAR (sticky) ===== */}
            <nav className="sticky top-0 left-0 z-[9999] bg-[#860000]/95 backdrop-blur-md text-gray-100 shadow-lg">
                <div className="container mx-auto flex items-center justify-around h-16 px-4">

                    <div className="hidden md:flex gap-7">

                        {/* Home */}
                        <Link
                            href="/"
                            className="hover:bg-[#6E0000] transition-all h-16 flex px-5 items-center text-[15px] font-bold uppercase"
                        >
                            Home
                        </Link>

                        {/* About */}
                        <div className="relative group">
                            <Link href="/about" className="hover:bg-[#6E0000] transition-all h-16 flex px-5 items-center text-[15px] font-bold uppercase">
                                About Us
                            </Link>

                            <div className="absolute top-16 left-0 bg-white text-black shadow-xl hidden group-hover:block w-[220px] py-4 px-6 z-50">
                                <div className="space-y-3">
                                    <Link href="#" className="block hover:text-[#860000]">Testimonial</Link>
                                    <Link href="#" className="block hover:text-[#860000]">Download Brochure</Link>
                                </div>
                            </div>
                        </div>

                        {/* PRODUCTS & SERVICES Mega Menu */}

                        <div className="relative group">
                            <Link
                                href="/products&services"
                                className="hover:bg-[#6E0000] transition-all h-16 flex px-5 items-center text-[15px] font-bold uppercase">
                                Products & Services
                            </Link>

                            <div className="absolute top-16 left-[-200px] w-[1050px] bg-white text-black shadow-xl hidden group-hover:flex p-8 z-70">

                                <div className="grid grid-cols-4 gap-10 text-sm leading-6">

                                    {productsMenu.map((section, index) => (
                                        <div key={index} className="mb-6">

                                            <p className="font-bold text-[17px] mb-3">{section.title}</p>

                                            <div className="flex flex-col gap-2">
                                                {section.items.map((item, i) => (
                                                    <Link key={i} href="/products&services" className="hover:text-[#860000]">
                                                        {item}
                                                    </Link>
                                                ))}
                                            </div>

                                            {section.more && (
                                                <Link
                                                    href="/products&services"
                                                    className="block mt-1 text-[#860000] underline"
                                                >
                                                    ...more
                                                </Link>
                                            )}
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>


                        {/* Gallery */}
                        <Link
                            href="/gallery"
                            className="hover:bg-[#6E0000] transition-all h-16 flex px-5 items-center text-[15px] font-bold uppercase"
                        >
                            Gallery
                        </Link>

                        {/* Contact */}
                        <Link
                            href="/contact"
                            className="hover:bg-[#6E0000] transition-all h-16 flex px-5 items-center text-[15px] font-bold uppercase"
                        >
                            Contact Us
                        </Link>

                    </div>
                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white text-right"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-[#6E0000] py-4 px-4 space-y-4">

                        {/* Home */}
                        <Link
                            href="/"
                            className="block text-white py-2 border-b border-[#7a0000] text-[16px] uppercase"
                        >
                            Home
                        </Link>

                        {/* About Us */}
                        <Link
                            href="/about"
                            className="block text-white py-2 border-b border-[#7a0000] text-[16px] uppercase"
                        >
                            About Us
                        </Link>

                        {/* Products & Services (Accordion Style) */}
                        <details className="text-white">
                            <summary className="cursor-pointer py-2 text-[16px] uppercase">
                                Products & Services
                            </summary>

                            <div className="mt-2 bg-[#7a0000] rounded-md p-3 space-y-2">

                                {productsMenu.map((section, index) => (
                                    <div key={index}>
                                        <p className="font-semibold text-[15px] mb-1">{section.title}</p>

                                        <div className="pl-3 space-y-1">
                                            {section.items.map((item, i) => (
                                                <p key={i} className="text-sm opacity-90">{item}</p>
                                            ))}
                                        </div>

                                        {section.more && (
                                            <p className="text-sm text-yellow-300 underline mt-1">...more</p>
                                        )}

                                    </div>
                                ))}

                            </div>
                        </details>

                        {/* Gallery */}
                        <Link
                            href="/gallery"
                            className="block text-white py-2 border-b border-[#7a0000] text-[16px] uppercase"
                        >
                            Gallery
                        </Link>

                        {/* Contact */}
                        <Link
                            href="/contact"
                            className="block text-white py-2 border-b border-[#7a0000] text-[16px] uppercase"
                        >
                            Contact Us
                        </Link>

                    </div>
                )}
            </nav>
        </div>
    )
}
