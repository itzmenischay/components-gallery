import React from 'react';

import githublogo from "./../../assets/github.png"
import instagramlogo from "./../../assets/instagram.png"
import linkedinlogo from "./../../assets/linkedin.png"

const Contact = () => {
  return (
    <div className="min-h-screen text-white px-6 py-18 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
      <p className="text-gray-400 max-w-xl text-center mb-12">
        Have a question, feedback, or collaboration idea? Drop your message below and I’ll get back to you.
      </p>

      {/* Contact Form */}
      <form className="w-full max-w-xl space-y-6 bg-white/5 backdrop-blur-md p-8 rounded-lg border border-white/10 shadow-lg">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 text-sm">Name</label>
          <input
            type="text"
            id="name"
            className="p-3 rounded bg-black/30 border border-white/10 focus:outline-none focus:ring-1 focus:ring-blue-400 text-white"
            placeholder="Your name"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm">Email</label>
          <input
            type="email"
            id="email"
            className="p-3 rounded bg-black/30 border border-white/10 focus:outline-none focus:ring-1 focus:ring-blue-400 text-white"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 text-sm">Message</label>
          <textarea
            id="message"
            rows="5"
            className="p-3 rounded bg-black/30 border border-white/10 focus:outline-none focus:ring-1 focus:ring-blue-400 text-white"
            placeholder="What's on your mind?"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium transition cursor-pointer"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="mt-16 text-center space-y-4">
        <p className="text-sm text-gray-400">Or connect with me on:</p>
        <div className="flex justify-center gap-6 text-2xl">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <img src={instagramlogo} width={36} alt="" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <img src={linkedinlogo} width={36} alt="" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <img src={githublogo} width={36} alt="" />
          </a>
        </div>
      </div>

      {/* Footer Note */}
      <p className="mt-12 text-sm text-gray-500">Looking forward to hearing from you!</p>
    </div>
  );
};

export default Contact;
