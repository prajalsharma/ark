"use client";

import { Lightbulb, Shield, Users, Rocket } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We constantly push boundaries to deliver cutting-edge solutions that solve real enterprise challenges.",
  },
  {
    icon: Shield,
    title: "Security & Trust",
    description: "Security is not an afterthought—it's the foundation of everything we build and every decision we make.",
  },
  {
    icon: Users,
    title: "Customer Success",
    description: "Our success is measured by our customers' success. We're committed to delivering exceptional value.",
  },
  {
    icon: Rocket,
    title: "Move Fast",
    description: "We ship quickly, iterate constantly, and adapt to market needs with agility and precision.",
  },
];

export default function TeamValues() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-arkova-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-arkova-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-arkova-blue/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-arkova-blue-5 border border-arkova-blue-20 backdrop-blur-sm mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-arkova-blue">
              Our Values
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-arkova-dark mb-6">
            What Drives Us Forward
          </h2>
          <p className="text-lg md:text-xl text-arkova-muted-foreground max-w-3xl mx-auto font-light">
            Our core values guide every decision, product, and interaction with our customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div className="mb-6 flex justify-center">
                <div className="icon-container-arkova large group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <div className="absolute inset-0 bg-arkova-blue-20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <value.icon className="h-7 w-7 text-arkova-blue relative z-10" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-arkova-dark mb-3 group-hover:text-arkova-blue transition-colors duration-300">
                {value.title}
              </h3>

              <p className="text-arkova-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
