import { MessageSquare, CheckCircle, ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';

const Consultation = () => {
  const benefits = [
    'Identify your weakest points and fastest wins',
    'Pinpoint gaps in your brand, content, or business',
    'Clear explanation of what\'s holding you back',
    'Practical steps to fix identified issues',
    'No fluff, just actionable clarity',
  ];

  const process = [
    {
      icon: MessageSquare,
      title: 'Initial Call',
      description: '30-minute discovery session to understand your goals and challenges.',
    },
    {
      icon: Target,
      title: 'Gap Analysis',
      description: 'We identify weaknesses and opportunities in your current strategy.',
    },
    {
      icon: Zap,
      title: 'Action Plan',
      description: 'Receive a clear roadmap with practical steps to accelerate growth.',
    },
    {
      icon: TrendingUp,
      title: 'Implementation',
      description: 'Optional ongoing support to execute the recommended strategies.',
    },
  ];

  return (
    <section id="consultation" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative" style={{ paddingLeft: 'var(--pad)', paddingRight: 'var(--pad)' }}>
        <div className="max-w-[1200px] mx-auto">
          {/* Main CTA Card */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full blur-2xl" />
            
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-green-300">Complimentary</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Initial Strategic Consultation
              </h2>
              
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
                Receive a complimentary strategic breakdown identifying your weakest points and fastest wins. 
                We pinpoint gaps in your brand, content, or business, clearly explain what&apos;s holding you back, 
                and outline practical steps to fix it.
              </p>

              {/* Benefits */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 text-left"
                  >
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                    <span className="text-sm text-white/80">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="btn-primary flex items-center justify-center gap-2 group text-base"
                  onClick={() => {
                    alert('Thank you for your interest! Our team will contact you within 24 hours to schedule your complimentary consultation.');
                  }}
                >
                  Book Your Free Consultation
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <p className="text-white/40 text-sm mt-6">
                No commitment required. Limited spots available each month.
              </p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="mt-16">
            <h3 className="text-center text-xl font-semibold mb-10">How It Works</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <div 
                  key={index}
                  className="relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 text-center group hover:border-white/[0.15] transition-all"
                >
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/10 transition-colors">
                    <step.icon size={26} className="text-blue-400" />
                  </div>
                  
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-white/60">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
