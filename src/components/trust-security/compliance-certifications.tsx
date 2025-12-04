"use client";

import { Award, Globe, FileCheck, Shield, Lock, FileSignature } from "lucide-react";

const certifications = [
  {
    icon: Award,
    name: "SOC 2 Readiness",
    description: "SOC 2 Type II evidence and audit preparation underway, covering security, availability, and confidentiality.",
  },
  {
    icon: Globe,
    name: "GDPR Compliant",
    description: "Fully aligned with EU General Data Protection Regulation principles for data protection and user consent.",
  },
  {
    icon: Shield,
    name: "ISO 27001 Aligned",
    description: "Security management framework designed in line with ISO 27001 standards for information security.",
  },
  {
    icon: FileCheck,
    name: "HIPAA Ready",
    description: "Architecture supports HIPAA technical safeguards for healthcare organizations.",
  },
  {
    icon: Lock,
    name: "CCPA Compliant",
    description: "Privacy-by-design architecture supporting California Consumer Privacy Act requirements.",
  },
  {
    icon: FileSignature,
    name: "eIDAS & UETA Aligned",
    description: "Designed for compliance with international electronic signature and data integrity standards.",
  },
];

export default function ComplianceCertifications() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-arkova-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-arkova-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-arkova-blue/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-arkova-dark mb-6">
            Compliance & Certifications
          </h2>
          <p className="text-lg md:text-xl text-arkova-muted-foreground max-w-3xl mx-auto font-light">
            Independently verified compliance with global security standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-white border border-arkova-gray-200 rounded-2xl p-8 hover:border-arkova-blue-30 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-arkova-blue-5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="mb-6">
                  <div className="icon-container-arkova large group-hover:scale-110 transition-all duration-500">
                    <div className="absolute inset-0 bg-arkova-blue-20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <cert.icon className="h-7 w-7 text-arkova-blue relative z-10" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-arkova-dark mb-3 group-hover:text-arkova-blue transition-colors duration-300">
                  {cert.name}
                </h3>

                <p className="text-sm text-arkova-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-arkova-blue to-transparent group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}