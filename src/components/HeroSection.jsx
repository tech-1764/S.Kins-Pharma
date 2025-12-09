"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-[#007BFF] to-[#17A2B8] text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-16">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Welcome to <span className="text-yellow-300">S.Kins Pharma</span>
          </h1>
          <p className="text-lg opacity-90">
            We are a trusted name in pharmaceutical and dermatological solutions,
            offering quality formulations with innovation and care.
          </p>
          <Link
            href="/products&services"
            className="inline-flex items-center bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition-all"
          >
            Explore Products <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            src="/assets/hero-medicine.png"
            alt="S.Kins Pharma Products"
            width={400}
            height={300}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
