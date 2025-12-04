"use client";

import { Shield, FileCheck, Clock, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Immutable Audit Trail",
    description: "Every document anchored to Bitcoin blockchain creates a tamper-proof record that cannot be altered or deleted.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description: "Meet SOC 2, GDPR, and industry-specific compliance requirements with cryptographic proof of data integrity.",
  },
  {
    icon: Clock,
    title: "Real-Time Verification",
    description: "Instantly verify document authenticity and timestamp with cryptographic proof, eliminating manual audits.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Military-grade encryption combined with blockchain anchoring ensures your sensitive documents remain secure.",
  },
  {
    icon: Zap,
    title: "Instant Integration",
    description: "Deploy in minutes with our RESTful API, SDKs, or pre-built integrations for popular enterprise platforms.",
  },
];

export default function SolutionFeatures() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-arkova-blue-5 border border-arkova-blue-20 backdrop-blur-sm mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-arkova-blue">
              Key Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-arkova-dark mb-6">
            Everything You Need for Compliance
          </h2>
          <p className="text-lg md:text-xl text-arkova-muted-foreground max-w-3xl mx-auto font-light">
            Comprehensive features designed to simplify compliance, enhance security, and provide peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group card-arkova hover:border-arkova-blue-30 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-6">
                <div className="icon-container-arkova large group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <div className="absolute inset-0 bg-arkova-blue-20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <feature.icon className="h-7 w-7 text-arkova-blue relative z-10" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-arkova-dark mb-3 group-hover:text-arkova-blue transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-arkova-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-arkova-blue to-transparent group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}