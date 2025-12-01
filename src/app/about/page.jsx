"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUs() {
    return (
        <>
            <Navbar />

            <div className="max-w-6xl mx-auto p-6 space-y-16">

                {/* PAGE HEADING */}
                <h1 className="text-3xl md:text-4xl font-bold text-[#6E0000]">
                    About S. Kins Pharma
                </h1>

                {/* COMPANY INTRO */}
                <section className="space-y-4 text-gray-700">
                    <p>
                        Established as a Sole Proprietorship firm in the year 2017, we “S Kins Pharma”
                        are a leading Manufacturer of a wide range of Pharmaceutical Syrup,
                        Pharmaceutical Suspension, Protein Powder, Capsules, Tablets, and many more.
                    </p>

                    <p>
                        Situated in <strong>Baddi (Himachal Pradesh, India)</strong>, we have constructed
                        a wide and well-functional infrastructural unit that plays a vital role in the
                        growth of our company.
                    </p>

                    <p>
                        We offer all products at market-leading prices and deliver within the committed
                        time-frame. Additionally, we offer **PCD Pharma Franchise** and
                        **Third Party Manufacturing Services** to our esteemed clients.
                    </p>

                    <p>
                        Under the guidance of our mentor <strong>Mr. Nitin Kumar Sahu</strong>, we have
                        gained a vast national clientele.
                    </p>
                </section>

                {/* COMPANY ALBUM */}
                <section>
                    <h2 className="text-2xl font-bold text-[#6E0000] mb-4">Company Album</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {["company-1.jpg", "company-2.jpg", "company-3.jpg", "company-4.jpg"].map((img, idx) => (
                            <div key={idx} className="rounded-xl overflow-hidden border shadow">
                                <Image
                                    src={`/company/${img}`}
                                    alt="Company Album"
                                    width={500}
                                    height={700}
                                    className="object-cover h-90 w-full"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* FACTSHEET */}
                <section>
                    <h2 className="text-2xl font-bold text-[#6E0000] mb-4">Factsheet</h2>

                    <table className="w-full border border-gray-300 text-[15px]">
                        <tbody>

                            <tr className="border-b">
                                <td className="bg-gray-100 p-3 font-semibold">Nature of Business</td>
                                <td className="p-3">Manufacturer</td>
                            </tr>

                            <tr className="border-b">
                                <td className="bg-gray-100 p-3 font-semibold">Additional Business</td>
                                <td className="p-3">Factory / Manufacturing, Office / Sales Office</td>
                            </tr>

                            <tr className="border-b">
                                <td className="bg-gray-100 p-3 font-semibold">Company CEO</td>
                                <td className="p-3">Nitin Kumar Sahu</td>
                            </tr>

                            <tr className="border-b">
                                <td className="bg-gray-100 p-3 font-semibold">Total Employees</td>
                                <td className="p-3">11 to 25 People</td>
                            </tr>

                            <tr className="border-b">
                                <td className="bg-gray-100 p-3 font-semibold">GST Registration Date</td>
                                <td className="p-3">01-07-2017</td>
                            </tr>

                            <tr className="border-b">
                                <td className="bg-gray-100 p-3 font-semibold">Legal Status</td>
                                <td className="p-3">Proprietorship</td>
                            </tr>

                            <tr className="border-b">
                                <td className="bg-gray-100 p-3 font-semibold">Annual Turnover</td>
                                <td className="p-3">₹5 - ₹25 Crore</td>
                            </tr>

                            <tr>
                                <td className="bg-gray-100 p-3 font-semibold">GST No.</td>
                                <td className="p-3">02DFMPS0328H2ZI</td>
                            </tr>

                        </tbody>
                    </table>
                </section>

                {/* STATUTORY PROFILE */}
                <section>
                    <h2 className="text-2xl font-bold text-[#6E0000] mb-4">Statutory Profile</h2>

                    <table className="w-full border border-gray-300 text-[15px]">
                        <tbody>

                            <tr className="border-b">
                                <td className="bg-gray-100 p-3 font-semibold">Banker</td>
                                <td className="p-3">Axis Bank Ltd, Canara Bank</td>
                            </tr>

                            <tr>
                                <td className="bg-gray-100 p-3 font-semibold">GST Partner Name</td>
                                <td className="p-3">Nitin Kumar Sahu</td>
                            </tr>

                        </tbody>
                    </table>
                </section>

                {/* PACKAGING/PAYMENT/SHIPMENT DETAILS */}
                <section>
                    <h2 className="text-2xl font-bold text-[#6E0000] mb-4">
                        Packaging, Payment and Shipment Details
                    </h2>

                    <table className="w-full border border-gray-300 text-[15px]">
                        <tbody>

                            <tr className="border-b">
                                <td className="bg-gray-100 p-3 font-semibold">Payment Modes</td>
                                <td className="p-3">Cash, Credit Card, Cheque, DD, Invoice, Online</td>
                            </tr>

                            <tr>
                                <td className="bg-gray-100 p-3 font-semibold">Shipment Mode</td>
                                <td className="p-3">By Road</td>
                            </tr>

                        </tbody>
                    </table>
                </section>

                {/* WHY US */}
                <section>
                    <h2 className="text-2xl font-bold text-[#6E0000] mb-4">Why Us?</h2>

                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                        <li>Quality assured product range</li>
                        <li>Adept team of professionals</li>
                        <li>Ethical business policies</li>
                        <li>Client-centric approach</li>
                        <li>Large distribution network</li>
                        <li>Transparent dealings</li>
                        <li>Excellent logistics & transport facility</li>
                        <li>Affordable pricing</li>
                    </ul>
                </section>

                {/* CERTIFICATIONS */}
                <section>
                    <h2 className="text-2xl font-bold text-[#6E0000] mb-6">Our Certifications</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                        {/* LEFT IMAGE */}
                        <div className="border rounded-xl p-4 shadow bg-white">
                            <Image
                                src="/assets/certificate.jpeg"
                                alt="Certification"
                                width={600}
                                height={700}
                                className="rounded-lg object-cover w-full"
                            />
                        </div>

                        {/* RIGHT DETAILS */}
                        <div className="space-y-2 text-gray-700 text-[15px]">
                            <p><strong>Issue Date:</strong> 25th July 2018</p>
                            <p><strong>Expire Date:</strong> 24th July 2021</p>
                            <p><strong>Terms & Conditions:</strong> No drug is sold without a valid prescription.</p>
                        </div>
                    </div>
                </section>

                {/* COMPANY IMAGES */}
                <section>
                    <h2 className="text-2xl font-bold text-[#6E0000] mb-6">Terms & Conditions</h2>
                    <p className="">
                    Disclaimer: No drug is sold without a valid prescription.
                </p> 
                    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["company1.jpg","company2.jpg","company3.jpg","company4.jpg"].map((img, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden shadow border">
                <Image
                  src={`/images/about/${img}`}
                  alt="Company Img"
                  width={500}
                  height={400}
                  className="object-cover h-40 w-full"
                />
              </div>
            ))}
          </div> */}
                </section>

            </div>

            <Footer />
        </>
    );
}
