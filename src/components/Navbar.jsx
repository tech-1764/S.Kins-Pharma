"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { productsMenu } from "@/data/productsMenu";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Products & Services", href: "/products&services" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact Us", href: "/contact" },
    ];


    return (
        <header className="w-full top-0 left-0 z-50">

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

                    {/* Right Search */}
                    <div className="relative w-full md:w-72">
                        <input
                            type="text"
                            placeholder="Search products or services..."
                            className="w-full border border-gray-300 rounded-full py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A93A]"
                        />
                        <Search className="absolute right-3 top-2.5 text-gray-500" size={18} />
                    </div>

                </div>
            </div>

            {/* ===== MAIN NAV BAR ===== */}
            <nav className="bg-[#860000] text-gray-100 sticky top-0 shadow-xl">
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
                            <button className="hover:bg-[#6E0000] transition-all h-16 flex px-5 items-center text-[15px] font-bold uppercase">
                                About Us
                            </button>

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

                                            <p className="font-bold text-[17px] mb-2">{section.title}</p>

                                            <div className="flex flex-col gap-1">
                                                {section.items.map((item, i) => (
                                                    <Link key={i} href="#" className="hover:text-[#860000]">
                                                        {item}
                                                    </Link>
                                                ))}
                                            </div>

                                            {section.more && (
                                                <Link
                                                    href="#"
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
                    <div className="md:hidden bg-[#6E0000] py-3">
                        <div className="flex flex-col items-center gap-3">
                            {/* Desktop Menu */}
                            <div className="hidden md:flex gap-7">

                                {/* Home */}
                                <Link
                                    href="/"
                                    className="hover:bg-[#6E0000] transition-all h-16 flex px-5 items-center text-[15px] font-bold uppercase"
                                >
                                    Home
                                </Link>

                                {/* About */}
                                <Link
                                    href="/about"
                                    className="hover:bg-[#6E0000] transition-all h-16 flex px-5 items-center text-[15px] font-bold uppercase"
                                >
                                    About
                                </Link>

                                {/* PRODUCTS & SERVICES Mega Menu */}
                                <div className="relative group">
                                    <button className="hover:bg-[#6E0000] transition-all h-16 flex px-5 items-center text-[15px] font-bold uppercase">
                                        Products & Services
                                    </button>

                                    <div className="absolute top-16 left-0 w-[800px] bg-white text-black shadow-xl hidden group-hover:flex p-6 z-50">
                                        <div className="grid grid-cols-4 gap-6 text-sm">

                                            <div className="space-y-3">
                                                <Link href="#" className="block hover:text-[#860000] font-semibold">Asthmatic</Link>
                                                <Link href="#" className="block hover:text-[#860000]">Ayurvedic</Link>
                                                <Link href="#" className="block hover:text-[#860000]">Tablets</Link>
                                                <Link href="#" className="block hover:text-[#860000]">Capsules</Link>
                                            </div>

                                            <div className="space-y-3">
                                                <Link href="#" className="block hover:text-[#860000] font-semibold">Syrup & Suspension</Link>
                                                <Link href="#" className="block hover:text-[#860000]">Dry Syrup</Link>
                                                <Link href="#" className="block hover:text-[#860000]">Eye / Ear</Link>
                                                <Link href="#" className="block hover:text-[#860000]">Injection</Link>
                                            </div>

                                            <div className="space-y-3">
                                                <Link href="#" className="block hover:text-[#860000] font-semibold">Lotion</Link>
                                                <Link href="#" className="block hover:text-[#860000]">Oils</Link>
                                                <Link href="#" className="block hover:text-[#860000]">Nutraceuticals</Link>
                                                <Link href="#" className="block hover:text-[#860000]">Ointment</Link>
                                            </div>

                                            <div className="space-y-3">
                                                <Link href="#" className="block hover:text-[#860000] font-semibold">Powder</Link>
                                                <Link href="#" className="block hover:text-[#860000]">Soap</Link>
                                                <Link href="#" className="block hover:text-[#860000]">Soft Gel</Link>
                                                <Link href="#" className="block hover:text-[#860000]">Spray Gel</Link>
                                            </div>

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

                        </div>
                    </div>
                )}
            </nav>

        </header>
    );
}
