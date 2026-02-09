import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Youtube, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'CFO Advisory', href: '#pricing' },
      { label: 'Brand Development', href: '#services' },
      { label: 'Content Production', href: '#services' },
      { label: 'Influencer Management', href: '#services' },
      { label: 'Mentorship Programme', href: '#services' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Free Consultation', href: '#consultation' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
    support: [
      { label: 'Contact', href: '#contact' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') {
      alert('Coming soon!');
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#050714] border-t border-white/10">
      {/* Main Footer */}
      <div style={{ paddingLeft: 'var(--pad)', paddingRight: 'var(--pad)' }}>
        <div className="max-w-[1200px] mx-auto py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <a 
                href="#" 
                className="text-3xl font-bold tracking-[4px] text-white mb-6 block"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                A17
              </a>
              <p className="text-white/60 mb-6 leading-relaxed">
                Elite agency services for entrepreneurs, creators, and businesses 
                ready to scale. Financial advisory, brand development, and premium 
                content production.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a 
                  href="mailto:contact@a17agency.com" 
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                  <span className="text-sm">contact@a17agency.com</span>
                </a>
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                >
                  <Phone size={18} />
                  <span className="text-sm">+1 (234) 567-890</span>
                </a>
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin size={18} />
                  <span className="text-sm">New York, NY / London, UK</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Social media links coming soon!');
                    }}
                  >
                    <social.icon size={18} className="text-white/70" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-3 gap-8">
                {/* Services */}
                <div>
                  <h4 className="font-semibold mb-5 text-white/90">Services</h4>
                  <ul className="space-y-3">
                    {footerLinks.services.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(link.href);
                          }}
                          className="text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-1 group"
                        >
                          {link.label}
                          <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h4 className="font-semibold mb-5 text-white/90">Company</h4>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(link.href);
                          }}
                          className="text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-1 group"
                        >
                          {link.label}
                          <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support */}
                <div>
                  <h4 className="font-semibold mb-5 text-white/90">Support</h4>
                  <ul className="space-y-3">
                    {footerLinks.support.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(link.href);
                          }}
                          className="text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-1 group"
                        >
                          {link.label}
                          <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div style={{ paddingLeft: 'var(--pad)', paddingRight: 'var(--pad)' }}>
          <div className="max-w-[1200px] mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              © {currentYear} A17 Agency. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-sm text-white/40 hover:text-white/60 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Privacy Policy coming soon!');
                }}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-sm text-white/40 hover:text-white/60 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Terms of Service coming soon!');
                }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
