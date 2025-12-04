import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderNavigation />
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-arkova-dark mb-4">
                Sign Up for Early Access
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below to sign up for early access to Arkova's blockchain-verified compliance platform.
              </p>
            </div>

            {/* Google Form Iframe */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSe6vdsbjAMaL-w1oMU3zlcEu9arYWnTItUzyIPv2v5PaWWEJQ/viewform?embedded=true" 
                width="100%" 
                height="959" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="w-full"
              >
                Loading…
              </iframe>
            </div>

            {/* Footer Note */}
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Have questions? <a href="/contact" className="text-arkova-blue hover:underline font-medium">Contact us</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
