// pages/aboutus.tsx
"use client";
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>About Us - Health Care</title>
        <meta name="description" content="Learn more about our journey and mission at Health Care." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col items-center w-full flex-1 px-6 md:px-20 text-center bg-blue-50">
        <h1 className="text-6xl font-bold text-gray-800 mb-8 mt-12">
          About <span className="text-blue-600">Health Care</span>
        </h1>

        <section className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          <p className="mb-6">
            Health Care was born out of a profound personal experience and a strong desire to make a difference. Our founder, John Doe, faced a critical health crisis in 2018, which made him realize the immense challenges people face in accessing timely and efficient healthcare. During his recovery, John was struck by the stories of countless individuals who struggled to find the right medical help when they needed it the most.
          </p>

          <p className="mb-6">
            Inspired by these stories and fueled by a passion for change, John gathered a team of like-minded individuals who shared his vision. Together, they embarked on a journey to create a platform that would bridge the gap between patients and doctors, ensuring that no one had to suffer due to lack of access to healthcare.
          </p>

          <blockquote className="italic text-2xl text-blue-600 my-8">
            "The best way to find yourself is to lose yourself in the service of others." - Mahatma Gandhi
          </blockquote>

          <p className="mb-6">
            From humble beginnings in a small office, the team worked tirelessly, driven by the belief that healthcare should be accessible to everyone. They faced numerous challenges, but their unwavering commitment kept them going. Through innovation and dedication, Health Care evolved into a comprehensive platform that not only connects patients with doctors but also provides a seamless experience for managing appointments and healthcare records.
          </p>

          <p className="mb-6">
            Today, Health Care stands as a testament to what can be achieved with empathy, hard work, and a relentless pursuit of excellence. Our mission is to empower individuals with the tools they need to take control of their health and well-being.
          </p>

          <blockquote className="italic text-2xl text-blue-600 my-8">
            "Your health is an investment, not an expense." - Unknown
          </blockquote>

          <p className="mb-6">
            We believe that every life matters, and we are committed to making healthcare accessible, efficient, and compassionate. Thank you for being a part of our journey and for trusting us with your health.
          </p>

          <p className="mb-6">
            Join us as we continue to innovate and strive towards a healthier future for all.
          </p>

          <blockquote className="italic text-2xl text-blue-600 my-8">
            "Health is not just about what you're eating. It's also about what you're thinking and saying." - Unknown
          </blockquote>

          <div className="mt-12">
            <Link href="/contactus">
              <div className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300 cursor-pointer">
                Contact Us
              </div>
            </Link>
          </div>
        </section>
      </main>

      <footer className="w-full h-24 flex items-center justify-center border-t mt-8">
        <p className="text-gray-600">&copy; 2024 Health Care. All rights reserved.</p>
      </footer>
    </div>
  );
}
