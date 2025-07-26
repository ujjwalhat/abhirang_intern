import React, { useState } from "react";
import { Mail, Video, Send } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import ConnectSectionContact from "./ConnectSectionContact";
import FooterContact from "./FooterContact";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted! (But there's no backend 🤖)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("team@abhirang.com");
    alert("Email copied to clipboard!");
  };

  return (
    <>
      <div className="bg-black text-white min-h-screen py-12 px-4 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl">
          <div className="text-green-400 text-lg sm:text-xl font-bold flex items-center justify-center gap-2">
            <Send className="h-6 w-6" />
            <span>Contact</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mt-4 bg-gradient-to-r from-[#686860] to-white text-transparent bg-clip-text">
            Reach out
          </h1>
          <p className="mt-5 text-gray-400 text-lg sm:text-2xl">
            Our sales team is on standby to schedule{" "}
            <br className="hidden sm:block" />
            your demo or provide assistance
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mb-12">
          {/* Book Demo */}
          <div className="bg-[#111111] rounded-2xl p-6 border border-[#2a2a2a]">
            <div className="p-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] w-fit mb-4">
              <Video className="text-green-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
              Book a Demo
            </h2>
            <a
              href="https://calendly.com/ujjwal"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-sm font-semibold text-white text-center border border-gray-600 rounded-xl py-2 hover:bg-gray-800 transition"
            >
              Go to Calendly
            </a>
          </div>

          {/* Email Us */}
          <div className="bg-[#111111] rounded-2xl p-6 border border-[#2a2a2a]">
            <div className="p-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] w-fit mb-4">
              <Mail className="text-green-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
              Email Us
            </h2>
            <button
              onClick={handleEmailCopy}
              className="block mt-4 text-sm font-semibold text-white text-center border border-gray-600 rounded-xl py-2 w-full hover:bg-gray-800 transition"
            >
              Copy to clipboard
            </button>
          </div>

          {/* Tag on X */}
          <div className="bg-[#111111] rounded-2xl p-6 border border-[#2a2a2a]">
            <div className="p-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] w-fit mb-4">
              <FaXTwitter className="text-green-400 w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
              Tag us on X
            </h2>
            <p className="mt-4 text-sm font-semibold text-white text-center border border-gray-600 rounded-xl py-2">
              @trippyujj
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-[#111111] rounded-2xl p-6 w-full max-w-6xl border border-[#2a2a2a]">
          <div className="flex flex-col mb-6">
            <div className="p-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] w-fit mb-3">
              <Send className="text-green-400" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Or send a message...
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-[#4f4f4f] text-white px-4 py-2 rounded-xl w-full focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-[#4f4f4f] text-white px-4 py-2 rounded-xl w-full focus:outline-none"
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="bg-[#4f4f4f] text-white px-4 py-2 rounded-xl w-full focus:outline-none"
            />

            <button
              type="submit"
              className="bg-green-400 hover:bg-green-300 text-black font-semibold py-2 w-full rounded-xl transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Globe + Footer */}
      <ConnectSectionContact />
      <FooterContact />
    </>
  );
}
