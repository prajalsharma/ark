
"use client";

import { Eye, Lock, Network, Shield } from "lucide-react";

const principles = [
  {
    number: "1",
    icon: Eye,
    title: "Transparency",
    description: "Open-source verification tools and public blockchain anchoring ensure full transparency.",
  },
  {
    number: "2",
    icon: Lock,
    title: "Data Privacy",
    description: "Your documents never leave your control. Only hashes are transmitted to our systems.",
  },
  {
    number: "3",
    icon: Network,
    title: "Decentralization",
    description: "Bitcoin's decentralized network means no single point of failure or control.",
  },
  {
    number: "4",
    icon: Shield,
    title: "Immutability",
    description: "Once anchored, verification proofs cannot be altered, deleted, or tampered with.",
  },
];

export default function TrustPrinciples() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-arkova-dark mb-6">
            Our Trust Principles
          </h2>
          <p className="text-lg md:text-xl text-arkova-muted-foreground max-w-3xl mx-auto font-light">
            The foundational values that guide how we handle your data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="group card-arkova hover:border-arkova-blue-30 transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="text-6xl font-bold text-arkova-blue-10 group-hover:text-arkova-blue-20 transition-colors duration-500">
                      {principle.number}
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="icon-container-arkova group-hover:scale-110 transition-all duration-500">
                        <principle.icon className="h-6 w-6 text-arkova-blue" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-arkova-dark mb-3 group-hover:text-arkova-blue transition-colors duration-300">
                    {principle.title}
                  </h3>
                  <p className="text-arkova-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-arkova-blue to-transparent group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
