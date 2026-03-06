import { Sparkles, Users, Heart, Target } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Sparkles className="text-primary" size={28} />,
      title: "Energy sustains 8 hours, crashes by 4 PM",
      description: "Your physiology has shifted after 40, making it harder to maintain peak performance.",
    },
    {
      icon: <Users className="text-primary" size={28} />,
      title: "Workouts produce fatigue, not transformation",
      description: "Traditional fitness approaches fail to deliver the results you need.",
    },
    {
      icon: <Heart className="text-primary" size={28} />,
      title: "Midsection fat resists even perfect nutrition",
      description: "Stubborn weight gain despite disciplined eating habits.",
    },
    {
      icon: <Target className="text-primary" size={28} />,
      title: "Recovery demands days, not hours",
      description: "Your body takes longer to bounce back from stress and exertion.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-soft-gradient">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-soft-green text-primary text-sm font-medium mb-4">
              The Executive Reality
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              THE EXECUTIVE REALITY AFTER 40
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              You maintain exceptional professional discipline. You lead through complexity. You deliver results under pressure.
            </p>
            
            <p className="text-lg font-semibold text-foreground mb-4">
              Yet your physiology has shifted:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-soft-green flex items-center justify-center mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <p className="text-lg text-muted-foreground mb-6">
              You've invested in every solution: elite trainers, precision supplements, metabolic testing. 
              The returns don't justify the effort.
            </p>
            
            <p className="text-lg font-semibold text-foreground mb-6">
              The challenge isn't your discipline. It's outdated strategy.
            </p>
            
            <div className="p-6 rounded-xl bg-soft-green border-l-4 border-primary">
              <p className="text-xl font-semibold text-white mb-2">
                That's why we built<br />LifeRise Elite Online Transformation System
              </p>
              <p className="text-muted-foreground">
                Clinical architecture for executives who demand capacity, not appearance.
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://res.cloudinary.com/dvxqb1wge/image/upload/v1769469074/MAN_RUNNING_nrrbp5.png"
                  alt="Active lifestyle"
                  className="w-full rounded-2xl shadow-md"
                />
                
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://res.cloudinary.com/dvxqb1wge/image/upload/v1769469075/Gemini_Generated_Image_apgwv8apgwv8apgw_ughsnl.png"
                  alt="Medical consultation"
                  className="w-full rounded-2xl shadow-md"
                />
                
              </div>
              
            </div>
            <br />
            <img
                  src="https://res.cloudinary.com/dvxqb1wge/image/upload/v1769469067/MAN_WORKOUT_OUTSIDE_fyhdzf.png"
                  alt="Yoga and wellness"
                  className="w-full rounded-2xl shadow-md"
                />
            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
