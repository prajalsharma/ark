const { jsPDF } = require('jspdf');
const fs = require('fs');
const path = require('path');

// Create new PDF document
const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'a4'
});

// Colors
const primaryBlue = '#6BA4C8';
const darkText = '#1F2937';
const mutedText = '#6B7280';

let yPos = 20;
const pageHeight = 280;
const margin = 20;
const maxWidth = 170;

// Helper function to check if we need a new page
function checkNewPage(requiredSpace = 15) {
  if (yPos + requiredSpace > pageHeight) {
    doc.addPage();
    yPos = 20;
    return true;
  }
  return false;
}

// Helper function to add text with automatic pagination
function addText(text, fontSize = 10, isBold = false, color = darkText) {
  doc.setFontSize(fontSize);
  doc.setFont(undefined, isBold ? 'bold' : 'normal');
  doc.setTextColor(color);
  const lines = doc.splitTextToSize(text, maxWidth);
  
  lines.forEach(line => {
    checkNewPage();
    doc.text(line, margin, yPos);
    yPos += fontSize * 0.4;
  });
}

// Title Page
doc.setFontSize(32);
doc.setTextColor(primaryBlue);
doc.text('ARKOVA', 105, yPos, { align: 'center' });
yPos += 15;

doc.setFontSize(16);
doc.setTextColor(darkText);
doc.text('The Universal Verification Layer for Records,', 105, yPos, { align: 'center' });
yPos += 7;
doc.text('Credentials, and Asset Attestations', 105, yPos, { align: 'center' });
yPos += 20;

// Abstract
doc.setFontSize(14);
doc.setFont(undefined, 'bold');
doc.text('Abstract', margin, yPos);
yPos += 8;

addText('Arkova is a jurisdiction-aware verification layer for documents, signatures, credentials, and asset attestations. By anchoring compliance-aligned metadata from key lifecycle events to a neutral public ledger in Bitcoin, Arkova provides independently verifiable proofs of integrity and timing without requiring sensitive content to leave existing systems. The result is a tamper-evident timeline that any counterparty can check, a solution that reduces audit costs, accelerates verification, and improves trust across borders.');

yPos += 15;

// Table of Contents
checkNewPage(40);
doc.setFontSize(14);
doc.setFont(undefined, 'bold');
doc.text('Contents', margin, yPos);
yPos += 10;

const toc = [
  '1.0 The Attestation Challenge',
  '2.0 The Solution',
  '3.0 Arkova Overview',
  '4.0 Technical Architecture',
  '5.0 Globally Accepted Compliance',
  '6.0 Use Cases',
  '7.0 Business Model and GTM',
  '8.0 Competitive Landscape',
  '9.0 Risks and Mitigation',
  '10.0 Conclusion',
  '11.0 About the Team',
  '12.0 Contact'
];

doc.setFontSize(10);
doc.setFont(undefined, 'normal');
toc.forEach(item => {
  doc.text(item, margin + 5, yPos);
  yPos += 6;
});

// New page for content
doc.addPage();
yPos = 20;

// Section 1.0
doc.setFontSize(16);
doc.setFont(undefined, 'bold');
doc.setTextColor(primaryBlue);
doc.text('1.0 The Attestation Challenge', margin, yPos);
yPos += 10;

doc.setFontSize(12);
doc.text('1.1 Rising audit costs and compliance pressure', margin, yPos);
yPos += 7;

addText('Audit costs and expectations keep rising while evidence remains hard to trust across systems and borders. Public-company audit fees increased 6.4% in 2023 to an average of about $3.01 million per enterprise, per audit, and the new Global Internal Audit Standards became effective for quality assessments on January 9, 2025. Together these trends raise the bar for evidence that is fast to retrieve, easy to sample, and defensible across counterparties — and current vendor logs are insufficient to meet these expectations.');

yPos += 8;
checkNewPage(20);

doc.setFontSize(12);
doc.setFont(undefined, 'bold');
doc.text('1.2 Verification gaps persist, with scattered evidence and reporting', margin, yPos);
yPos += 7;

addText('Verification gaps show up in multiple markets. A prominent example is healthcare, where 2023 federal investigations uncovered a multi-state scheme selling thousands of fraudulent nursing diplomas that were used to attempt licensure in several jurisdictions. Hiring pipelines face similar noise, with survey data indicating many applicants admit to misrepresentation on resumes, which increases the downstream verification workload. Cross-party checks are slow because evidence is scattered and processes vary by institution.');

yPos += 8;
checkNewPage(20);

doc.setFontSize(12);
doc.setFont(undefined, 'bold');
doc.text('1.3 Technology solutions are emerging, but slowly', margin, yPos);
yPos += 7;

