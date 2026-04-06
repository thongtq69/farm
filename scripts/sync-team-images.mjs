import { getPayload } from 'payload';
import config from '../src/payload.config.js';
import { defaultSiteContent } from '../src/lib/site-content-static.js';

async function updateTeamImages() {
  const payload = await getPayload({ config });
  
  console.log('Updating site-content global with swapped team images...');
  
  await payload.updateGlobal({
    slug: 'site-content',
    data: defaultSiteContent,
  });
  
  console.log('Update successful!');
  process.exit(0);
}

updateTeamImages().catch(err => {
  console.error(err);
  process.exit(1);
});
