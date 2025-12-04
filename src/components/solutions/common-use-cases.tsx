"use client";

import { FileSearch, Clock, Users } from "lucide-react";

const useCases = [
  {
    icon: FileSearch,
    title: "Audit Trail Creation",
    description: "Generate immutable audit logs for regulatory inspections and compliance reviews.",
  },
  {
    icon: Clock,
    title: "Document Timestamping",
    description: "Prove document existence and integrity at a specific point in time.",
  },
  {
    icon: Users,
    title: "Multi-Party Verification",
    description: "Enable multiple stakeholders to verify documents independently.",
  },
];

export default function CommonUseCases() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-arkova-gray-50 to-white relative">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-arkova-dark mb-6">
            Common Use Cases
          </h2>
          <p className="text-lg md:text-xl text-arkova-muted-foreground font-light">
            See how Arkova solves real-world verification challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group bg-white border border-arkova-gray-200 rounded-2xl p-8 hover:border-arkova-blue/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                <div className="h-16 w-16 bg-gradient-to-br from-arkova-blue-10 to-arkova-accent/10 border border-arkova-blue-20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="h-8 w-8 text-arkova-blue" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-arkova-dark mb-4 group-hover:text-arkova-blue transition-colors duration-300">
                {useCase.title}
              </h3>

              <p className="text-arkova-muted-foreground leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
