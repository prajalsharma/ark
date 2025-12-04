import { User, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

type TeamMember = {
  name: string;
  badge: 'Founder' | 'Tech Advisor' | 'Co Founder' | '';
  title: string;
  bio: string;
  image?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Carson',
    badge: 'Founder',
    title: 'Chief Executive Officer',
    bio: "9 Years experience as an Agile Project Manager. Working with distressed teams with tight regulatory deadlines. 4+ years blockchain experience.",
    image: 'https://eigenjobs.s3.us-east-1.amazonaws.com/arkovacarson.png',
  },
  {
    name: 'Sarah',
    badge: 'Founder',
    title: 'Chief Operating Officer',
    bio: '20 years experience as a Product / Program Manager in FMCG. Launched over 1000 SKUs to market. 4+ years blockchain experience in project and community management.',
    image: 'https://eigenjobs.s3.us-east-1.amazonaws.com/arkovasarah.png',
  },
  {
    name: 'Yaacov',
    badge: 'Founder',
    title: 'Advisor',
    bio: '20 years Research & Data Science experience, 3+ years blockchain project advising and community management, Senior Member of the National Academy of Inventors.',
    image: 'https://eigenjobs.s3.us-east-1.amazonaws.com/arkovayaacov.png',
  },
  {
    name: 'Peri',
    badge: '',
    title: 'Technical Advisor',
    bio: 'PhD in Computer Science. Ex Meta and Google (Security Engineer). 14 years in Bitcoin, including published research starting in 2016. Previously founded Bitcoin meta-protocol "Glittr".',
    image: 'https://eigenjobs.s3.us-east-1.amazonaws.com/arkovaperi.png',
  },
  {
    name: 'Nick',
    badge: '',
    title: 'Marketing Advisor',
    bio: 'Chief Marketing Officer of Arch Network. 15+ years marketing/media experience, with major VC and enterprise clients (Consensys Mesh, Variant Fund, Pfizer, Discover).',
    image: 'https://eigenjobs.s3.us-east-1.amazonaws.com/arkovanick.png',
  },
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className="bg-white border border-border rounded-2xl p-6 sm:p-8 md:p-9 transition-all duration-500 h-full text-center flex flex-col items-center hover:border-arkova-blue/30 group relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-arkova-blue-5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="relative z-10 flex flex-col items-center w-full">
      <div className="mb-5 md:mb-6">
        <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-arkova-blue-10 to-arkova-blue-5 flex items-center justify-center border-2 border-arkova-blue-20 relative overflow-hidden group-hover:scale-110 transition-transform duration-500 shadow-sm flex-shrink-0">
          <div className="absolute inset-0 bg-arkova-blue/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover rounded-full"
              sizes="(max-width: 640px) 80px, 96px"
            />
          ) : (
            <User className="relative z-10 h-8 w-8 sm:h-10 sm:w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
          )}
        </div>
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-2">
        <h3 className="text-lg sm:text-xl font-bold text-arkova-dark group-hover:text-arkova-blue transition-colors duration-300">{member.name}</h3>
        {member.badge && (
          <div className="px-2 sm:px-2.5 py-1 rounded-lg bg-arkova-blue-10 border border-arkova-blue-20 text-primary text-xs font-semibold group-hover:bg-arkova-blue-20 transition-colors duration-300">
            {member.badge}
          </div>
        )}
      </div>
      <div className="text-primary font-semibold mb-4 md:mb-5 text-xs sm:text-sm">{member.title}</div>
      <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
    </div>
    
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-1 bg-gradient-to-r from-transparent via-arkova-blue to-transparent transition-all duration-500 rounded-full"></div>
  </div>
);

const TeamSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden" id="team">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-arkova-blue/10 to-transparent"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-arkova-blue/3 rounded-full blur-3xl animate-glow-pulse"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-arkova-blue-5 border border-arkova-blue-20 mb-6 md:mb-7 backdrop-blur-sm hover:bg-arkova-blue-8 transition-colors duration-300">
            <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">
              Our Team
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-arkova-dark tracking-tight">
            Led by Industry Veterans
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Decades of combined experience in blockchain, enterprise software, and regulatory compliance
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-muted-foreground mb-3 text-base sm:text-lg">
            Join a team that's redefining compliance
          </p>
          <Link
            href="/contact"
            className="font-semibold text-primary hover:text-arkova-accent group inline-flex items-center gap-2 transition-all duration-300 text-sm sm:text-base"
          >
            Get in touch
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;