import { Check, Sparkles, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter Plan',
      price: '$399',
      period: 'weekly',
      description: 'Best for: New ventures',
      fullDescription: 'For small businesses or startups that need basic financial management but do not require extensive strategic input.',
      features: [
        'Prepare monthly financial statements (P&L, Balance Sheet, Cash Flow)',
        'Analyse monthly cash flow and provide recommendations',
        'Review accounts for compliance and accuracy',
        'Ensuring tax filings and regulatory deadlines are on track',
        'Monthly consultations and email support',
      ],
      recommended: false,
    },
    {
      name: 'Growth Plan',
      price: '$999',
      period: 'weekly',
      description: 'Best for: Scaling teams',
      fullDescription: 'For growing businesses that need more hands-on financial support and strategic insights to scale effectively.',
      features: [
        'Custom financial reports with key performance indicators (KPIs)',
        'Quarterly financial forecasting and budget planning',
        'What-If analyses to test financial impact of decisions',
        'Profitability analysis by product, service, or customer',
        'One-on-one meetings to review financial health and strategies',
        'Oversight of processes for accounts payable and receivable',
      ],
      recommended: true,
    },
    {
      name: 'Comprehensive Plan',
      price: '$1,359',
      period: 'weekly',
      description: 'Best for: CFO-level support',
      fullDescription: 'For established businesses that need holistic CFO services and comprehensive financial strategies.',
      features: [
        'End-to-end financial management including internal controls',
        'Long-term financial strategy aligned with business goals',
        'Preparation of investor reports and fundraising support',
        'Collaboration with tax advisors for tax-saving opportunities',
        'Leading finance teams and coordinating with bookkeepers',
        'Priority email and phone access for timely guidance',
        'Rolling 12-month financial forecasts updated monthly',
      ],
      recommended: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-black">
      <div style={{ paddingLeft: 'var(--pad)', paddingRight: 'var(--pad)' }}>
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <Sparkles size={16} className="text-yellow-400" />
              <span className="text-sm text-white/70">CFO Advisory & Accounting</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Strategic Financial Oversight
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Receive elite-level financial oversight designed to bring clarity, control, 
              and confidence to your business. Tailored for growth-focused entrepreneurs and creators.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
              >
                {plan.recommended && (
                  <div className="absolute top-5 right-5 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-semibold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <div className="relative z-10">
                  <p className="text-sm text-white/50 mb-2">{plan.description}</p>
                  <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                  
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    <span className="text-white/50">/ {plan.period}</span>
                  </div>
                  
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    {plan.fullDescription}
                  </p>
                  
                  <div className="border-t border-white/10 pt-6 mb-6">
                    <p className="text-sm font-semibold mb-4 text-white/80">Includes:</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3 text-sm text-white/70">
                          <Check size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button 
                  className={`mt-auto w-full py-4 rounded-full font-semibold text-sm tracking-wide transition-all flex items-center justify-center gap-2 group ${
                    plan.recommended 
                      ? 'bg-white text-black hover:bg-white/90' 
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                  onClick={() => {
                    const element = document.querySelector('#consultation');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get Started
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
