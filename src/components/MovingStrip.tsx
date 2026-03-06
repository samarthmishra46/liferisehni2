const MovingStrip = () => {
  const testimonial = {
    text: "560+ CXOs, founders, and senior executives across India transformed by LIFESCC. \"As a Mumbai-based CEO managing 14-hour days and international travel, I needed more than motivation. LIFESCC's medical system delivered measurable strength gains and energy stability within 6 weeks. I perform at levels I hadn't sustained in a decade.\"",
    author: "— Raghav S., Founder & CEO"
  };

  return (
    <div className="relative w-full overflow-hidden py-6 bg-soft-green border-y border-primary/20">
      {/* Left Blur */}
      <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-soft-green to-transparent z-10"></div>

      {/* Right Blur */}
      <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-soft-green to-transparent z-10"></div>

      {/* Marquee Wrapper */}
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="flex-shrink-0 px-8">
            <p className="text-foreground text-white sm:text-lg">
              {testimonial.text} <span className="font-semibold text-primary">{testimonial.author}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingStrip;
