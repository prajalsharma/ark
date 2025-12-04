import { Upload, Link2, CircleCheckBig } from 'lucide-react';
import React from 'react';

const steps = [
  {
    number: "01",
    Icon: Upload,
    title: "Upload or Integrate",
    description: "Connect your DMS or drop a file. Seamless integration with your existing workflow.",
  },
  {
    number: "02",
    Icon: Link2,
    title: "Anchor on Bitcoin",
    description: "Cryptographic proof, publicly verifiable. Immutable record on the blockchain.",
  },
  {
    number: "03",
    Icon: CircleCheckBig,
    title: "Verify Anytime",
    description: "Instant checks for auditors and partners. Real-time verification at your fingertips.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-arkova-blue/20 to-transparent"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-arkova-blue-5 border border-arkova-blue-20 mb-6 md:mb-7 backdrop-blur-sm hover:bg-arkova-blue-8 transition-colors duration-300">
            <span className="text-xs sm:text-sm font-semibold text-arkova-blue uppercase tracking-wider">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-arkova-dark tracking-tight">
            Three Steps to Compliance
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Simple, powerful, and built for enterprise scale
          </p>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute top-[5rem] left-[16.666%] right-[16.666%] h-0.5 bg-gradient-to-r from-arkova-blue/20 via-arkova-blue/40 to-arkova-blue/20"></div>
          
          <div className="hidden md:block absolute top-[5rem] left-[16.666%] right-[16.666%] h-0.5 overflow-hidden">
            <div className="absolute inset-0 h-full w-1/3 bg-gradient-to-r from-transparent via-arkova-blue to-transparent" style={{ animation: 'flow-line 4s ease-in-out infinite' }}></div>
          </div>
          
          <div className="hidden md:block absolute top-[calc(5rem-0.375rem)] left-[16.666%] w-3 h-3 rounded-full bg-arkova-blue border-2 border-white -translate-x-1/2" style={{ animation: 'pulse-dot 4s ease-in-out infinite' }}></div>
          <div className="hidden md:block absolute top-[calc(5rem-0.375rem)] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-arkova-blue border-2 border-white" style={{ animation: 'pulse-dot 4s ease-in-out infinite 1.3s' }}></div>
          <div className="hidden md:block absolute top-[calc(5rem-0.375rem)] right-[16.666%] w-3 h-3 rounded-full bg-arkova-blue border-2 border-white translate-x-1/2" style={{ animation: 'pulse-dot 4s ease-in-out infinite 2.6s' }}></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-9 pt-12 sm:pt-14 md:pt-16 hover:border-arkova-blue/40 transition-all duration-500 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-arkova-blue-5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-6 sm:top-8 left-0 right-0 text-center z-10">
                    <span className="text-4xl sm:text-5xl font-bold text-arkova-blue/20 group-hover:text-arkova-blue/30 transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-start mb-6 md:mb-7 mt-2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-arkova-blue/20 rounded-2xl blur-xl group-hover:blur-2xl group-hover:bg-arkova-blue/30 transition-all duration-500"></div>
                        <div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-arkova-blue-10 to-arkova-accent-10 flex items-center justify-center border border-arkova-blue-20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <step.Icon className="h-7 w-7 sm:h-8 sm:w-8 text-arkova-blue group-hover:scale-110 transition-transform duration-500" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4 text-arkova-dark group-hover:text-arkova-blue transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-arkova-blue to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;