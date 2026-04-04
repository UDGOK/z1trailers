import { createClient } from '@sanity/client';

// We hardcode these to match the env.ts file or pass via env
const client = createClient({
  projectId: 'k0j6fkek',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-04-04',
  token: process.env.SANITY_API_TOKEN || 'skjzN4Gtk8xJRHHeoTfQuKjaRvuFx7yYwkewH5j3vCXwvt78MrLXNu7qbXfuGLJRuMcDPr7d6Ba7GK6W3apA51vIUtQEqJ3uhUfkz6x26h51BVLCfjptXqp2l8GoxBFjlUFKu1j25dfNjZmIs11RRFmuS2yy1xtIxuV1OLKkFk8FSr7aAyy2', // Hardcoded from env.ts for script execution
});

async function main() {
  console.log('Connecting to Sanity Command Center...');
  try {
    // 1. Create Author
    const authorRes = await client.create({
      _type: 'author',
      name: 'HQ Operations Team',
      slug: { _type: 'slug', current: 'hq-operations-team' },
    });
    console.log(`Command Team Author Created: ${authorRes._id}`);

    // 2. Create Category
    const categoryRes = await client.create({
      _type: 'category',
      title: 'Tactical Deployment',
      slug: { _type: 'slug', current: 'tactical-deployment' },
      description: 'Intelligence regarding successful endpoint deployments',
    });
    console.log(`Action Category Created: ${categoryRes._id}`);

    // 3. Create the highly effective post
    const postRes = await client.create({
      _type: 'post',
      title: 'Why Solar-Powered Security Trailers Are the Ultimate Tactical Advantage',
      slug: { _type: 'slug', current: 'why-solar-powered-security-trailers-are-ultimate-tactical-advantage' },
      author: {
        _type: 'reference',
        _ref: authorRes._id,
      },
      categories: [
        {
          _type: 'reference',
          _ref: categoryRes._id,
          _key: 'randomKey123',
        },
      ],
      publishedAt: new Date().toISOString(),
      excerpt: 'Traditional security relies on slow human reaction times and vulnerable power grids. Discover why self-sustaining, AI-driven surveillance trailers provide an unbeatable tactical overmatch for construction sites and large lots.',
      body: [
        {
          _key: 'block1',
          _type: 'block',
          style: 'normal',
          children: [
             {
               _type: 'span',
               marks: [],
               text: 'In the modern threat landscape, relying on purely stationary, grid-dependent camera systems or unarmed human patrols leaves critical infrastructure severely exposed. Mobile Security Surveillance Trailers have fundamentally rewritten the rules of engagement for asset protection.'
             }
          ]
        },
        {
          _key: 'block2',
          _type: 'block',
          style: 'h2',
          children: [
             {
               _type: 'span',
               marks: [],
               text: 'Absolute Autonomy: Cutting the Cord'
             }
          ]
        },
        {
          _key: 'block3',
          _type: 'block',
          style: 'normal',
          children: [
             {
               _type: 'span',
               marks: [],
               text: 'Traditional systems fail when the power goes out. Our endpoints are driven by high-yield solar arrays coupled with massive onboard battery reserves. This means 24/7/365 uptime in total blackout conditions. Even without sunlight, units like the Z1 Guardian can persist for up to 10 days, maintaining their tactical advantage when adversaries assume defenses are down.'
             }
          ]
        },
         {
          _key: 'block4',
          _type: 'block',
          style: 'h2',
          children: [
             {
               _type: 'span',
               marks: [],
               text: 'Force Multiplication via Deep Learning'
             }
          ]
        },
        {
          _key: 'block5',
          _type: 'block',
          style: 'normal',
          children: [
             {
               _type: 'span',
               marks: [],
               text: 'A human guard can only watch one sector at a time and suffers from fatigue. The onboard Neural Processing Units within Z1 endpoints process thermal anomalies, verify vehicle heat signatures, and instantly read license plates (LPR) simultaneously across a 360-degree perimeter. When an intrusion is detected, the AI triggers defensive countermeasures before the target even breaches the fencing.'
             }
          ]
        },
        {
          _key: 'block6',
          _type: 'block',
          style: 'blockquote',
          children: [
             {
               _type: 'span',
               marks: [],
               text: '"Our construction sites saw a 98% reduction in copper theft within 48 hours of deploying the first Z1 Command unit. The psychological deterrent alone is worth the investment." - Operational Director, Zenith Construction'
             }
          ]
        },
        {
          _key: 'block7',
          _type: 'block',
          style: 'h2',
          children: [
             {
               _type: 'span',
               marks: [],
               text: 'Rapid Deployment: From Zero to Secure in 15 Minutes'
             }
          ]
        },
        {
          _key: 'block8',
          _type: 'block',
          style: 'normal',
          children: [
             {
               _type: 'span',
               marks: [],
               text: 'Time is the most critical metric in asset security. Hardwiring a new site takes weeks. Z1 trailers are hitched, towed to the sector, positioned, and the mast is deployed in under 15 minutes. With Starlink integration on advanced models, you immediately establish a high-bandwidth command center overlay anywhere on the planet.'
             }
          ]
        }
      ]
    });
    console.log(`Success! Intelligence Briefing uploaded: ${postRes._id}`);
  } catch (err) {
    console.error('Failed to create documents', err);
  }
}

main();
