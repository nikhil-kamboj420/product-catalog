import { useState } from "react";
import products from "../products.json";
import heroBg from "../assets/heroBg.png";
import useMobile from "../hooks/useMobile";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMobile();

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

  if (isMobile) {
    return (
      <main className="relative w-full min-h-[70vh] overflow-hidden bg-slate-100 px-4 py-6">
        <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1671717724869-bc8641046098?q=80&w=387&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="relative mx-auto flex max-w-[95vw] flex-col items-center gap-4">
          <div className="w-full overflow-hidden rounded-[2rem] bg-white shadow-lg">
            <img
              src={url}
              alt={name}
              className="h-[260px] w-full object-cover"
            />
          </div>
          <div className="w-full rounded-[2rem] bg-white p-5 shadow-sm">
            <h1 className="text-2xl font-semibold text-slate-900">{name}</h1>
            <div className="mt-4 flex gap-3">
              <button
                onClick={handlePrevious}
                className="flex-1 rounded-full bg-slate-200 px-4 py-3 text-sm font-semibold text-slate-700"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="flex-1 rounded-full bg-blue-800 px-4 py-3 text-sm font-semibold text-white"
              >
                Next
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              {products.slice(0, 5).map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === currentIndex ? "bg-blue-800" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{ backgroundImage: `url(${heroBg})` }}
      className="md:max-w-screen md:min-h-[70vh] md:bg-cover md:bg-center md:relative md:flex md:items-center md:justify-around md:gap-10"
    >
      <div className="md:max-w-120">
        <img src={url} alt={name} className="md:max-w-120 md:rounded-3xl" />
      </div>
      <span className="md:text-7xl md:text-black md:font-semibold">{name}</span>
      <button
        onClick={handlePrevious}
        className="md:bg-white md:text-3xl md:text-black md:px-8 md:py-8 md:font-bold md:absolute md:top-64 md:left-10"
      >
        く
      </button>
      <button
        onClick={handleNext}
        className="md:rotate-180 md:bg-white md:text-3xl md:text-black md:px-8 md:py-8 md:font-bold md:absolute md:top-64 md:right-10"
      >
        く
      </button>
    </main>
  );
};

export default Hero;
