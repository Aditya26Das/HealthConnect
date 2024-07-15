"use client";
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Health Connect</title>
        <meta name="description" content="Schedule doctor appointments with ease." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col items-center w-full flex-1 px-20 text-center bg-blue-50">
        <h1 className="text-6xl font-bold text-gray-800 mb-8 mt-12">
          Welcome to <span className="text-blue-600">Health Connect</span>
        </h1>

        <p className="mt-3 text-2xl text-gray-700">
          "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship." - Buddha
        </p>
        <p className="mt-3 text-2xl text-gray-700">
          "The greatest medicine of all is teaching people how not to need it." - Hippocrates
        </p>
        <p className="mt-3 text-2xl text-gray-700">
          "An ounce of prevention is worth a pound of cure." - Benjamin Franklin
        </p>

        <div className="flex mt-12 space-x-4">
          <Link href="/register">
            <div className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300 cursor-pointer">
              Registration
            </div>
          </Link>
          <Link href="/login">
            <div className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition duration-300 cursor-pointer">
              Login
            </div>
          </Link>
        </div>
      </main>

      <footer className="w-full h-24 flex items-center justify-center border-t mt-8">
        <p className="text-gray-600">&copy; 2024 Health Connect. All rights reserved.</p>
      </footer>
    </div>
  );
}
