"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import EvaluationForm from "./EvaluationForm";

const StickyBookNow = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <EvaluationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-[#00190D]/95 backdrop-blur-md border-t border-[#9EFF00]/20 px-4 py-3 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="container-custom flex items-center justify-between gap-4">
          <p className="hidden sm:block text-[#EBFFEB] text-sm md:text-base font-medium">
            Secure your free evaluation — only 8 spots remain.
          </p>
          <button
            onClick={() => setIsFormOpen(true)}
            className="btn-primary group text-sm md:text-base px-6 py-3 w-full sm:w-auto whitespace-nowrap"
          >
            Book Now
            <ArrowRight
              size={18}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default StickyBookNow;
