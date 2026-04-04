import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'k0j6fkek',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-04-04',
  token: 'skjzN4Gtk8xJRHHeoTfQuKjaRvuFx7yYwkewH5j3vCXwvt78MrLXNu7qbXfuGLJRuMcDPr7d6Ba7GK6W3apA51vIUtQEqJ3uhUfkz6x26h51BVLCfjptXqp2l8GoxBFjlUFKu1j25dfNjZmIs11RRFmuS2yy1xtIxuV1OLKkFk8FSr7aAyy2',
});

async function verify() {
  console.log('Querying Sanity for Tactical Intel...');
  const posts = await client.fetch('*[_type == "post"]{title, "slug": slug.current, mainImage, body}');
  console.log(`Found ${posts.length} total posts.`);
  
  posts.forEach((p: any, i: number) => {
    console.log(`[${i+1}] ${p.title}`);
    console.log(`    Slug: ${p.slug}`);
    console.log(`    Image Ref: ${p.mainImage?.asset?._ref || 'MISSING'}`);
    console.log(`    Body Elements: ${p.body?.length || 0}`);
    if (p.body) {
        const table = p.body.find((b: any) => b._type === 'simpleTable');
        console.log(`    Table Present: ${!!table}`);
    }
  });
}

verify();
