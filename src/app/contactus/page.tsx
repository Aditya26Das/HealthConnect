// pages/contactus.tsx
"use client";
import Head from 'next/head';

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Contact Us - Health Connect</title>
        <meta name="description" content="Get in touch with us at Health Connect." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 px-6 md:px-20 text-center bg-blue-50">
        <h1 className="text-6xl font-bold text-gray-800 mb-8 mt-12">
          Contact <span className="text-blue-600">Health Connect</span>
        </h1>

        <section className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          <p className="mb-6">
            We are here to assist you with any questions or concerns you may have. Whether you need help with scheduling an appointment, navigating our platform, or any other inquiry, our team is ready to help.
          </p>

          <blockquote className="italic text-2xl text-blue-600 my-8">
            "The best way to find yourself is to lose yourself in the service of others." - Mahatma Gandhi
          </blockquote>

          <p className="mb-6">
            Feel free to reach out to us using the contact information below. Our customer service team is dedicated to providing you with the support you need.
          </p>

          <div className="bg-white shadow-md rounded-lg p-8 mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-lg mb-2">
              <strong>Email:</strong> support@healthconnect.com
            </p>
            <p className="text-lg mb-2">
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p className="text-lg mb-2">
              <strong>Address:</strong> 123 Health St, Wellness City, HC 12345
            </p>
          </div>

          <blockquote className="italic text-2xl text-blue-600 my-8">
            "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear." - Buddha
          </blockquote>

          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-left text-gray-700 font-medium mb-1">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label htmlFor="email" className="block text-left text-gray-700 font-medium mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label htmlFor="message" className="block text-left text-gray-700 font-medium mb-1">Message</label>
                <textarea id="message" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" rows={4}></textarea>
              </div>
              <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
