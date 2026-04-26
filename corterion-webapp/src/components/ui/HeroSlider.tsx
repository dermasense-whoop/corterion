"use client";

import { useState, useEffect } from "react";
import { RevealText } from "@/components/animations/RevealText";

const slides = [
  {
    id: 1,
    title: "Certainty,",
    subtitle: "Engineered.",
    desc: "AI-powered diagnostic systems built for precision, early detection, and scalable healthcare delivery. We build the MedTech infrastructure of tomorrow.",
    btnText: "Read the press release",
    bgClass: "from-corterion-navy-light via-corterion-navy to-black",
  },
  {
    id: 2,
    title: "Clinical",
    subtitle: "Precision.",
    desc: "Validated against industry gold-standards, ensuring data fidelity from capture to diagnostic output at the edge.",
    btnText: "Discover the technology",
    bgClass: "from-corterion-navy via-[#0A1128] to-black",
  },
  {
    id: 3,
    title: "Global",
    subtitle: "Scale.",
    desc: "Enterprise diagnostic solutions designed to deploy instantly across hundreds of clinics worldwide.",
    btnText: "Enterprise solutions",
    bgClass: "from-[#0F172A] via-[#020617] to-black",
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-32">
      {/* Backgrounds */}
      {slides.map((slide, index) => (
        <div 
          key={`bg-${slide.id}`}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
        >
          <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${slide.bgClass} opacity-80`} />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center mt-10 h-full justify-center">
        {slides.map((slide, index) => (
          <div 
            key={`content-${slide.id}`}
            className={`absolute transition-all duration-1000 transform ${
              currentSlide === index ? "opacity-100 translate-y-0 relative" : "opacity-0 translate-y-8 absolute pointer-events-none"
            }`}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight leading-tight drop-shadow-2xl">
              {slide.title} <br/>
              <span className="italic text-white/90">{slide.subtitle}</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 font-medium leading-relaxed mb-10 drop-shadow-md">
              {slide.desc}
            </p>
            <button className="px-8 py-4 bg-white text-corterion-navy font-bold tracking-wide rounded-full hover:bg-white/90 transition-colors shadow-2xl">
              {slide.btnText}
            </button>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-16 z-20 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              currentSlide === index ? "bg-white scale-125" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
