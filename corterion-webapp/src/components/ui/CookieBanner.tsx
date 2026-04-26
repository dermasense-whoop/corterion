"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted/declined cookies
    const hasConsented = localStorage.getItem("corterion_cookie_consent");
    if (!hasConsented) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("corterion_cookie_consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-4 md:p-6 translate-y-0 transition-transform duration-500">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white/95 backdrop-blur-xl border border-black/10 shadow-2xl rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 pr-8">
            <h4 className="font-serif text-xl text-corterion-navy mb-2">Your Privacy Matters</h4>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              We use cookies to improve your browsing experience, deliver personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies as described in our Privacy Policy.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button 
              onClick={() => setIsVisible(false)}
              className="px-6 py-3 border border-black/10 text-corterion-navy font-bold rounded-lg hover:bg-slate-50 transition-colors text-sm"
            >
              Cookie Settings
            </button>
            <button 
              onClick={acceptCookies}
              className="px-6 py-3 bg-corterion-navy text-white font-bold rounded-lg hover:bg-black transition-colors shadow-xl shadow-corterion-navy/20 text-sm"
            >
              Accept All
            </button>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-slate-400 hover:text-corterion-navy transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
