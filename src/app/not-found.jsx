import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
         <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      
      <h1 className="text-7xl font-bold text-red-500 mb-4">
        404
      </h1>

      <h2 className="text-3xl font-semibold mb-3">
        Page Not Found
      </h2>

      <p className="text-gray-500 mb-6 text-center">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link href="/">
        <button className="px-6 py-3inline-flex items-center gap-3 bg-[linear-gradient(90deg,#ff8a3d_0%,#ff6b00_45%,#3b82f6_100%)] text-white px-8 p-2 rounded-2xl text-lg font-semibold shadow-lg  duration-300 hover:bg-blue-600 transition">
          Back To Home
        </button>
      </Link>
    </div>
    );
};

export default NotFoundPage;