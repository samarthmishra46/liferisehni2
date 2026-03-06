"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Q1. Is this program completely online?",
      answer: "Yes. 100% digital delivery. Physician consultations via secure Zoom. Protocols via executive app. 12,000+ transformations completed remotely across 4 clinic-governed locations. No clinic visits. No schedule disruption. Medical-grade, not YouTube fitness.",
    },
    {
      question: "Q2. Who is this program actually meant for?",
      answer: "High-performing executives 40-60. 58% of cohort aged 50+. CXOs, founders, senior leaders seeking sustainable capacity restoration—not temporary Instagram fitness. 560+ professionals transformed who refuse biological decline.",
    },
    {
      question: "Q3. How is this different from online fitness programs or apps?",
      answer: "Medical diagnostics vs fitness guesswork. Doctors analyze 5 biomarkers (metabolism, muscle quality, stress-recovery axis) that apps ignore. 97% adherence rate vs 23% fitness app average. 4 clinic medical teams oversee your protocol remotely.",
    },
    {
      question: "Q4. Is this safe for people above 50?",
      answer: "Yes. 58% cohort aged 50+. Joint-preserving protocols. Zero injury incidents across 560 cases. Physician oversight eliminates risk. +14% strength gains without joint stress—medically verified.",
    },
    {
      question: "Q5. Will this involve extreme dieting or intense workouts?",
      answer: "No intensity, no restriction. 88% adherence nutrition architecture (no food logging). Movement protocols match executive recovery capacity (43% below age 40 baseline). Burnout prevention built-in.",
    },
    {
      question: "Q7. How soon can I expect to see results?",
      answer: "Week 4: Energy sustained 2+ hours longer daily. Week 8: +14% strength gains (verified protocol average). 97% report measurable capacity improvement by month 3. 4-week evaluation confirms your trajectory.",
    },
    {
      question: "Q8. Will someone actually monitor my progress?",
      answer: "Yes. Weekly 12-minute physician review. Real-time adjustments based on your biomarkers—not generic timelines. 97% plateau prevention rate. 12,000 cases prove consistent physician oversight works.",
    },
    {
      question: "Q9. Is this program private and confidential?",
      answer: "Bank-grade AES-256 encryption. CXO-level discretion protocol across all 12,000 cases. Zero data breaches. Secure Zoom consults. Executive app with biometric authentication. Privacy exceeds banking standards.",
    },
    {
      question: "Q10. Is there any obligation after the initial evaluation?",
      answer: "Zero obligation. 27-minute physician evaluation reveals your exact medical roadmap. No progress in 4 weeks? No continuation required. Clarity without commitment. 100% risk-free entry.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-soft-green text-primary text-sm font-medium mb-4">
              FAQ
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Got questions? We've got answers.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-2xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