addText('The root problem is the absence of a neutral, portable proof layer for records and their lifecycle events. Conventional audit trails live inside vendor-controlled systems, forcing third parties to trust operator access controls and change management. Public ledger models provide this style of evidence by making published transactions impractical to alter without detection. As assets and attestations migrate on-chain, investors and regulators will expect independently checkable proofs of holdings and lifecycle events.');

yPos += 8;
checkNewPage(20);

doc.setFontSize(12);
doc.setFont(undefined, 'bold');
doc.text('1.4 An overarching lack of independent verification', margin, yPos);
yPos += 7;

addText('In short, organizations lack a portable, independently verifiable evidence layer. Proofs are trapped in vendor-controlled systems, revocation states are inconsistent, and cross-party checks are slow and costly.');

// Section 2.0
yPos += 15;
checkNewPage(30);

doc.setFontSize(16);
doc.setTextColor(primaryBlue);
doc.text('2.0 The Solution', margin, yPos);
yPos += 10;

addText('Arkova\'s opportunity is to provide the universal verification layer that has been missing to date. By anchoring compliance-aligned event metadata to a neutral public ledger while leaving sensitive content in existing systems, any counterparty can validate that a specific item existed, was signed, or was updated at a given time, and whether it remains active or has been revoked or superseded. By being built on blockchain technology, Arkova introduces a compliant and globally-accessible middleware layer that integrates with existing storage, credentialing, and e-signature systems.');

// Section 3.0
yPos += 15;
checkNewPage(30);

doc.setFontSize(16);
doc.setTextColor(primaryBlue);
doc.text('3.0 Arkova Overview', margin, yPos);
yPos += 10;

addText('Arkova is middleware that adds provable integrity to documents, signatures, credentials, and real-world asset attestations. We focus on outcomes that matter to auditors, regulators, partners, and customers. Evidence becomes portable, tamper-evident, and easy to share. Your files stay where they are. Arkova supplies the independent proof layer.');

yPos += 10;
doc.setFontSize(12);
doc.setFont(undefined, 'bold');
doc.text('3.1 What users do:', margin, yPos);
yPos += 7;

const userActions = [
  'Upload or register a record from existing systems such as SharePoint, Google Drive, or Amazon S3',
  'Sign or co-sign as usual with your preferred e-signature tool',
  'Attest to facts such as a credential\'s validity or an inventory snapshot',
  'Share a verification link with counterparties',
  'Update lifecycle status when needed (revoke, supersede, or renew)',
  'Verify any shared record in seconds'
];

doc.setFont(undefined, 'normal');
userActions.forEach(action => {
  checkNewPage();
  const lines = doc.splitTextToSize('• ' + action, maxWidth - 5);
  lines.forEach(line => {
    doc.text(line, margin + 5, yPos);
    yPos += 5;
  });
});

yPos += 8;
checkNewPage(20);

doc.setFontSize(12);
doc.setFont(undefined, 'bold');
doc.text('3.2 What users get:', margin, yPos);
yPos += 7;

const userBenefits = [
  'A tamper-evident timeline of lifecycle events that is independently verifiable',
  'Clear status semantics (active, revoked, superseded)',
  'A public or shareable verification page',
  'Proofs that travel across borders and between organizations',
  'An audit-ready evidence trail'
];

doc.setFont(undefined, 'normal');
userBenefits.forEach(benefit => {
  checkNewPage();
  const lines = doc.splitTextToSize('• ' + benefit, maxWidth - 5);
  lines.forEach(line => {
    doc.text(line, margin + 5, yPos);
    yPos += 5;
  });
});

// Section 4.0
yPos += 15;
checkNewPage(30);

doc.setFontSize(16);
doc.setTextColor(primaryBlue);
doc.text('4.0 Technical Architecture', margin, yPos);
yPos += 10;

doc.setFontSize(12);
doc.setFont(undefined, 'bold');
doc.text('4.1 At a glance', margin, yPos);
yPos += 7;

addText('Hash and timestamp events: When a record is created, signed, amended, revoked, or attested, Arkova generates a cryptographic fingerprint of the payload or identifier and timestamps the event.');

yPos += 6;
addText('Anchor the proof to Bitcoin: A compact commitment containing the fingerprint and event data is written to Bitcoin. This creates a public, tamper-evident reference that any counterparty can look up.');

yPos += 6;
addText('Keep documents in existing storage: Files remain in your DMS, e-signature tool, or inventory platform. Arkova stores only minimal metadata needed for verification.');

yPos += 6;
addText('Provide a public verification page: Each record gets a shareable link. A counterparty can validate integrity and timing, view the lifecycle timeline, and see current state.');

// Section 6.0 Use Cases
yPos += 15;
checkNewPage(30);

doc.setFontSize(16);
doc.setTextColor(primaryBlue);
doc.text('6.0 Use Cases', margin, yPos);
yPos += 10;

doc.setFontSize(12);
doc.setFont(undefined, 'bold');
doc.text('6.1 Cross-border credential verification', margin, yPos);
yPos += 7;

