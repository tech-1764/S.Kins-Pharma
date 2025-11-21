"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Pi, User, User2 } from "lucide-react";
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
    <main className="bg-[#FFF8F8] text-[#1A1A1A] min-h-screen">
      {/* 🔹 Navbar */}
      <section className="bg-white shadow-md top-0 left-0 w-full">
        <Navbar />
      </section>
      {/* 🌿 Hero Section */}
      {/* <section className="bg-[#FDF0F3] text-black mt-0"> */}
      <section className="bg-[#EEDCDC] text-black mt-0">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-around px-26 pr-20 py-16">
          {/* LEFT */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl text-[#800000] font-bold leading-tight">
              Welcome to <span className="text-[#E6B800]">S.Kins Pharma</span>
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              Delivering reliable pharmaceutical & dermatology solutions with
              premium quality and research-driven innovation.
            </p>

            <Link
              href="/products"
              className="inline-flex items-center bg-white text-[#800000] px-6 py-3 rounded-full font-semibold hover:bg-[#F8EDED] transition-all"
            >
              Explore Products <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <Image
              src="/assets/hero-medicine.png"
              alt="S.Kins Pharma Products"
              width={400}
              height={300}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>
      {/*  About Section */}
      <section className="container mx-auto px-6 pt-13  pb-7">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-[#800000]">About Us</h2>
          <div className="w-24 h-1 bg-[#800000] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1  gap-12 flex justify-around items-center mx-13">
          {/* Left Content */}
          <div className="text-left space-y-4">
            <h1 className="text-3xl leading-snug font-semibold text-[#4A0000]">
              Welcome to S.Kins Pharma –
              {/* <span className="block text-[#800000]">Your Trusted Partner in Pharmaceutical Excellence</span> */}
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed">
              Established with a strong foundation of trust and innovation,
              <strong> S.Kins Pharma</strong> is committed to providing
              high-quality pharmaceutical & dermatology formulations. Our wide
              range of products is developed with precision, ensuring safety,
              purity, and maximum therapeutic value.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              With a well-equipped manufacturing facility, advanced machinery,
              and a dedicated team of professionals, we maintain strict QC
              standards at every step. We aim to contribute to the healthcare
              industry with reliable solutions that deliver consistent and
              effective results.
            </p>

            <Link
              href="/about"
              className="inline-block mt-4 bg-[#800000] text-white px-7 py-2 rounded-full shadow-md hover:bg-[#660000] transition-all"
            >
              Read More <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          {/*  Company Information / Highlights */}
          <section className="container mx-auto px-6 py-3">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Nature of Business */}
              <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4 border-l-4 border-[#800000] hover:shadow-lg transition-shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-[#800000]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 7.5l-8.954-5.366a.75.75 0 00-.792 0L1.5 7.5m18.75 0v9a2.25 2.25 0 01-2.25 2.25h-12A2.25 2.25 0 013.75 16.5v-9m18.75 0L12 12.75M3.75 7.5L12 12.75"
                  />
                </svg>
                <div>
                  <h4 className="text-lg font-semibold text-[#800000]">
                    Nature of Business
                  </h4>
                  <p className="text-gray-700">Manufacturer</p>
                </div>
              </div>

              {/* Legal Status */}
              <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4 border-l-4 border-[#800000] hover:shadow-lg transition-shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-[#800000]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75v10.5m-10.5 0V6.75m4.5 0v10.5M3 6.75h18"
                  />
                </svg>
                <div>
                  <h4 className="text-lg font-semibold text-[#800000]">
                    Legal Status of Firm
                  </h4>
                  <p className="text-gray-700">Proprietorship</p>
                </div>
              </div>

              {/* Annual Turnover */}
              <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4 border-l-4 border-[#800000] hover:shadow-lg transition-shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-[#800000]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3v18m18 0H3m6-8l2 2 4-4m-6-6h8m-8 4h8m-8 4h5"
                  />
                </svg>
                <div>
                  <h4 className="text-lg font-semibold text-[#800000]">
                    Annual Turnover
                  </h4>
                  <p className="text-gray-700">₹5 - 25 Crore</p>
                </div>
              </div>

              {/* GST Registration Date */}
              <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4 border-l-4 border-[#800000] hover:shadow-lg transition-shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-[#800000]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7h8m-8 4h8m-8 4h5m-7 5h14a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <h4 className="text-lg font-semibold text-[#800000]">
                    GST Registration Date
                  </h4>
                  <p className="text-gray-700">01-07-2017</p>
                </div>
              </div>

              {/* Employee Count */}
              <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4 border-l-4 border-[#800000] hover:shadow-lg transition-shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-[#800000]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m12-8a4 4 0 100-8 4 4 0 000 8zm5 8v-2a3 3 0 00-3-3h-.5"
                  />
                </svg>
                <div>
                  <h4 className="text-lg font-semibold text-[#800000]">
                    Total Employees
                  </h4>
                  <p className="text-gray-700">11 to 25 People</p>
                </div>
              </div>

              {/* GST Number */}
              <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4 border-l-4 border-[#800000] hover:shadow-lg transition-shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-[#800000]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-3-3v6m9-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <div>
                  <h4 className="text-lg font-semibold text-[#800000]">
                    GST Number
                  </h4>
                  <p className="text-gray-700">02DFMPS0328H2ZI</p>
                </div>
              </div>
            </div>
          </section>

          {/* Right Image */}
          {/* <div className="flex justify-center">
            <Image
              src="/assets/about-us.jpg"
              alt="About S.Kins Pharma"
              width={500}
              height={350}
              className="rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
            />
          </div> */}
        </div>
      </section>
      {/* Products Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold text-[#800000] mb-10">
            Products & Services
            <div className="w-24 h-1 bg-[#800000] mx-auto mt-1 rounded-full"></div>
          </h2>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={true}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            spaceBetween={10}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-10"
          >
            {productsMenu.map((product, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-2xl border shadow-md hover:shadow-xl transition-all h-[530px] w-[300px] mx-auto flex flex-col">
                  {/* Image Section */}
                  <div className="h-[280px] w-full bg-gray-100 overflow-hidden rounded-t-2xl">
                    <Image
                      src={`/assets/products/${idx + 1}.jpg`}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-105 transition-all"
                      width={300}
                      height={280}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#800000] px-4 my-3 transition">
                    {product.title}
                  </h3>

                  {/* List */}
                  <ul className="text-gray-700 text-sm px-4 mt-2 space-y-1 flex-grow cursor-pointer">
                    {product.items.slice(0, 3).map((item, i) => (
                      <li
                        key={i}
                        className="leading-tight hover:text-[#800000] transition"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>

                  {/* View More Button */}
                  <button className="mx-4 mb-4 mt-3 bg-[#800000] text-white px-4 py-2 rounded-full text-sm hover:bg-[#660000] transition">
                    View More
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* HSN Code Section */}
        <div className="w-full flex justify-center py-12">
          <div className="w-[90%] max-w-5xl">
            {/* Heading */}
            <h2 className="text-center text-[#800000] text-3xl font-bold mb-3">
              Deals in HSN Code
            </h2>

            {/* Simple underline (original theme) */}
            <div className="w-16 h-1 bg-[#800000] mx-auto mb-10"></div>

            {/* Table Wrapper */}
            <div className="shadow-xl rounded-md overflow-hidden border">
              {/* Header (NO THEME CHANGE) */}
              <div className="grid grid-cols-12 bg-[#F9F5F5] font-semibold text-gray-700 py-3 px-4">
                <div className="col-span-3">HSN Code</div>
                <div className="col-span-9">HSN Description</div>
              </div>

              {/* Rows (Simple white theme) */}
              {hsnData.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 border-t py-4 px-4"
                >
                  <div className="col-span-3 font-medium">{item.code}</div>
                  <div className="col-span-9 leading-6">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <div className="w-full bg-[#FFF8F8] py-16 px-6 md:px-20">
        {/* HEADING */}
        <h2 className="text-4xl font-bold text-center text-[#6E0000]">
          Contact Us
        </h2>
        <div className="w-24 h-1 bg-[#800000] mx-auto mt-1 rounded-full mb-13"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* RIGHT SIDE — FORM */}
          <form
            onSubmit={sendEmail}
            className="bg-white rounded-xl px-8 py-5 shadow-xl space-y-4 w-full max-w-md mx-auto"
          >
            <div className="mb-5">
              <h1 className="text-2xl font-semibold text-[#6E0000] mb-1">
                Contact Form
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
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-[#6E0000]"
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
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-[#6E0000]"
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
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-[#6E0000]"
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
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-[#6E0000]"
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
      );
      {/* ⚙️ Footer */}
      <Footer />


    </main>
  );
}
