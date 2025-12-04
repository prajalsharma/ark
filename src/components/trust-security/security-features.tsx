"use client";

import { Lock, Server, Eye, FileCheck, Shield, Bug } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit (TLS 1.3) and at rest (AES-256) to protect sensitive information.",
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    description: "Multi-region cloud infrastructure with automated failover and DDoS protection.",
  },
  {
    icon: Eye,
    title: "Zero-Knowledge Architecture",
    description: "Arkova never stores or reads your document contents. Only cryptographic hashes and metadata are processed, preserving privacy by design.",
  },
  {
    icon: FileCheck,
    title: "Audit Logging",
    description: "Comprehensive audit trails for all actions with immutable blockchain timestamps.",
  },
  {
    icon: Shield,
    title: "Penetration Testing",
    description: "Independent security assessments and penetration tests are conducted by certified partners to identify and mitigate risks before release.",
  },
  {
    icon: Bug,
    title: "Bug Bounty Program",
    description: "A responsible disclosure program invites vetted researchers to report vulnerabilities and strengthen overall platform security.",
  },
];

export default function SecurityFeatures() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-arkova-dark mb-6">
            Security Features
          </h2>
          <p className="text-lg md:text-xl text-arkova-muted-foreground max-w-3xl mx-auto font-light">
            Multiple layers of security protect your documents and verification data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group card-arkova hover:border-arkova-blue-30 transition-all duration-500"
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
              
              <p className="text-arkova-muted-foreground leading-relaxed text-sm">
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