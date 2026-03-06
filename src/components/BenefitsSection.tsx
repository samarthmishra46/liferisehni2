import { Zap, Flame, Activity, TrendingDown, Moon, Heart, Sparkles } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Activity size={32} />,
      title: "Executive Performance Diagnostics",
      description: "Medical-grade analysis identifies root causes other programs miss.",
    },
    {
      icon: <Zap size={32} />,
      title: "Strategic Strength Restoration",
      description: "Clinical protocols rebuild functional capacity without joint compromise or schedule disruption.",
    },
    {
      icon: <Flame size={32} />,
      title: "Precision Nutrition Architecture",
      description: "Metabolic fueling optimized for executive calendars - no rigid meal timing, no food obsession.",
    },
    {
      icon: <Heart size={32} />,
      title: "Medical Performance Monitoring",
      description: "Continuous physician oversight ensures linear progress and adaptation.",
    },
  ];

  return (
    <section id="benefits" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-soft-green text-primary text-sm font-medium mb-4">
            Clinical Pillars
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            CLINICAL PILLARS OF LIFESCC EXECUTIVE PROGRAM
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Medical-grade protocols designed specifically for high-performing executives.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-soft-green group-hover:bg-primary flex items-center justify-center text-primary group-hover:text-primary-foreground transition-colors duration-300 mb-6">
                {benefit.icon}
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
