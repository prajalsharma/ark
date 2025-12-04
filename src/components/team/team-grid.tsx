"use client";

import { User } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Carson",
    role: "Chief Executive Officer",
    badge: "Founder",
    title: "CEO & Co-Founder",
    bio: "9 Years experience as an Agile Project Manager. Working with distressed teams with tight regulatory deadlines. 4+ years blockchain experience.",
    image: "https://eigenjobs.s3.us-east-1.amazonaws.com/arkovacarson.png",
  },
  {
    name: "Sarah",
    role: "Chief Operating Officer",
    badge: "Founder",
    title: "COO & Co-Founder",
    bio: "20 years experience as a Product / Program Manager in FMCG. Launched over 1000 SKUs to market. 4+ years blockchain experience in project and community management.",
    image: "https://eigenjobs.s3.us-east-1.amazonaws.com/arkovasarah.png",
  },
  {
    name: "Yaacov",
    role: "Advisor",
    badge: "Founder",
    title: "Blockchain Technology Advisor",
    bio: "20 years Research & Data Science experience, 3+ years blockchain project advising and community management, Senior Member of the National Academy of Inventors.",
    image: "https://eigenjobs.s3.us-east-1.amazonaws.com/arkovayaacov.png",
  },
  {
    name: "Peri",
    role: "Technical Advisor",
    badge: "",
    title: "Technical Advisor",
    bio: "PhD in Computer Science. Former Meta Security Engineer and Google Researcher. 14 years in Bitcoin development, including published research starting in 2016. Previously founded the Bitcoin meta-protocol Glittr.",
    image: "https://eigenjobs.s3.us-east-1.amazonaws.com/arkovaperi.png",
  },
  {
    name: "Nick",
    role: "Marketing Advisor",
    badge: "",
    title: "Marketing Advisor",
    bio: "Chief Marketing Officer of Arch Network. 15+ years marketing/media experience, with major VC and enterprise clients (Consensys Mesh, Variant Fund, Pfizer, Discover).",
    image: "https://eigenjobs.s3.us-east-1.amazonaws.com/arkovanick.png",
  },
];

export default function TeamGrid() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white border border-arkova-gray-200 rounded-2xl p-8 hover:border-arkova-blue-30 hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-arkova-blue-5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="mb-4">
                    <div className="h-24 w-24 rounded-full bg-arkova-blue-10 flex items-center justify-center border-2 border-arkova-blue-20 group-hover:border-arkova-blue-30 transition-all duration-500 group-hover:scale-110 relative overflow-hidden">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover rounded-full"
                          sizes="96px"
                        />
                      ) : (
                        <User className="h-12 w-12 text-arkova-blue" />
                      )}
                    </div>
                  </div>

                  {member.badge && (
                    <div className="mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-arkova-blue-5 text-arkova-blue border border-arkova-blue-20 group-hover:bg-arkova-blue-10 transition-all duration-300">
                        {member.badge}
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-arkova-dark mb-1 group-hover:text-arkova-blue transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-lg font-medium text-arkova-accent mb-4">
                    {member.role}
                  </p>
                </div>

                <p className="text-sm text-arkova-muted-foreground leading-relaxed mb-6 flex-grow text-center">
                  {member.bio}
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