"use client";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-800 pt-14 pb-8 border-t border-gray-300">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">

                {/* Brand Section */}
                <div>
                    <h3 className="text-2xl font-bold text-[#800000] mb-3">S.Kins Pharma</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Delivering trusted pharmaceutical & dermatology formulations crafted
                        with quality, research, and care for healthier futures.
                    </p>
                </div>

                {/* Social Links */}
                <div className="md:ml-12">
                    <h4 className="text-xl font-semibold text-[#800000] mb-4 ">Social Links</h4>
                    <ul className="space-y-2 text-gray-700">
                        <li><Link href="#" className="flex hover:text-[#660000] transition items-center gap-2">
                            <FaFacebookF size={18} />
                            Facebook
                        </Link></li>
                        {/* <li><Link href="#" className="flex hover:text-[#660000] transition items-center gap-2">
                            <FaInstagram size={18} />
                              Instagram
                        </Link></li> */}
                        <li><Link href="#" className="flex hover:text-[#660000] transition items-center gap-2">
                            <FaLinkedinIn size={18} />
                            LinkedIn
                        </Link></li>
                        <li><Link href="#" className="flex hover:text-[#660000] transition items-center gap-2">
                            <FaTwitter size={18} />
                            Twitter
                        </Link></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xl font-semibold text-[#800000] mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-gray-700">
                        <li><Link href="/about" className="hover:text-[#800000] transition">About Us</Link></li>
                        <li><Link href="/products" className="hover:text-[#800000] transition">Products</Link></li>
                        <li><Link href="/services" className="hover:text-[#800000] transition">Our Services</Link></li>
                        <li><Link href="/contact" className="hover:text-[#800000] transition">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h4 className="text-xl font-semibold text-[#800000] mb-4">Contact Info</h4>

                    <p className="flex items-center gap-2 text-gray-700">
                        <MapPin size={40} className="text-[#800000] text-xl" />
                        Plot No 43, S.Kins Pharma, Lodi Majra, Industrial Area Lodi Majra,
                        Nalagarh, Solan-174101, Himachal Pradesh, India
                    </p>

                    <p className="flex items-center gap-2 mt-3 text-gray-700">
                        <Phone size={18} className="text-[#800000] text-xl" />
                        +91-98058 61822
                    </p>

                    <p className="flex items-center gap-2 mt-3 text-gray-700">
                        <Mail size={18} className="text-[#800000] text-xl" />
                        mkt.skinspharma@gmail.com
                    </p>
                </div>

            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 mt-10"></div>

            {/* Bottom Bar */}
            <div className="text-center text-gray-600 mt-6">
                © {new Date().getFullYear()} S.Kins Pharma. All rights reserved.
                <br />
                <span className="text-sm text-gray-500">Developed with ❤️ by <span className="font-semibold">a Web Developer</span></span>
            </div>
        </footer>
    );
}