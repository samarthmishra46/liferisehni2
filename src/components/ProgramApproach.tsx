"use client";

import { Stethoscope, Utensils, Dumbbell, HeartHandshake, Brain } from "lucide-react";
import { useState } from "react";
import EvaluationForm from "./EvaluationForm";

const ProgramApproach = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const approaches = [
    {
      icon: <Stethoscope size={32} />,
      title: "Phase 1: Precision Medical Evaluation (Week 1)",
      items: [
        "Metabolic efficiency and energy production",
        "Muscle quality and structural capacity",
        "Stress-recovery imbalances",
        "Lifestyle-performance disconnects",
        "Clear medical explanations. No fitness assumptions.",
      ],
    },
    {
      icon: <Utensils size={32} />,
      title: "Phase 2: Custom Executive Protocol (Weeks 1-4)",
      items: [
        "50-70 hour executive work weeks",
        "Frequent domestic/international travel",
        "Family and social commitments",
        "Zero tolerance for disruption",
      ],
    },
    {
      icon: <HeartHandshake size={32} />,
      title: "Phase 3: Continuous Medical Oversight",
      items: [
        "Weekly physician review",
        "Real-time protocol optimization",
        "Plateau prevention",
      ],
    },
  ];

  return (
    <section id="program" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-soft-green text-primary text-sm font-medium mb-4">
            Your Process
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            YOUR EXECUTIVE TRANSFORMATION PROCESS
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Private one-on-one consultation with LIFESCC physician analyzes your complete health profile and builds a custom protocol for your reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="card-elevated p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-soft-green flex items-center justify-center text-primary mb-6">
                {approach.icon}
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                {approach.title}
              </h3>
              
              <ul className="space-y-3">
                {approach.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-6">Built for your reality.</p>
          <button
            onClick={() => setIsFormOpen(true)}
            className="btn-primary"
          >
            SECURE YOUR FREE EVALUATION
          </button>
        </div>
      </div>

      <EvaluationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default ProgramApproach;
