"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import EvaluationForm from "./EvaluationForm";

const WhoIsItForSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const criteria = [
    "Founders of BSE/NSE listed companies",
    "CXOs managing ₹5000cr+ P&L",
    "Family office principals",
    "Medical professionals (physicians treating other HNIs)",
    "Celebrities (names confidential)",
  ];

  return (
    <section className="section-padding bg-[#003023] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cream rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-coral rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4">
            EXCLUSIVE COHORT ACCESS
          </span>
          
          <div className="mb-6 p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm inline-block">
            <p className="text-3xl sm:text-4xl font-bold text-[#9EFF00] mb-2">
              Q1 2026 Executive Cohort: 8 evaluations remaining
            </p>
            <p className="text-sm text-primary-foreground/80">
              Limited spots for personalized oversight.
            </p>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Current LIFESCC Executives Include:
          </h2>
          
          <p className="text-lg text-primary-foreground/80 mb-8">
            This represents medical access typically reserved for India's top 0.1%.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
            {criteria.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-5 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm text-left transition-transform hover:-translate-y-1"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-coral flex items-center justify-center">
                  <CheckCircle2 size={18} className="text-[#000000]" />
                </div>
                <p className="text-primary-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button
              onClick={() => setIsFormOpen(true)}
              className="btn-primary"
            >
              SECURE YOUR FREE EVALUATION
            </button>
          </div>
        </div>
      </div>

      <EvaluationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default WhoIsItForSection;
