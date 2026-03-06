import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Neha Malhotra",
      age: 46,
      location: "Partner, VC Fund | New Delhi",
      text: "LIFE RISE delivered what no trainer could: sustained energy through board meetings and family life. My partners notice the difference. My children now call me their 'Super Mom'.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    },
    {
      name: "Rohan Mehta",
      age: 52,
      location: "Founder, SaaS Company | Mumbai",
      text: "Medical precision replaced fitness guesswork. I maintain peak performance across Mumbai-Dubai travel cycles. My board believes I'm a decade younger.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    },
    {
      name: "Dr. Amit Kapoor",
      age: 58,
      location: "MD, Listed Company | Gurugram",
      text: "Capability preservation, not weight loss. Closed strategic acquisition feeling sharper than my leadership team. My daughter calls me her 'Iron Man' benchmark.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-soft-green text-primary text-sm font-medium mb-4">
            Executive Case Studies
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real Executive Results
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Hear from high-performing professionals who have transformed their lives with our program.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-elevated p-6"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-coral text-coral" />
                ))}
              </div>
              
              <Quote size={24} className="text-primary/30 mb-3" />
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}, {testimonial.age}
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
