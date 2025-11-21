"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, User, User2 } from "lucide-react";
import { FaLeaf, FaFlask, FaHandshake } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { productsMenu } from "@/data/productsMenu";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { hsnData } from "@/data/hsnData";
import { Phone, Mail, MapPin } from "lucide-react";
import Swal from "sweetalert2";

export default function Home() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                form,
                {
                    publicKey: PUBLIC_KEY,
                }
            );
            Swal.fire({
                icon: "success",
                title: "Message Sent",
                text: "Your message has been sent successfully!",
            });
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Message Failed",
                text: "Failed to send message!",
            });
        }
    };
    return (

        <>
            {/* Navbar Section */}
            <Navbar />

            {/* Contact Section */}
            <div className="w-full bg-[#FFF8F8] py-16 px-6 md:px-20">
                {/* HEADING */}
                {/* <div className="bg-[url('/assets/contact-cover.jpg')] h-48 w-full bg-cover bg-center bg-no-repeat mb-8 mx-0"> */}
                <h2 className="text-4xl font-bold text-center pb-4 text-[#6E0000]">
                    Contact Us
                </h2>
                 <h3 className="text-md text-center text-[#6E0000] pb-12">
                    <span className="underline text-[#E6B800]"><Link href="/" > Home</Link></span> / Contact Us
                </h3>
                {/* </div> */}
                {/* <div className="w-24 h-1 bg-[#800000] mx-auto mt-1 rounded-full mb-13"></div> */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* RIGHT SIDE — FORM */}
                    <form
                        onSubmit={sendEmail}
                        className="bg-white rounded-xl px-8 py-5 shadow-xl space-y-4 w-full max-w-md mx-auto"
                    >
                        <div className="mb-5">
                            <h1 className="text-2xl font-semibold text-[#6E0000] mb-1">
                                Enquire Now
                            </h1>
                            <p className="text-gray-700 mb-6">
                                We’d love to hear from you. Feel free to reach out!
                            </p>
                        </div>

                        {/* NAME */}
                        <div>
                            <label className="block text-sm font-medium mb-1 text-[#6E0000]">
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                                className="w-full p-3 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-[#6E0000]"
                            />
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label className="block text-sm font-medium mb-1 text-[#6E0000]">
                                Your Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                                className="w-full p-3 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-[#6E0000]"
                            />
                        </div>

                        {/* SUBJECT */}
                        <div>
                            <label className="block text-sm font-medium mb-1 text-[#6E0000]">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                placeholder="Enter the subject"
                                required
                                className="w-full p-3 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-[#6E0000]"
                            />
                        </div>

                        {/* MESSAGE */}
                        <div>
                            <label className="block text-sm font-medium mb-1 text-[#6E0000]">
                                Your Message
                            </label>
                            <textarea
                                name="message"
                                rows="4"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Enter your message"
                                required
                                className="w-full p-3 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-[#6E0000]"
                            ></textarea>
                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            className="w-full bg-[#6E0000] text-white font-semibold py-3 rounded-md hover:bg-[#540000] transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* LEFT SIDE — CONTACT DETAILS */}
                    <div className="p-4 space-y-6">
                        <h3 className="text-2xl font-semibold text-[#6E0000]">
                            Get in Touch
                        </h3>

                        <p className="flex items-center gap-3 text-gray-800">
                            <Phone size={20} className="text-[#6E0000]" /> +91-98058 61822
                        </p>

                        <p className="flex items-center gap-3 text-gray-800">
                            <Mail size={20} className="text-[#6E0000]" />{" "}
                            mkt.skinspharma@gmail.com
                        </p>

                        <p className="flex items-center gap-3 text-gray-800">
                            <User2 size={20} className="text-[#6E0000]" /> Nitin Kumar Sahu
                            (Owner)
                        </p>

                        <p className="flex items-center gap-3 text-gray-800">
                            <MapPin size={28} className="text-[#6E0000]" /> Plot No 43, S.Kins
                            Pharma, Lodi Majra, Industrial Area Lodi Majra, Nalagarh,
                            Solan-174101, Himachal Pradesh, India
                        </p>

                        {/* MAP */}
                        <div className="w-full h-64 rounded-lg overflow-hidden">
                            <iframe
                                title="map"
                                width="100%"
                                height="100%"
                                loading="lazy"
                                allowFullScreen
                                className="rounded-lg"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.156781605623!2d76.76676547504796!3d30.99400527295969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39055f0043e6921d%3A0x74bf4bcc1a7b2499!2sS%20Kins%20Pharma%20Unit-II%20Plot%20no%2043%2C%20Lodhi%20Majra%2C%20Baddi%2C%20Dist%3A%20Solan%20%2C%20Himachal%20Pradesh%20173205(India)!5e0!3m2!1sen!2sin!4v1763498690495!5m2!1sen!2sin"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <Footer />
        </>
    )
}