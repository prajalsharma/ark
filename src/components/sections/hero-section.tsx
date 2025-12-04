import { FileText, Shield, Lock, Link as LinkIcon, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-24 md:pb-32 bg-gradient-to-b from-gray-50/50 via-white to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.3]"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-arkova-blue/5 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-arkova-accent/8 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="hidden md:block absolute top-28 left-[8%] opacity-20 hover:opacity-40 transition-opacity duration-500 animate-float">
          <FileText className="h-12 w-12 text-arkova-blue" strokeWidth={1.5} />
        </div>
        <div className="hidden md:block absolute top-36 right-[10%] opacity-20 hover:opacity-40 transition-opacity duration-500 animate-float" style={{ animationDelay: '1s' }}>
          <Shield className="h-14 w-14 text-arkova-blue" strokeWidth={1.5} />
        </div>
        <div className="hidden md:block absolute top-64 left-[12%] opacity-20 hover:opacity-40 transition-opacity duration-500 animate-float" style={{ animationDelay: '2s' }}>
          <Lock className="h-10 w-10 text-arkova-blue" strokeWidth={1.5} />
        </div>
        <div className="hidden md:block absolute top-52 right-[15%] opacity-20 hover:opacity-40 transition-opacity duration-500 animate-float" style={{ animationDelay: '0.5s' }}>
          <LinkIcon className="h-11 w-11 text-arkova-blue" strokeWidth={1.5} />
        </div>
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-arkova-blue-5 border border-arkova-blue-20 mb-8 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="h-2 w-2 rounded-full bg-arkova-blue animate-pulse"></div>
            <span className="text-xs sm:text-sm font-semibold text-arkova-blue uppercase tracking-wider">
              Trusted by Enterprise Teams
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight leading-[1.05] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            <span className="block text-arkova-dark mb-2">Trustless Compliance</span>
            <span className="block gradient-text">for the Enterprise</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed font-light animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Bitcoin-anchored document verification that's always available, independently verifiable, and built for enterprise compliance.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-5 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <a 
              href="/signup" 
              className="group relative px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 btn-arkova-primary shadow-lg shadow-arkova-blue/25 hover:shadow-xl hover:shadow-arkova-blue/30 hover:-translate-y-1 active:translate-y-0 text-center inline-flex items-center justify-center gap-2"
            >
              <span className="relative z-10">Sign Up for Early Access</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a 
              href="/whitepaper" 
              className="group px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 btn-arkova-outline hover:border-arkova-blue hover:-translate-y-1 active:translate-y-0 text-center inline-flex items-center justify-center gap-2"
            >
              <span className="relative z-10">Read the Whitepaper</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a 
              href="/contact" 
              className="group px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 btn-arkova-outline hover:border-arkova-blue hover:-translate-y-1 active:translate-y-0 text-center inline-flex items-center justify-center gap-2"
            >
              <span className="relative z-10">Contact the Team</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-20 md:mt-24 flex flex-wrap items-center justify-center gap-x-12 sm:gap-x-16 gap-y-8 text-center animate-in fade-in duration-700 delay-500">
            <div className="flex flex-col group cursor-default">
              <div className="text-4xl sm:text-5xl font-bold text-arkova-dark mb-2 group-hover:text-arkova-blue transition-colors duration-300">100%</div>
              <div className="text-sm text-muted-foreground font-medium">Immutable</div>
            </div>
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
            <div className="flex flex-col group cursor-default">
              <div className="text-4xl sm:text-5xl font-bold text-arkova-dark mb-2 group-hover:text-arkova-blue transition-colors duration-300">∞</div>
              <div className="text-sm text-muted-foreground font-medium">Verifiable</div>
            </div>
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
            <div className="flex flex-col group cursor-default">
              <div className="text-4xl sm:text-5xl font-bold text-arkova-dark mb-2 group-hover:text-arkova-blue transition-colors duration-300">24/7</div>
              <div className="text-sm text-muted-foreground font-medium">Audit-Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;