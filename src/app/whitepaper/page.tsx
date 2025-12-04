import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { Download, Mail, FileDown } from "lucide-react";

// Google Drive file ID extracted from the URL
const GOOGLE_DRIVE_FILE_ID = "1cvpat0wTQS-Kd4i-sKzKG8wPQzJ048-l";
const WHITEPAPER_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}`;
const WHITEPAPER_PREVIEW_URL = `https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/preview`;

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderNavigation />
      <main className="container-custom py-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Technical Whitepaper</h1>
            
            <a
              href={WHITEPAPER_DOWNLOAD_URL}
              download
              className="inline-flex items-center gap-2 btn-arkova-primary"
            >
              <FileDown className="h-5 w-5" />
              Download Whitepaper (PDF)
            </a>
          </div>

          <div className="bg-white shadow-xl border border-arkova-gray-200">
            <iframe
              src={WHITEPAPER_PREVIEW_URL}
              className="w-full min-h-[1000px] md:min-h-[1200px]"
              title="Arkova Whitepaper"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}