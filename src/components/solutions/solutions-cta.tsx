"use client";

import { Sparkles, ArrowRight, MessageCircle } from "lucide-react";

export default function SolutionsCta() {
  return (
    <section className="relative py-24 md:py-32 bg-arkova-blue overflow-hidden">
      <div className="absolute inset-0 grid-pattern-background opacity-10"></div>

      <div className="absolute top-10 left-10 opacity-20 animate-float">
        <Sparkles className="h-12 w-12 text-white" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 animate-float" style={{ animationDelay: "1s" }}>
        <Sparkles className="h-16 w-16 text-white" />
      </div>
      <div className="absolute top-1/2 left-20 opacity-20 animate-float" style={{ animationDelay: "2s" }}>
        <Sparkles className="h-8 w-8 text-white" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-white">
              ◆ Ready to Get Started?
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Transform Your Compliance Process
          </h2>

          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-12">
            Join leading enterprises securing their documents with blockchain-verified compliance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-9 py-4 rounded-xl font-semibold bg-white text-arkova-dark hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="/whitepaper"
              className="group inline-flex items-center gap-3 px-9 py-4 rounded-xl font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              Read Whitepaper
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
              <span className="text-sm font-medium">5-Minute Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
              <span className="text-sm font-medium">Enterprise Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}