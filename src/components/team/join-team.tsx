"use client";

import { ArrowRight, Briefcase, Heart, TrendingUp } from "lucide-react";

export default function JoinTeam() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-arkova-blue-5 border border-arkova-blue-20 backdrop-blur-sm mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-arkova-blue">
                Join Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-arkova-dark mb-6">
              Join a Team That's Redefining Compliance
            </h2>
            <p className="text-lg md:text-xl text-arkova-muted-foreground font-light leading-relaxed">
              We're always looking for talented individuals who share our passion for innovation,
              security, and building products that make a real difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 rounded-xl bg-arkova-gray-50 border border-arkova-gray-200">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-arkova-blue-10 mb-4">
                <Briefcase className="h-6 w-6 text-arkova-blue" />
              </div>
              <h3 className="font-semibold text-arkova-dark mb-2">Challenging Work</h3>
              <p className="text-sm text-arkova-muted-foreground">
                Solve complex problems at the intersection of blockchain and enterprise software
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-arkova-gray-50 border border-arkova-gray-200">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-arkova-blue-10 mb-4">
                <Heart className="h-6 w-6 text-arkova-blue" />
              </div>
              <h3 className="font-semibold text-arkova-dark mb-2">Great Culture</h3>
              <p className="text-sm text-arkova-muted-foreground">
                Work with a collaborative team that values innovation and work-life balance
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-arkova-gray-50 border border-arkova-gray-200">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-arkova-blue-10 mb-4">
                <TrendingUp className="h-6 w-6 text-arkova-blue" />
              </div>
              <h3 className="font-semibold text-arkova-dark mb-2">Growth Opportunity</h3>
              <p className="text-sm text-arkova-muted-foreground">
                Grow your career at a fast-moving startup with competitive compensation
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-9 py-4 rounded-xl font-semibold transition-all duration-300 btn-arkova-primary hover:shadow-xl hover:-translate-y-0.5"
            >
              View Open Positions
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <p className="mt-6 text-sm text-arkova-muted-foreground">
              Or reach out to us at{" "}
              <a href="mailto:founders@arkova.io" className="text-arkova-blue hover:text-arkova-accent font-medium transition-colors">
                founders@arkova.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}