import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'k0j6fkek',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-04-04',
  token: 'skjzN4Gtk8xJRHHeoTfQuKjaRvuFx7yYwkewH5j3vCXwvt78MrLXNu7qbXfuGLJRuMcDPr7d6Ba7GK6W3apA51vIUtQEqJ3uhUfkz6x26h51BVLCfjptXqp2l8GoxBFjlUFKu1j25dfNjZmIs11RRFmuS2yy1xtIxuV1OLKkFk8FSr7aAyy2',
});

async function absolutePurge() {
  console.log('INITIATING ABSOLUTE PURGE: CLEARING COMMAND CENTER...');
  
  try {
    const posts = await client.fetch('*[_type == "post"]{_id, title}');
    console.log(`Found ${posts.length} posts to remove.`);
    
    for (const post of posts) {
      console.log(`DELETING: ${post.title} [ID: ${post._id}]`);
      await client.delete(post._id);
    }
    
    console.log('PURGE COMPLETE. READY FOR CLEAN DEPLOYMENT.');
  } catch (err) {
    console.error('PURGE FAILURE:', err);
  }
}

absolutePurge();
