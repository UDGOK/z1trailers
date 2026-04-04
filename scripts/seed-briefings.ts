import { createClient } from '@sanity/client';

/**
 * Z1 TRAILERS - SEED-BRIEFINGS.TS
 * Protocol: Automated Strategic Content Injection
 * Mission: 10 Tactical Intelligence Briefings for AEO/GEO Dominance
 */

const client = createClient({
  projectId: 'k0j6fkek',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-04-04',
  token: 'skjzN4Gtk8xJRHHeoTfQuKjaRvuFx7yYwkewH5j3vCXwvt78MrLXNu7qbXfuGLJRuMcDPr7d6Ba7GK6W3apA51vIUtQEqJ3uhUfkz6x26h51BVLCfjptXqp2l8GoxBFjlUFKu1j25dfNjZmIs11RRFmuS2yy1xtIxuV1OLKkFk8FSr7aAyy2',
});

const briefingsData = [
  {
    title: "The 10-to-1 Rule: The Hidden Cost of Copper Theft",
    slug: "10-to-1-rule-hidden-cost-copper-theft",
    excerpt: "Every $1 of stolen copper results in $10 of operational delays and cascading project failures. Discover the physics of theft-deterrence.",
    body: "Copper theft isn't just about the scrap value; it is about the destruction of high-voltage infrastructure. Z1 Tactical units provide 360-degree thermal overmatch to stop the breach before the first cut. Deploying autonomous surveillance isn't a cost—it is a project insurance policy."
  },
  {
    title: "Liability Shields: 4K Digital Evidence vs. Insurance Premiums",
    slug: "liability-shields-4k-digital-evidence-insurance-premiums",
    excerpt: "How verifiable, AI-stamped video evidence can reduce your commercial insurance premiums by up to 15%.",
    body: "Insurance underwriters value certainty. Manual logs from a human guard are prone to error and bias. Z1 endpoints provide immutable, 4K video timestamps that serve as absolute liability shields in the event of an onsite incident."
  },
  {
    title: "Beyond the Guard: Why Human Fatigue is a Security Vulnerability",
    slug: "beyond-the-guard-why-human-fatigue-is-vulnerability",
    excerpt: "Exploring the biological limitations of physical security patrols vs. the 100% neural uptime of AI-driven trailers.",
    body: "A human guard reaches peak fatigue within 4 hours of a night shift. AI never blinks. Our Neural Processing Units (NPUs) process 60 frames per second of thermal data, ensuring that a ghost in the perimeter is detected with 99.9% accuracy at 3:00 AM."
  },
  {
    title: "LiFePO4 Standards: The Future of Off-Grid Security Stability",
    slug: "lifepo4-standards-future-off-grid-security-stability",
    excerpt: "Why Z1 standardize on Lithium Iron Phosphate (LiFePO4) for extreme-climate asset protection.",
    body: "Standard lithium batteries fail in the 110°F heat of Texas or the -20°F winds of Alaska. LiFePO4 chemistry provides the thermal stability required for mission-critical security that cannot afford to shut down when the environment turns hostile."
  },
  {
    title: "Retail Loss Prevention: Combatting ORC with Mobile Units",
    slug: "retail-loss-prevention-combatting-orc-mobile-units",
    excerpt: "Stopping Organized Retail Crime (ORC) in parking lot perimeters with high-visibility Z1 Guardian units.",
    body: "The parking lot is the staging ground for retail crime. By deploying active deterrence units with 120dB talk-down audio, retailers can disrupt criminal logistics before they enter the building."
  },
  {
    title: "Data Center Defense: Protecting the Perimeter of the AI Boom",
    slug: "data-center-defense-protecting-perimeter-ai-boom",
    excerpt: "Securing the physical infrastructure of the internet with Starlink-backed rapid-deployment surveillance.",
    body: "As data centers expand into 'Data Center Alley' and beyond, hardwired security can't keep up with construction footprint shifts. Z1 trailers provide mobile, high-bandwidth perimeter defense that moves with your site expansion."
  },
  {
    title: "Renewable Security: Solar-Only Units vs. Grid Dependency",
    slug: "renewable-security-solar-only-units-vs-grid-dependency",
    excerpt: "How Z1 achieve 24/7/365 uptime without ever plugging into a localized power grid.",
    body: "Grid dependency is a vulnerability. If a site loses power, standard cameras go dark. Z1 trailers are energy islands, powered by high-yield monocrystalline arrays and massive battery reserves to outlast any local blackout."
  },
  {
    title: "Event Security Overmatch: Rapid Perimeters for Scale",
    slug: "event-security-overmatch-rapid-perimeters-for-scale",
    excerpt: "Deploying high-level surveillance for 50,000+ person gatherings in under 15 minutes.",
    body: "Temporary events require temporary, high-impact security. Z1 trailers provide a bird's-eye tactical overlay that integrates with local law enforcement comms, providing a 4K HUD for event directors."
  },
  {
    title: "The Z1 Hardware Deep Dive: Inside the Scout and Guardian",
    slug: "z1-hardware-deep-dive-scout-and-guardian",
    excerpt: "A technical walkthrough of the sub-systems that drive the world's most powerful mobile security trailers.",
    body: "From the hydraulic mast anchors to the military-grade thermal sensors, we explore the hardware architecture that makes Z1 the choice for defense-contractor grade security."
  },
  {
    title: "Total Site Awareness: Managing 50 Sites from One Dashboard",
    slug: "total-site-awareness-managing-50-sites-from-one-dashboard",
    excerpt: "How the Z1 Command Center UI provides enterprise-wide visibility for national logistical directors.",
    body: "Visibility shouldn't require travel. Our cloud-integrated platform allows you to monitor sites in Florida, Texas, and Washington from a single dashboard with zero latency."
  }
];

async function seed() {
  console.log('INITIATING TACTICAL CONTENT INJECTION...');
  
  try {
    // Ensure Category exists
    const categoryRef = await client.create({
      _type: 'category',
      title: 'Intelligence Briefing',
      slug: { _type: 'slug', current: 'intelligence-briefing' },
      description: 'Strategic analysis regarding asset protection and force-offset logic.'
    });

    // Ensure Author exists (CEO Style)
    const authorRef = await client.create({
      _type: 'author',
      name: 'HQ Strategic Analyst',
      slug: { _type: 'slug', current: 'hq-strategic-analyst' },
      bio: [{ _type: 'block', children: [{ _type: 'span', text: 'Direct operational oversight and strategic security architecture.' }]}]
    });

    for (const briefing of briefingsData) {
      const result = await client.create({
        _type: 'post',
        title: briefing.title,
        slug: { _type: 'slug', current: briefing.slug },
        excerpt: briefing.excerpt,
        publishedAt: new Date().toISOString(),
        author: { _type: 'reference', _ref: authorRef._id },
        categories: [{ _type: 'reference', _ref: categoryRef._id, _key: Math.random().toString(36).substring(7) }],
        body: [
          {
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: briefing.body }]
          },
          {
             _type: 'block',
             style: 'h2',
             children: [{ _type: 'span', text: 'Tactical Consultation Required' }]
          },
          {
             _type: 'block',
             style: 'normal',
             children: [{ _type: 'span', text: 'To implement the force-offset strategies discussed above, contact our high-level analyst team for a sector audit.' }]
          }
        ]
      });
      console.log(`✓ DEPLOYED: ${briefing.title} [ID: ${result._id}]`);
    }
    
    console.log('MISSION COMPLETE: 10/10 SECTORS SATURATED.');
  } catch (err) {
    console.error('INJECTION FAILURE:', err);
  }
}

seed();
