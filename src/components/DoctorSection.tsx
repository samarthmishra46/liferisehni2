import { Award, GraduationCap, Users, Clock } from "lucide-react";

const DoctorSection = () => {
  const credentials = [
    {
      icon: <GraduationCap className="text-primary" size={24} />,
      title: "Qualified Dietitian",
      description: "M.Sc in Dietetics & Food Service Management",
    },
    {
      icon: <Award className="text-primary" size={24} />,
      title: "Certified Expert",
      description: "Certified Diabetes Educator & Weight Management Specialist",
    },
    {
      icon: <Clock className="text-primary" size={24} />,
      title: "18+ Years Experience",
      description: "Extensive clinical experience in metabolic health",
    },
    {
      icon: <Users className="text-primary" size={24} />,
      title: "5000+ Clients Transformed In Last Batch",
      description: "Successfully transformed thousands of lives",
    },
  ];

  return (
    <section id="doctor" className="section-padding bg-background">
      <div className="container-custom">
        <div className="pr-12 pl-12 lg:pr-15 lg:pl-15 items-center">
          {/* Image - Left Side */}
          <div className="relative">
            
            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-primary/10 rounded-full blur-3xl" />
          </div>

          {/* Content - Right Side */}
          <div>
            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-soft-green text-primary text-xs sm:text-sm font-medium mb-2 sm:mb-4">
              Meet Your Expert
            </span>
            
            <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-1 sm:mb-2">
              DT Prathibha M
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg text-primary font-semibold mb-2 sm:mb-6">
              Founder & Chief Dietitian, LIFE RISE
            </p>
            
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {credentials.map((credential, index) => (
                <div
                  key={index}
                  className="p-2 sm:p-4 rounded-lg sm:rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-soft-green flex items-center justify-center mb-1 sm:mb-3">
                    <span className="scale-50 sm:scale-100">{credential.icon}</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-xs sm:text-base mb-0.5 sm:mb-1">{credential.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">{credential.description}</p>
                </div>
              ))}
            </div> 

            <br />
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-2 sm:mb-6 hidden sm:block">
              With over <strong className="text-foreground">18 years of dedicated experience</strong> in clinical nutrition and metabolic health, 
              DT Prathibha M has helped thousands of individuals achieve sustainable weight loss and improved health outcomes.
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-2 sm:mb-6 hidden lg:block">
              Her approach combines <strong className="text-foreground">evidence-based medical nutrition therapy</strong> with personalized 
              lifestyle interventions, ensuring each client receives a tailored program that addresses their unique metabolic profile.
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-8 hidden lg:block">
              As a pioneer in digital health transformation, she leads a <strong className="text-foreground">multidisciplinary team</strong> of 
              doctors, fitness experts, and health coaches to deliver comprehensive 360° care to clients across the globe.
            </p>

            {/* Mobile summary text */}
            <p className="text-sm text-muted-foreground mb-3 sm:hidden">
              With <strong className="text-foreground">18+ years of experience</strong>, DT Prathibha M leads a multidisciplinary team delivering comprehensive 360° care.
            </p>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
