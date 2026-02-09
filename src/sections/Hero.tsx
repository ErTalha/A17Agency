import { useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, Users, Camera, Award } from 'lucide-react';

const Hero = () => {
  const carouselRef1 = useRef<HTMLDivElement>(null);
  const carouselRef2 = useRef<HTMLDivElement>(null);

  const carouselItems = [
    { image: '/images/hero-cfo.jpg', title: 'CFO Advisory', subtitle: 'Financial Excellence' },
    { image: '/images/service-branding.jpg', title: 'Brand Scaling', subtitle: 'Personal Growth' },
    { image: '/images/service-fitness.jpg', title: 'Fitness Influencers', subtitle: 'Lifestyle Management' },
    { image: '/images/service-content.jpg', title: 'Content Production', subtitle: 'Premium Shoots' },
    { image: '/images/service-mentorship.jpg', title: 'Mentorship', subtitle: 'Elite Guidance' },
    { image: '/images/service-partnerships.jpg', title: 'Partnerships', subtitle: 'Brand Relations' },
  ];

  useEffect(() => {
    // Ensure smooth animation
    const carousels = [carouselRef1.current, carouselRef2.current];
    carousels.forEach((carousel) => {
      if (carousel) {
        carousel.style.willChange = 'transform';
      }
    });
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen grid lg:grid-cols-2 items-center gap-8 lg:gap-16 pt-24 pb-12"
      style={{ paddingLeft: 'var(--pad)', paddingRight: 'var(--pad)' }}
    >
      {/* Left Content */}
      <div className="flex flex-col justify-center order-2 lg:order-1">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-fit mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-sm text-white/70">Elite Agency Services</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
          Elevate Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">
            Brand & Business
          </span>
        </h1>
        
        <p className="text-lg text-white/60 mb-8 max-w-xl leading-relaxed">
          Strategic financial advisory, personal brand development, and elite content production 
          for entrepreneurs, creators, and businesses ready to scale.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <TrendingUp size={18} className="text-white/80" />
            </div>
            <div>
              <p className="text-xl font-bold">$50M+</p>
              <p className="text-xs text-white/50">Revenue Managed</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Users size={18} className="text-white/80" />
            </div>
            <div>
              <p className="text-xl font-bold">500+</p>
              <p className="text-xs text-white/50">Clients Served</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Camera size={18} className="text-white/80" />
            </div>
            <div>
              <p className="text-xl font-bold">10K+</p>
              <p className="text-xs text-white/50">Content Pieces</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Award size={18} className="text-white/80" />
            </div>
            <div>
              <p className="text-xl font-bold">15+</p>
              <p className="text-xs text-white/50">Years Experience</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => scrollToSection('#pricing')}
            className="btn-primary flex items-center justify-center gap-2 group"
          >
            Explore Services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => scrollToSection('#consultation')}
            className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all"
          >
            Free Consultation
          </button>
        </div>
      </div>

      {/* Right Content - Carousel */}
      <div className="flex flex-col gap-5 overflow-hidden order-1 lg:order-2">
        {/* Top Row - Scrolling Left */}
        <div className="overflow-hidden" style={{ WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, #000 5%, #000 95%, transparent 100%)' }}>
          <div 
            ref={carouselRef1}
            className="flex gap-5 animate-scroll-left hover-pause"
            style={{ width: 'max-content' }}
          >
            {[...carouselItems, ...carouselItems].map((item, index) => (
              <div 
                key={`row1-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-[350px] lg:w-[400px] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 group cursor-pointer"
              >
                <div className="relative h-[180px] sm:h-[220px] lg:h-[250px] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-white/60">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Scrolling Right */}
        <div className="overflow-hidden" style={{ WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, #000 5%, #000 95%, transparent 100%)' }}>
          <div 
            ref={carouselRef2}
            className="flex gap-5 animate-scroll-right hover-pause"
            style={{ width: 'max-content' }}
          >
            {[...carouselItems.slice(3), ...carouselItems.slice(0, 3), ...carouselItems.slice(3), ...carouselItems.slice(0, 3)].map((item, index) => (
              <div 
                key={`row2-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-[350px] lg:w-[400px] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 group cursor-pointer"
              >
                <div className="relative h-[180px] sm:h-[220px] lg:h-[250px] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-white/60">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