addText('With Arkova, the issuer registers each credential event as compliance-aligned metadata. The credential\'s public verification page exposes a tamper-evident timeline with clear states. Employers and regulators validate the claim without accessing the issuer\'s internal systems, and the proof survives vendor changes.');

yPos += 10;
checkNewPage(20);

doc.setFontSize(12);
doc.setFont(undefined, 'bold');
doc.text('6.2 Legal documents and e-signature chain of custody', margin, yPos);
yPos += 7;

addText('With Arkova, each create, sign, amend, and revoke event receives an anchor and a human-readable timeline. Opposing counsel, clients, and courts can see the version lineage, confirm that the artifact matches a recorded fingerprint at a point in time, and view the current validity state.');

yPos += 10;
checkNewPage(20);

doc.setFontSize(12);
doc.setFont(undefined, 'bold');
doc.text('6.3 Real-world asset attestations', margin, yPos);
yPos += 7;

addText('With Arkova, producers and custodians attest to inventory snapshots and transfers as event proofs. Each lot or rare item gains a verifiable history that shows where and when custody changed and whether the current status matches stated holdings.');

yPos += 10;
checkNewPage(20);

doc.setFontSize(12);
doc.setFont(undefined, 'bold');
doc.text('6.4 Audit evidence portability for SOX and ICFR', margin, yPos);
yPos += 7;

addText('With Arkova, teams register key evidence as verifiable events that are independent of any single vendor. Auditors use a stable verification page for sampling and exception review, while management retains its current systems of record.');

// Section 11.0 Team
yPos += 15;
checkNewPage(80);

doc.setFontSize(16);
doc.setTextColor(primaryBlue);
doc.text('11.0 About the Team', margin, yPos);
yPos += 10;

const team = [
  {
    name: 'Carson Seeger — Co-Founder & CEO',
    bio: '9 years\' experience as an Agile Project Manager working with distressed teams facing tight regulatory deadlines. 4+ years of blockchain experience as an advisor, founder, and project manager.'
  },
  {
    name: 'Sarah Rushton — Co-Founder & COO',
    bio: '20 years\' experience as a Product/Program Manager in FMCG with 1,000+ SKUs taken to market. 4+ years of blockchain experience as an advisor, founder, project manager, and communications manager.'
  },
  {
    name: 'Yaacov Petscher — Co-Founder & Innovation/Research Advisor',
    bio: 'Professor and Associate Dean for Research; Senior Member of the National Academy of Inventors. 20 years of data analysis experience; co-inventor on 4 patents and 20+ copyrights.'
  },
  {
    name: 'Periwinkle Doerfler — CTO',
    bio: 'Ph.D. in Computer Science; experience as a Security Engineer at Google and Meta. Involved in Bitcoin since 2011; first publication on the topic in 2016.'
  },
  {
    name: 'Nick Fouriezos — Marketing Advisor',
    bio: 'Chief Marketing Officer at Arch Network. 15+ years in marketing and media; has raised close to $100M across his career.'
  }
];

team.forEach(member => {
  checkNewPage(20);
  doc.setFontSize(11);
  doc.setFont(undefined, 'bold');
  doc.setTextColor(darkText);
  doc.text(member.name, margin, yPos);
  yPos += 6;
  
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  const bioLines = doc.splitTextToSize(member.bio, maxWidth);
  bioLines.forEach(line => {
    checkNewPage();
    doc.text(line, margin, yPos);
    yPos += 5;
  });
  yPos += 5;
});

// Section 12.0 Contact
yPos += 10;
checkNewPage(30);

doc.setFontSize(16);
doc.setTextColor(primaryBlue);
doc.setFont(undefined, 'bold');
doc.text('12.0 Contact', margin, yPos);
yPos += 10;

doc.setFontSize(10);
doc.setTextColor(darkText);
doc.setFont(undefined, 'normal');
doc.text('• Learn more: arkova.io', margin + 5, yPos);
yPos += 6;
doc.text('• Email: info@arkova.io', margin + 5, yPos);
yPos += 6;
doc.text('• X (Twitter): @arkovatech', margin + 5, yPos);
yPos += 6;
doc.text('• LinkedIn: Arkova', margin + 5, yPos);

// Footer on last page
yPos = pageHeight - 10;
doc.setDrawColor(229, 231, 235);
doc.line(margin, yPos - 5, 190, yPos - 5);
doc.setFontSize(9);
doc.setTextColor(mutedText);
doc.text('© 2025 Arkova. All rights reserved.', 105, yPos, { align: 'center' });

// Save the PDF
const pdfPath = path.join(__dirname, '..', 'public', 'arkova-whitepaper.pdf');
const pdfBuffer = doc.output('arraybuffer');
fs.writeFileSync(pdfPath, Buffer.from(pdfBuffer));

console.log('✅ Whitepaper PDF generated successfully at public/arkova-whitepaper.pdf');