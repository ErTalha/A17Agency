import { 
  UserCircle, 
  Dumbbell, 
  Camera, 
  Film, 
  GraduationCap, 
  Share2, 
  Handshake, 
  Palette, 
  TrendingUp, 
  Building2, 
  UserCheck, 
  Video, 
  Gift, 
  BookOpen,
  ArrowUpRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: UserCircle,
      title: 'Personal Brand Development',
      subtitle: 'Personal Brand Scaling',
      description: 'Unlock accelerated brand growth through a tailored, results-driven scaling strategy. We help micro-influencers and established creators refine positioning, elevate brand perception, and implement systems that drive audience growth, authority, and income.',
      image: '/images/service-branding.jpg',
    },
    {
      icon: Dumbbell,
      title: 'Fitness & Lifestyle Influencer Management',
      subtitle: 'Influencer Consultancy',
      description: 'Receive specialised consulting built for fitness, lifestyle, and health-focused creators. From content strategy to brand alignment and monetisation, we guide influencers through sustainable growth while increasing credibility.',
      image: '/images/service-fitness.jpg',
    },
    {
      icon: Camera,
      title: 'Content Strategy & Production',
      subtitle: 'Premium Content Packages',
      description: 'Access premium content production that positions you at the top of your niche. Includes consultation, high-end photo and video shoots (cars, yachts, private jets, luxury environments), and follow-up strategy calls.',
      image: '/images/service-content.jpg',
    },
    {
      icon: Film,
      title: 'End-to-End Production Management',
      subtitle: 'Professional Production Teams',
      description: 'Professional production teams at below-market rates without compromising quality. We manage videographers, editors, and creatives, ensuring seamless execution while delivering elite visuals.',
      image: '/images/service-production.jpg',
    },
    {
      icon: GraduationCap,
      title: 'Professional Mentorship Programme',
      subtitle: 'High-Level Mentorship',
      description: 'Receive high-level mentorship combining consulting, strategy, and real-world opportunity. Includes content shoots, business strategy development, website management, brand deal access, and networking opportunities.',
      image: '/images/service-mentorship.jpg',
    },
    {
      icon: Share2,
      title: 'Affiliate Programme Strategy',
      subtitle: 'Affiliate Management Services',
      description: 'Generate adaptable, low-maintenance passive income through performance-based partnerships. We handle affiliate setup, tracking, optimisation, and compliance with no upfront cost.',
      image: '/images/service-affiliate.jpg',
    },
    {
      icon: Handshake,
      title: 'Influencer Outreach & Partnerships',
      subtitle: 'Brand Relations',
      description: 'We connect influencers and brands through strategic, value-driven partnerships. From outreach to negotiation, we consult on affiliation agreements and manage relationships that benefit both parties.',
      image: '/images/service-partnerships.jpg',
    },
    {
      icon: Palette,
      title: 'Brand Identity & Positioning',
      subtitle: 'Brand Imagery Consulting',
      description: 'Refine how the world sees your brand and increase trust instantly. We consult on visuals, messaging, and presentation to ensure your brand communicates authority, professionalism, and desirability.',
      image: '/images/service-brand-identity.jpg',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing Strategy',
      subtitle: 'Online Marketing Management',
      description: 'End-to-end digital growth management for scaling businesses and creators. We oversee content production, social media strategy, Meta advertising, and affiliate systems to drive measurable online growth.',
      image: '/images/service-marketing.jpg',
    },
    {
      icon: Building2,
      title: 'Gym Growth & Operations Advisory',
      subtitle: 'Gym Expansion Consultancy',
      description: 'Strategic support for gym owners ready to scale operations and revenue. We consult on branding, marketing, systems, and expansion strategy to support sustainable growth.',
      image: '/images/service-gym.jpg',
    },
    {
      icon: UserCheck,
      title: 'Personal Training Business Consultancy',
      subtitle: 'PT Business Management',
      description: 'Helping trainers build authority, structure, and scalable income. We guide personal trainers in positioning, client acquisition, and brand development beyond trading time for money.',
      image: '/images/service-pt.jpg',
    },
    {
      icon: Video,
      title: 'Videography Education & Placement',
      subtitle: 'Videography Mentorship',
      description: 'Hands-on development for aspiring videographers entering the creator economy. We offer real-world experience, mentoring, production days, and potential long-term opportunities.',
      image: '/images/service-videography.jpg',
    },
    {
      icon: Gift,
      title: 'Client Rewards & Benefits Programme',
      subtitle: 'Exclusive Perks',
      description: 'Exclusive access to discounts, brand deals, and rewards through our partnerships. Designed to add tangible value to clients while strengthening loyalty and long-term collaboration.',
      image: '/images/service-rewards.jpg',
    },
    {
      icon: BookOpen,
      title: 'Masterclasses & Educational Programmes',
      subtitle: 'Advanced Learning',
      description: 'High-impact courses focused on confidence, networking, and relationship-building. Including programmes aimed at reducing insecurity and empowering individuals with social and professional skills.',
      image: '/images/service-masterclass.jpg',
      badge: 'Upcoming',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28">
      <div style={{ paddingLeft: 'var(--pad)', paddingRight: 'var(--pad)' }}>
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <ArrowUpRight size={16} className="text-blue-400" />
              <span className="text-sm text-white/70">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Comprehensive Solutions for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Creators & Businesses
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              From financial advisory to content production, we provide end-to-end services 
              designed to elevate your brand and accelerate your growth.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white/[0.03] border border-white/[0.08] rounded-3xl overflow-hidden hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/50 to-transparent" />
                  
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs font-semibold text-purple-300">
                      {service.badge}
                    </div>
                  )}
                  
                  {/* Icon */}
                  <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <service.icon size={22} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-2">
                    {service.subtitle}
                  </p>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <button 
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors group/btn"
                    onClick={() => {
                      const element = document.querySelector('#consultation');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Learn More
                    <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
