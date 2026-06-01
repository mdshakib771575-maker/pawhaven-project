// WhyAdoptPets.jsx

import {
  HeartHandshake,
  ShieldCheck,
  Smile,
  PawPrint,
} from "lucide-react";

const WhyAdoptPets = () => {
  const cards = [
    {
      id: 1,
      title: "Save a Life",
      desc: "Every adoption gives a homeless pet a loving second chance.",
      icon: <HeartHandshake size={40} />,
    },
    {
      id: 2,
      title: "Join Our Community",
      desc: "Connect with thousands of happy pet owners worldwide.",
      icon: <Smile size={40} />,
    },
    {
      id: 3,
      title: "Verified & Safe",
      desc: "All pets are vaccinated and verified before being listed.",
      icon: <ShieldCheck size={40} />,
    },
    {
      id: 4,
      title: "Bring Happiness",
      desc: "Pets fill your life with unconditional love and joy.",
      icon: <PawPrint size={40} />,
    },
  ];

  return (
    <section className="py-15 rounded-2xl bg-amber-50 text-white mt-5 w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto px-4">

        {/* heading */}
        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-widest font-semibold mb-3">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-black">Adopt with</span> <span className="text-orange-500">Confidence</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            We make the adoption process simple, safe, and rewarding for both
            you and your future furry friend.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#111827] border border-gray-800 rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >
              <div className="sm:w-auto inline-flex items-center gap-3 bg-[linear-gradient(90deg,#ff8a3d_0%,#ff6b00_45%,#3b82f6_100%)] text-white px-2 p-2 rounded-2xl text-sm font-semibold shadow-lg hover:scale-105 transition duration-300">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {card.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAdoptPets;