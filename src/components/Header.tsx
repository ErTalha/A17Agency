import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[rgba(10,14,39,0.9)] backdrop-blur-xl py-4'
          : 'bg-transparent py-6'
      }`}
      style={{ paddingLeft: 'var(--pad)', paddingRight: 'var(--pad)' }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="text-2xl font-bold tracking-[3px] text-white hover:opacity-80 transition-opacity"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          A17
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#consultation"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#consultation');
            }}
            className="btn-primary text-sm py-3 px-6"
          >
            Free Consultation
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[rgba(10,14,39,0.95)] backdrop-blur-xl border-t border-white/10">
          <nav className="flex flex-col py-6 px-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-lg font-medium text-white/70 hover:text-white transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#consultation"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#consultation');
              }}
              className="btn-primary text-center mt-4"
            >
              Free Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
