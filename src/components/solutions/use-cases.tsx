"use client";

import { Building2, Scale, HeartPulse, GraduationCap, Landmark, Factory } from "lucide-react";

const useCases = [
  {
    icon: Building2,
    industry: "Financial Services",
    title: "Banking & Fintech",
    description: "Ensure regulatory compliance with immutable transaction records and audit trails for financial institutions.",
    features: ["Transaction verification", "Compliance reporting", "Audit trail management"],
  },
  {
    icon: Scale,
    industry: "Legal",
    title: "Legal & Contracts",
    description: "Protect legal documents and contracts with cryptographic proof of authenticity and timestamp verification.",
    features: ["Contract verification", "Evidence preservation", "Chain of custody"],
  },
  {
    icon: HeartPulse,
    industry: "Healthcare",
    title: "Healthcare & Medical",
    description: "Secure patient records and medical data with HIPAA-compliant blockchain verification and encryption.",
    features: ["Medical records", "Clinical trials", "Prescription tracking"],
  },
  {
    icon: GraduationCap,
    industry: "Education",
    title: "Education & Credentials",
    description: "Issue and verify academic credentials with tamper-proof blockchain certificates and instant validation.",
    features: ["Diploma verification", "Transcript validation", "Credential issuance"],
  },
  {
    icon: Landmark,
    industry: "Government",
    title: "Government & Public",
    description: "Maintain transparent public records with immutable blockchain verification for government agencies.",
    features: ["Public records", "Identity verification", "License management"],
  },
  {
    icon: Factory,
    industry: "Manufacturing",
    title: "Supply Chain & Logistics",
    description: "Track product authenticity and supply chain compliance with end-to-end blockchain verification.",
    features: ["Product tracking", "Quality assurance", "Compliance documentation"],
  },
];

export default function UseCases() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-arkova-blue-5 border border-arkova-blue-20 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-arkova-blue">
              Industry Solutions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-arkova-dark mb-6">
            Trusted Across Industries
          </h2>
          <p className="text-lg md:text-xl text-arkova-muted-foreground font-light">
            From healthcare to finance, our solutions adapt to your industry's unique compliance requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group bg-white border border-arkova-gray-200 rounded-2xl p-8 hover:border-arkova-blue/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 h-12 w-12 bg-arkova-blue-10 border border-arkova-blue-20 rounded-xl flex items-center justify-center group-hover:bg-arkova-blue-20 transition-colors duration-300">
                  <useCase.icon className="h-6 w-6 text-arkova-blue" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-wider text-arkova-blue mb-1">
                    {useCase.industry}
                  </div>
                  <h3 className="text-lg font-bold text-arkova-dark">
                    {useCase.title}
                  </h3>
                </div>
              </div>

              <p className="text-arkova-muted-foreground leading-relaxed mb-5 text-[15px]">
                {useCase.description}
              </p>

              <div className="space-y-2 pt-4 border-t border-arkova-gray-200">
                {useCase.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-arkova-muted-foreground">
                    <div className="h-1 w-1 rounded-full bg-arkova-blue flex-shrink-0"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}