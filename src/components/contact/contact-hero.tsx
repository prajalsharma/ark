"use client";

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-arkova-gray-50/50 via-white to-white"></div>
      <div className="absolute inset-0 grid-pattern-background"></div>
      
      <div className="absolute top-20 right-20 w-96 h-96 bg-arkova-blue/10 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-arkova-accent/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="text-arkova-dark">Get in Touch</span>
          </h1>

          <p className="text-xl md:text-2xl text-arkova-muted-foreground font-light leading-relaxed animate-in fade-in slide-in-from-top-6 duration-700 delay-100">
            Have questions? We'd love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
}