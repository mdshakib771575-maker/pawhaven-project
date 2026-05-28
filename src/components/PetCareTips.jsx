// PetCareTips.jsx

import { Bone, Dumbbell, Syringe, Stethoscope } from "lucide-react";

const PetCareTips = () => {
  const tips = [
    {
      id: 1,
      title: "Regular Checkups",
      desc: "Visit the veterinarian regularly to ensure good health.",
      icon: <Stethoscope className="w-10 h-10 text-blue-500" />,
    },
    {
      id: 2,
      title: "Healthy Food",
      desc: "Provide nutritious food and clean water every day.",
      icon: <Bone className="w-10 h-10 text-orange-500" />,
    },
    {
      id: 3,
      title: "Daily Exercise",
      desc: "Exercise helps pets stay active and mentally healthy.",
      icon: <Dumbbell className="w-10 h-10 text-green-500" />,
    },
    {
      id: 4,
      title: "Vaccination",
      desc: "Keep vaccinations updated for a safe and healthy life.",
      icon: <Syringe className="w-10 h-10 text-pink-500" />,
    },
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Pet Care Tips
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Follow these tips to keep your pets healthy, active, and happy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition"
            >
              <div className="mb-4">{tip.icon}</div>

              <h3 className="text-xl font-semibold mb-3">
                {tip.title}
              </h3>

              <p className="text-gray-500">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetCareTips;