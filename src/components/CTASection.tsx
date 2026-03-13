"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import EvaluationForm from "./EvaluationForm";

const CTASection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="contact" className="section-padding bg-[#00190D] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D7FFE5] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#D1F0DC] rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EBFFEB] mb-6">
            Millionaires Age Like This.
          </h2>
          
          <p className="text-xl text-[#EBFFEB]/80 mb-4">
            Picture this:
          </p>
          
          <ul className="text-lg text-[#EBFFEB]/90 mb-8 space-y-2 max-w-2xl mx-auto text-left">
            <li className="flex items-start gap-2">
              <span className="text-[#9EFF00] mt-1">•</span>
              <span>Your daughter watching you lead the family hike she thought you'd skip</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#9EFF00] mt-1">•</span>
              <span>Your son asking, "Dad, how are you sharper than my friends' fathers?"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#9EFF00] mt-1">•</span>
              <span>Your board whispering, "He closed Q4 at 52 like he's 42"</span>
            </li>
          </ul>

          <div className="bg-[#EBFFEB]/10 rounded-2xl p-6 mb-6 max-w-2xl mx-auto">
            <p className="text-2xl font-bold text-[#9EFF00] mb-2">Q1 2026 Cohort: 8 spots remain.</p>
            <p className="text-lg text-[#EBFFEB]/80">Closes Friday, Jan 17th.</p>
          </div>
          
          <p className="text-lg text-[#EBFFEB]/90 mb-8">
            127 executives joined in 2025 alone<br />
            The founders you respect, CXOs building BSE giants, family offices shaping India's future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button
              onClick={() => setIsFormOpen(true)}
              className="btn-primary group text-lg px-10 py-5"
            >
              SECURE YOUR FREE EVALUATION
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <p className="text-sm text-[#EBFFEB]/80 mb-12">
            27-min physician consult. Starts Monday.
          </p>

          <p className="text-md text-white font-semibold max-w-2xl mx-auto">
            <strong>Disclaimer:</strong> Results may vary based on individual health conditions. 
            All treatments are provided under medical supervision.
          </p>
        </div>
      </div>

      <EvaluationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default CTASection;
