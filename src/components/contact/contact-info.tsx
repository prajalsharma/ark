"use client";

import { Mail, MessageCircle } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-arkova-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-arkova-blue/30 transition-all duration-500">
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 bg-gradient-to-br from-arkova-blue/10 to-arkova-accent/10 border border-arkova-blue/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="h-7 w-7 text-arkova-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-arkova-dark mb-2">Email</h3>
                <a 
                  href="mailto:info@arkova.io" 
                  className="text-lg text-arkova-blue hover:text-arkova-accent transition-colors duration-300"
                >
                  info@arkova.io
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white border border-arkova-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-arkova-blue/30 transition-all duration-500">
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 bg-gradient-to-br from-arkova-blue/10 to-arkova-accent/10 border border-arkova-blue/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-7 w-7 text-arkova-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-arkova-dark mb-2">Telegram</h3>
                <a 
                  href="https://t.me/carsonarkova" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg text-arkova-blue hover:text-arkova-accent transition-colors duration-300"
                >
                  @carsonarkova
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}