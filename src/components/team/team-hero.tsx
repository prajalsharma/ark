"use client";

import { Users, Award, Target } from "lucide-react";

export default function TeamHero() {
  return (
    <section className="relative pt-32 pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-arkova-gray-50/50 via-white to-white"></div>
      
      <div className="absolute inset-0 grid-pattern-background"></div>
      
      <div className="absolute top-20 right-20 w-96 h-96 bg-arkova-blue/10 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-arkova-accent/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }}></div>
      
      <div className="absolute top-40 right-1/4 opacity-20 animate-float">
        <Users className="h-16 w-16 text-arkova-blue" />
      </div>
      <div className="absolute bottom-40 left-1/4 opacity-20 animate-float" style={{ animationDelay: "1s" }}>
        <Award className="h-14 w-14 text-arkova-accent" />
      </div>
      <div className="absolute top-1/2 right-12 opacity-20 animate-float" style={{ animationDelay: "2s" }}>
        <Target className="h-12 w-12 text-arkova-blue" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-arkova-blue-5 border border-arkova-blue-20 backdrop-blur-sm mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="h-2 w-2 rounded-full bg-arkova-blue animate-pulse"></div>
            <span className="text-sm font-semibold uppercase tracking-wider text-arkova-blue">
              Our Team
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-top-6 duration-700 delay-100">
            <span className="text-arkova-dark">Meet the Innovators</span>
            <br />
            <span className="gradient-text">Redefining Compliance</span>
          </h1>

          <p className="text-lg md:text-xl text-arkova-muted-foreground font-light leading-relaxed mb-12 animate-in fade-in slide-in-from-top-8 duration-700 delay-200">
            A team of industry veterans combining decades of experience in blockchain,
            <br className="hidden md:block" />
            enterprise software, and regulatory compliance to build the future of document verification.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div>
              <div className="text-4xl font-bold text-arkova-dark mb-2">50+</div>
              <div className="text-sm text-arkova-muted-foreground font-medium">Years Combined Experience</div>
            </div>
            <div className="h-12 w-px bg-arkova-gray-200 hidden sm:block"></div>
            <div>
              <div className="text-4xl font-bold text-arkova-dark mb-2">5</div>
              <div className="text-sm text-arkova-muted-foreground font-medium">Industry Experts</div>
            </div>
            <div className="h-12 w-px bg-arkova-gray-200 hidden sm:block"></div>
            <div>
              <div className="text-4xl font-bold text-arkova-dark mb-2">100%</div>
              <div className="text-sm text-arkova-muted-foreground font-medium">Committed to Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}