'use client';

import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

function ContactUs() {
  return (
    <>
    {/* Header */}
    <Header />
    <div className="w-full bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#E7E4F8] py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-2">Contact Us</h1>
          <p className="text-sm text-black">
            Home <span className="text-black">.</span> Pages <span className="text-black">.</span>{" "}
            <span className="text-[#FB2E86]">Contact Us</span>
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-[1200px] mx-auto px-4 py-12 flex flex-wrap gap-12">
        {/* Left Section */}
        <div className="flex-1">
          {/* Information About Us */}
          <h2 className="text-2xl font-bold text-[#151875] mb-4">Information About Us</h2>
          <p className="text-gray-600 mb-6">
          We believe your furniture should reflect your personality and lifestyle. That's why we strive to provide not just furniture, but a seamless shopping experience and products that bring joy and inspiration to your home. Whether it's a cozy sofa for family movie nights or a statement piece for your dining room, we're here to help you create spaces that you love.
          </p>
          <div className="flex gap-2 mb-8">
            <span className="w-3 h-3 rounded-full bg-[#5625DF]"></span>
            <span className="w-3 h-3 rounded-full bg-[#FF27B7]"></span>
            <span className="w-3 h-3 rounded-full bg-[#37DAF3]"></span>
          </div>

          {/* Get in Touch */}
          <h2 className="text-2xl font-bold text-[#151875] mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique
            amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full border border-gray-300 rounded-md p-3 outline-none text-sm"
            />
            <input
              type="email"
              placeholder="Your E-mail*"
              className="w-full border border-gray-300 rounded-md p-3 outline-none text-sm"
            />
            <input
              type="text"
              placeholder="Subject*"
              className="w-full border border-gray-300 rounded-md p-3 outline-none text-sm"
            />
            <textarea
              placeholder="Type your message*"
              rows={4}
              className="w-full border border-gray-300 rounded-md p-3 outline-none text-sm"
            ></textarea>
            <button className="bg-[#FB2E86] text-white py-3 px-8 rounded-md hover:bg-[#F94C9B] transition-colors">
              Send Mail
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          {/* Contact Way */}
          <h2 className="text-2xl font-bold text-[#151875] mb-8">Contact Way</h2>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-[#5726DF]"></span>
              <div className="text-gray-600">
                <p>Tel: 877-67-88-99</p>
                <p>E-Mail: shop@store.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-[#FB2E86]"></span>
              <div className="text-gray-600">
                <p>Support Forum</p>
                <p>For over 24hr</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-[#FFB265]"></span>
              <div className="text-gray-600">
                <p>20 Margaret st, London</p>
                <p>Great Britain, 3NM98-LK</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-[#1BE982]"></span>
              <div className="text-gray-600">
                <p>Free standard shipping</p>
                <p>on all orders</p>
              </div>
            </div>
          </div>

          <div>
      <Image
        src="/connect.png" 
        alt="Connect"
        width={500} 
        height={500} 
      />
    </div>    
     </div>
      </div>
    </div>
     {/* Footer */}
     <Footer />
    </>
  
  );
}

export default ContactUs;