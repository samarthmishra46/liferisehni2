import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#00190D] text-[#EBFFEB] section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#9EFF00] flex items-center justify-center">
                <span className="text-[#00140A] font-serif font-bold text-lg">L</span>
              </div>
              <span className="font-serif text-xl font-semibold">LIFE RISE</span>
            </div>
            <p className="text-[#EBFFEB]/70 mb-6 max-w-md">
              Young After 40 – A holistic, 100% digital wellness and weight management program 
              designed for individuals above 40. 18+ years of expertise in transforming lives.
            </p>
            <div className="space-y-2">
              <a href="mailto:info@liferise.com" className="flex items-center gap-2 text-[#EBFFEB]/70 hover:text-[#D7FFE5] transition-colors">
                <Mail size={18} />
                info@liferise.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-[#EBFFEB]/70 hover:text-[#D7FFE5] transition-colors">
                <Phone size={18} />
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Program", "Benefits", "Results", "FAQ"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[#EBFFEB]/70 hover:text-[#D7FFE5] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Refund Policy"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#EBFFEB]/70 hover:text-[#D7FFE5] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#EBFFEB]/20 text-center">
          <p className="text-[#EBFFEB]/60 text-sm">
            © {new Date().getFullYear()} LIFE RISE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
