import { useState } from "react";
import products from "../products.json";
import heroBg from "../assets/heroBg.png";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const { name, url } = products[currentIndex] || {};

  return (
    <main
      style={{ backgroundImage: `url(${heroBg})` }}
      className="max-w-screen min-h-[70vh] bg-cover bg-center relative flex items-center justify-around gap-10"
    >
      <div>
        <img
          src={url}
          alt={name}
          className="max-w-100 rounded-3xl aspect-2/2"
        />
      </div>
      <span className="text-7xl text-black font-semibold">{name}</span>
      <button
        onClick={handlePrevious}
        className="bg-white text-3xl text-black px-8 py-8 font-bold absolute top-64 left-10"
      >
        く
      </button>
      <button
        onClick={handleNext}
        className="rotate-180 bg-white text-3xl text-black px-8 py-8 font-bold absolute top-64 right-10"
      >
        く
      </button>
    </main>
  );
};

export default Hero;
