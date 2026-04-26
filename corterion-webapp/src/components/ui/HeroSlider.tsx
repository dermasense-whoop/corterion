"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RevealText } from "@/components/animations/RevealText";

const slides = [
  {
    id: 1,
    title: "Certainty,",
    subtitle: "Engineered.",
    desc: "AI-powered diagnostic systems built for precision, early detection, and scalable healthcare delivery. We build the MedTech infrastructure of tomorrow.",
    btnText: "Read the press release",
    bgImage: "https://images.unsplash.com/photo-1576091160550-2173ff9e8eb3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Clinical",
    subtitle: "Precision.",
    desc: "Validated against industry gold-standards, ensuring data fidelity from capture to diagnostic output at the edge.",
    btnText: "Discover the technology",
    bgImage: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Global",
    subtitle: "Scale.",
    desc: "Enterprise diagnostic solutions designed to deploy instantly across hundreds of clinics worldwide.",
    btnText: "Enterprise solutions",
    bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Swipe gesture states
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Minimum swipe distance (in px) to trigger slide change
  const minSwipeDistance = 50;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Touch Event Handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // Reset touch end
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swiping left moves to the next slide
      nextSlide();
    } else if (isRightSwipe) {
      // Swiping right moves to the previous slide
      prevSlide();
    }
  };

  return (
    <div 
      className="relative w-full h-full min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-32 overflow-hidden bg-black touch-pan-y"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEndHandler}
    >
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div 
          key={`bg-${slide.id}`}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
        >
          <img 
            src={slide.bgImage} 
            alt={`Slide ${index + 1} background`}
            className="w-full h-full object-cover opacity-60"
          />
          {/* Gradient Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-corterion-navy/80 to-black/40" />
        </div>
      ))}

      {/* Navigation Arrows (Hidden on Mobile, handled by swipe) */}
      <button 
        onClick={prevSlide}
        className="hidden md:block absolute left-4 md:left-8 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all hover:scale-110 active:scale-95"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button 
        onClick={nextSlide}
        className="hidden md:block absolute right-4 md:right-8 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all hover:scale-110 active:scale-95"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 md:px-16 flex flex-col items-center text-center mt-10 h-full justify-center pointer-events-none">
        {slides.map((slide, index) => (
          <div 
            key={`content-${slide.id}`}
            className={`absolute transition-all duration-1000 transform ${
              currentSlide === index ? "opacity-100 translate-y-0 relative" : "opacity-0 translate-y-8 absolute"
            }`}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight leading-tight drop-shadow-2xl">
              {slide.title} <br/>
              <span className="italic text-white/90">{slide.subtitle}</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 font-medium leading-relaxed mb-10 drop-shadow-md">
              {slide.desc}
            </p>
            <button className="pointer-events-auto px-8 py-4 bg-white text-corterion-navy font-bold tracking-wide rounded-full hover:bg-corterion-cyan hover:text-white transition-all shadow-2xl hover:shadow-corterion-cyan/20 active:scale-95">
              {slide.btnText}
            </button>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-12 z-20 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              currentSlide === index ? "bg-corterion-cyan scale-125" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
