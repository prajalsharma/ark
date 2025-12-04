import { Linkedin } from "lucide-react";

// Official X (Twitter) Logo SVG Component
const XLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-white border-t border-arkova-gray-200/50">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 md:gap-y-14">
          {/* Arkova brand section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <h3 className="text-xl font-bold text-arkova-dark">Arkova</h3>
            </div>
            <p className="text-sm text-arkova-muted-foreground leading-relaxed max-w-sm">
              Bitcoin-anchored document verification for enterprise compliance
            </p>
          </div>

          {/* Product section */}
          <div>
            <h4 className="text-base font-bold text-arkova-dark mb-5">Product</h4>
            <ul className="space-y-3.5">
              <li>
                <a href="/solutions" className="text-sm text-arkova-muted-foreground hover:text-arkova-blue transition-colors duration-300 inline-block relative group">
                  Solutions
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-arkova-blue transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="/whitepaper" className="text-sm text-arkova-muted-foreground hover:text-arkova-blue transition-colors duration-300 inline-block relative group">
                  Whitepaper
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-arkova-blue transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="/trust-security" className="text-sm text-arkova-muted-foreground hover:text-arkova-blue transition-colors duration-300 inline-block relative group">
                  Trust &amp; Security
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-arkova-blue transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Company section */}
          <div>
            <h4 className="text-base font-bold text-arkova-dark mb-5">Company</h4>
            <ul className="space-y-3.5">
              <li>
                <a href="/contact" className="text-sm text-arkova-muted-foreground hover:text-arkova-blue transition-colors duration-300 inline-block relative group">
                  Contact
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-arkova-blue transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="/team" className="text-sm text-arkova-muted-foreground hover:text-arkova-blue transition-colors duration-300 inline-block relative group">
                  Our Team
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-arkova-blue transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal section */}
          <div>
            <h4 className="text-base font-bold text-arkova-dark mb-5">Legal</h4>
            <ul className="space-y-3.5">
              <li>
                <a href="/privacy" className="text-sm text-arkova-muted-foreground hover:text-arkova-blue transition-colors duration-300 inline-block relative group">
                  Privacy Policy
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-arkova-blue transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-arkova-muted-foreground hover:text-arkova-blue transition-colors duration-300 inline-block relative group">
                  Terms of Service
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-arkova-blue transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-20 pt-8 border-t border-arkova-gray-200/70 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-arkova-muted-foreground text-center sm:text-left">
            © 2025 Arkova. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://x.com/arkovatech" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)" 
              className="text-arkova-muted-foreground hover:text-arkova-blue transition-all duration-300 p-2.5 rounded-xl hover:bg-arkova-blue-5 group"
            >
              <XLogo className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a 
              href="https://www.linkedin.com/company/arkovatech/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn" 
              className="text-arkova-muted-foreground hover:text-arkova-blue transition-all duration-300 p-2.5 rounded-xl hover:bg-arkova-blue-5 group"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;