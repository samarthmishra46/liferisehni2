"use client";

import { Video, MessageSquare, Dumbbell, Smartphone, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import EvaluationForm from "./EvaluationForm";

const DigitalDelivery = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const features = [
    { icon: <Video size={24} />, text: "Bengaluru — Medical HQ & Research" },
    { icon: <MessageSquare size={24} />, text: "Hyderabad — Advanced Diagnostics" },
    { icon: <Dumbbell size={24} />, text: "Chennai — Clinical Excellence Centre" },
    { icon: <Smartphone size={24} />, text: "Coimbatore — Executive Transformation" },
  ];

  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-soft-green text-primary text-sm font-medium mb-4">
              Clinical Foundation
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              LifeRise Elite Online Program
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Delivered digitally. Governed clinically.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background"
                >
                  <div className="w-12 h-12 rounded-xl bg-soft-green flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <span className="font-medium text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-lg text-muted-foreground text-center">
                15+ years serving India's most discerning professionals.<br />
                Same medical teams, digital delivery.
              </p>
            </div>
            
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsFormOpen(true)}
                className="btn-primary"
              >
                SECURE YOUR FREE EVALUATION
              </button>
            </div>
          </div>
        </div>
      </div>

      <EvaluationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default DigitalDelivery;
