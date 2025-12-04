"use client";

import { Shield, Lock, Eye } from "lucide-react";

export default function TrustHero() {
  return (
    <section className="relative pt-32 pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-arkova-gray-50/50 via-white to-white"></div>
      
      <div className="absolute inset-0 grid-pattern-background"></div>
      
      <div className="absolute top-20 right-20 w-96 h-96 bg-arkova-blue/10 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-arkova-accent/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }}></div>
      
      <div className="absolute top-40 right-1/4 opacity-20 animate-float">
        <Shield className="h-16 w-16 text-arkova-blue" />
      </div>
      <div className="absolute bottom-40 left-1/4 opacity-20 animate-float" style={{ animationDelay: "1s" }}>
        <Lock className="h-14 w-14 text-arkova-accent" />
      </div>
      <div className="absolute top-1/2 right-12 opacity-20 animate-float" style={{ animationDelay: "2s" }}>
        <Eye className="h-12 w-12 text-arkova-blue" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-in fade-in slide-in-from-top-6 duration-700 delay-100">
            <span className="text-arkova-dark">Trust & Security</span>
          </h1>

          <p className="text-xl md:text-2xl text-arkova-muted-foreground font-light leading-relaxed animate-in fade-in slide-in-from-top-8 duration-700 delay-200">
            Your data security and regulatory compliance are our top priorities. Learn how Arkova protects your sensitive information.
          </p>
        </div>
      </div>
    </section>
  );
}