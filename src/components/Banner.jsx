"use client";

import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 lg:py-20">
      <div className="flex flex-col-reverse lg:flex lg:flex-row gap-10 items-center">

        {/* Left Side */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-gray-900 text-center">
            A Loving Home
            <br />
         <span>Awaits</span> <span className="text-orange-500">
              Them
            </span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg max-w-xl text-center">
            Find your perfect furry friend and give them
            a safe, loving home. Adopt pets easily and
            change a life forever.
          </p>

          {/* Info Box */}
          <div className="flex flex-wrap gap-6 mt-8">

     

            <div className="flex items-center gap-3">
             
            </div>

          </div>

          {/* Button */}
          <div className="mt-10 text-center">

            <Link
              href="/all-pets"
              className="inline-flex items-center gap-3 bg-[linear-gradient(90deg,#ff8a3d_0%,#ff6b00_45%,#3b82f6_100%)] text-white px-8 p-2 rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 transition duration-300"
            >
              Adopt Now →
            </Link>

          </div>

        </div>

        {/* Right Side */}
        <div className="relative">

          <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

          <div className="relative z-10 flex justify-center">

            <Image
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
              alt="Dog"
              width={500}
              height={500}
              className="rounded-[40px] object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}