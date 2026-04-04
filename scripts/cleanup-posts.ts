import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'k0j6fkek',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-04-04',
  token: 'skjzN4Gtk8xJRHHeoTfQuKjaRvuFx7yYwkewH5j3vCXwvt78MrLXNu7qbXfuGLJRuMcDPr7d6Ba7GK6W3apA51vIUtQEqJ3uhUfkz6x26h51BVLCfjptXqp2l8GoxBFjlUFKu1j25dfNjZmIs11RRFmuS2yy1xtIxuV1OLKkFk8FSr7aAyy2',
});

async function cleanup() {
  console.log('INITIATING PURGE OF NON-STRATEGIC ASSETS...');
  
  try {
    // Fetch all posts that are NOT from the new high-authority author
    const oldPosts = await client.fetch(`*[_type == "post" && author->name != "Sector Analyst HQ"]{_id, title}`);
    
    console.log(`Found ${oldPosts.length} legacy/duplicate posts.`);
    
    for (const post of oldPosts) {
      console.log(`Deleting: ${post.title} [ID: ${post._id}]`);
      await client.delete(post._id);
    }
    
    console.log('CLEANUP COMPLETE. ONLY HIGH-AUTHORITY INTEL REMAINS.');
  } catch (err) {
    console.error('PURGE FAILURE:', err);
  }
}

cleanup();
