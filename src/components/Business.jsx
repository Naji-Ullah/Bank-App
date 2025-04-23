import React from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Send } from "lucide-react";

const features = [
  {
    id: "feature-1",
    icon: <Star className="w-6 h-6 text-white " />,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "100% Secured",
    content:
      "We take proactive steps to make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: <Send className="w-6 h-6 text-white" />,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

const featureCardVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const FeatureCard = ({ icon, title, content }) => (
  <motion.div
  
    variants={featureCardVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="flex flex-row items-start gap-4 p-6 bg-gradient-to-r from-black via-gray-800 to-gray-900 rounded-[33px] mb-8 w-full max-w-md "
  >
    <div className="bg-gray-700 p-4 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-semibold text-lg mb-1">{title}</h4>
      <p className="text-white text-sm">{content}</p>
    </div>
  </motion.div>
);

const Business = () => (
  <div className="flex flex-col items-center bg-gradient-to-r from-black via-gray-800 to-black p-10 pt-7">
    <section className="flex flex-col md:flex-row justify-between w-full max-w-6xl gap-12">
      {/* Text + CTA */}
      <div className="flex-1">
        <h2 className="text-white text-5xl font-bold leading-snug">
          You do the business, <br /> we’ll handle the money.
        </h2>
        <p className="text-gray-200 mt-5 max-w-md">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market...
        </p>
        <button className="mt-10 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-50 text-black py-2 px-6 rounded-full hover:from-yellow-700 hover:to-yellow-300 transition duration-300">
          Get Started
        </button>
      </div>

      {/* Features List */}
      <div className="flex-6 flex flex-col ">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature}  />
        ))}
      </div>
    </section>
  </div>
);

export default Business;
