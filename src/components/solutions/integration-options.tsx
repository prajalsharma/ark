"use client";

import { Code2, Puzzle, Cloud, Webhook } from "lucide-react";

const integrations = [
  {
    icon: Code2,
    title: "RESTful API",
    description: "Complete API access with comprehensive documentation, SDKs for popular languages, and sandbox environment for testing.",
    features: ["Full CRUD operations", "Webhook support", "Rate limiting", "API versioning"],
  },
  {
    icon: Puzzle,
    title: "Pre-built Integrations",
    description: "Ready-to-use integrations with popular enterprise platforms including Salesforce, Microsoft 365, and Google Workspace.",
    features: ["No-code setup", "Auto-sync", "Custom mappings", "Real-time updates"],
  },
  {
    icon: Cloud,
    title: "Cloud Providers",
    description: "Direct integration with major cloud providers including AWS S3, Azure Blob, and Google Cloud Platform.",
    features: ["Automatic anchoring", "Bucket monitoring", "Event triggers", "Batch processing"],
  },
  {
    icon: Webhook,
    title: "Custom Webhooks",
    description: "Configure custom webhooks to receive real-time notifications for document verification events and status changes.",
    features: ["Event filtering", "Retry logic", "Signature verification", "Custom headers"],
  },
];

export default function IntegrationOptions() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-arkova-blue-5 border border-arkova-blue-20 backdrop-blur-sm mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-arkova-blue">
              Integration
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-arkova-dark mb-6">
            Seamless Integration Options
          </h2>
          <p className="text-lg md:text-xl text-arkova-muted-foreground max-w-3xl mx-auto font-light">
            Connect Arkova to your existing infrastructure in minutes with flexible integration options.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="group card-arkova hover:border-arkova-blue-30"
            >
              <div className="relative mb-6">
                <div className="icon-container-arkova large group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <div className="absolute inset-0 bg-arkova-blue-20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <integration.icon className="h-7 w-7 text-arkova-blue relative z-10" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-arkova-dark mb-3 group-hover:text-arkova-blue transition-colors duration-300">
                {integration.title}
              </h3>

              <p className="text-arkova-muted-foreground leading-relaxed mb-6">
                {integration.description}
              </p>

              <div className="grid grid-cols-2 gap-3">
                {integration.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-arkova-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-arkova-blue"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-arkova-blue to-transparent group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 text-arkova-blue hover:text-arkova-accent font-semibold transition-colors duration-300"
          >
            View API Documentation
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}