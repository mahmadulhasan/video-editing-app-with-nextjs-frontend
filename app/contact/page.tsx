import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-cyan-300 p-6">
      <div className="max-w-7xl w-full bg-transparent flex flex-col md:flex-row gap-10">
        {/* Left: Contact Info */}
        <div className="flex-1 text-white">
          <h2 className="text-5xl  font-bold mb-4">Contact Info</h2>
          <p className="mb-8 text md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
            blanditiis, perferendis aliquam.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">Kolkata</h4>
              <p className="text mb-1">📍 Kolkata, West Bengal, India</p>
              <p className="text mb-1">📞 1234567890</p>
              <p className="text">📧 info@mywebsite.com</p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1 bg-white p-8 rounded shadow-lg ">
          <h3 className="text-gray-700 text-center text uppercase mb-8">Send Us A Message</h3>
          <form className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 mb-8"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 mb-8"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 mb-8"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-lime-400 text-white py-2 rounded font-semibold hover:bg-lime-500 transition duration-200 mb-8"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
