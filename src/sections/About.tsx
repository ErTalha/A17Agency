import { Award, Users, TrendingUp, Globe, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Clients Worldwide' },
    { icon: TrendingUp, value: '$50M+', label: 'Revenue Managed' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Globe, value: '30+', label: 'Countries Served' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every strategy is designed with measurable outcomes in mind.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay ahead of trends to give you a competitive edge.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We prioritize long-term partnerships.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-b from-[#0f1535] to-[#0a0e27]">
      <div style={{ paddingLeft: 'var(--pad)', paddingRight: 'var(--pad)' }}>
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <Award size={16} className="text-yellow-400" />
              <span className="text-sm text-white/70">About A17 Agency</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Building Brands That
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Command Attention
              </span>
            </h2>
          </div>

          {/* Founder Image & Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <img 
                  src="/images/about-founder.jpg" 
                  alt="A17 Agency Founder"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27]/80 via-transparent to-transparent" />
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-6 lg:right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hidden sm:block">
                <p className="text-3xl font-bold mb-1">15+</p>
                <p className="text-sm text-white/60">Years of Excellence</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                Elite-Level Expertise for Ambitious Brands
              </h3>
              
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  A17 Agency was founded with a singular mission: to provide entrepreneurs, creators, 
                  and businesses with the strategic support they need to scale beyond their limits. 
                  We combine financial expertise, creative production, and brand development into 
                  a comprehensive service offering.
                </p>
                <p>
                  Our team brings together decades of experience across finance, marketing, content 
                  production, and influencer management. We&apos;ve worked with Fortune 500 companies, 
                  rising startups, and top-tier content creators, delivering results that speak for themselves.
                </p>
                <p>
                  What sets us apart is our commitment to personalized service. We don&apos;t believe 
                  in one-size-fits-all solutions. Every client receives a tailored strategy designed 
                  to address their unique challenges and capitalize on their specific opportunities.
                </p>
              </div>

              {/* Values */}
              <div className="mt-8 space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <value.icon size={18} className="text-white/70" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{value.title}</h4>
                      <p className="text-sm text-white/60">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 text-center hover:border-white/[0.15] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/10 transition-colors">
                  <stat.icon size={22} className="text-blue-400" />
                </div>
                <p className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
