import { Shield, CircleCheckBig, Settings, Handshake } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Audit-Ready",
    description: "Immutable records at your fingertips. Always prepared for compliance reviews.",
  },
  {
    icon: CircleCheckBig,
    title: "Compliant",
    description: "Built around global standards such as GDPR, HIPAA, SOX, eIDAS",
  },
  {
    icon: Settings,
    title: "Seamless Integration",
    description: "Works with your existing systems for effortless adoption",
  },
  {
    icon: Handshake,
    title: "Vendor Neutral",
    description: "Independent verification. No lock-in. Complete transparency.",
  },
];

const trustIndicators = [
  {
    icon: Shield,
    title: "SOC 2 Compliant",
    subtitle: "Enterprise Security",
  },
  {
    icon: CircleCheckBig,
    title: "99.9% Uptime",
    subtitle: "Always Available",
  },
  {
    icon: Handshake,
    title: "24/7 Support",
    subtitle: "Expert Assistance",
  },
];

const EnterpriseFeatures = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-arkova-gray-50/50 to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-arkova-blue/4 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-[450px] h-[450px] bg-arkova-accent/4 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-arkova-blue-5 border border-arkova-blue-20 mb-6 md:mb-7 backdrop-blur-sm hover:bg-arkova-blue-8 transition-colors duration-300">
            <span className="text-xs sm:text-sm font-semibold text-arkova-blue uppercase tracking-wider">Why Arkova</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-arkova-dark tracking-tight">Enterprise-Grade Compliance</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">Trusted by organizations worldwide for blockchain-verified document integrity</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 max-w-7xl mx-auto mb-16 md:mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group relative">
                <div className="relative bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-arkova-blue/30 transition-all duration-500 h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-arkova-blue-5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-arkova-blue/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-center mb-6 md:mb-7">
                      <div className="relative">
                        <div className="absolute inset-0 bg-arkova-blue/20 rounded-xl blur-lg group-hover:blur-xl group-hover:bg-arkova-blue/30 transition-all duration-500"></div>
                        <div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-xl bg-gradient-to-br from-arkova-blue-10 to-arkova-blue-5 flex items-center justify-center border border-arkova-blue-20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                          <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-arkova-blue group-hover:scale-110 transition-transform duration-500" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-3 md:mb-4 text-center text-arkova-dark group-hover:text-arkova-blue transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-arkova-muted-foreground text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-1 bg-gradient-to-r from-transparent via-arkova-blue to-transparent transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 sm:gap-x-16 md:gap-x-20 gap-y-8 md:gap-y-10">
          {trustIndicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <div key={index} className="flex items-center gap-3 sm:gap-4 group cursor-default">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-arkova-blue-10 to-arkova-blue-5 flex items-center justify-center border border-arkova-blue-20 group-hover:scale-110 transition-transform duration-300 shadow-sm flex-shrink-0">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-arkova-blue" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-arkova-dark group-hover:text-arkova-blue transition-colors duration-300">{indicator.title}</div>
                  <div className="text-xs text-arkova-muted-foreground">{indicator.subtitle}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseFeatures;