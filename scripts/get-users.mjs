import mongoose from 'mongoose';
import crypto from 'crypto';

const uri = 'mongodb+srv://thame6868_db_user:8kIgcRztgxZRy5Od@cluster0.jninzmt.mongodb.net/?appName=Cluster0';

async function main() {
  await mongoose.connect(uri);
  // Default db might be test, or payload, let's list dbs
  const admin = mongoose.connection.db.admin();
  const list = await admin.listDatabases();
  console.log('Databases:', list.databases.map(d => d.name));
  
  for (const dbInfo of list.databases) {
    if (dbInfo.name === 'admin' || dbInfo.name === 'local') continue;
    
    const db = mongoose.connection.client.db(dbInfo.name);
    const users = await db.collection('users').find({}).toArray();
    if (users.length > 0) {
       console.log(`\nFound users in database [${dbInfo.name}]:`);
       for (const u of users) {
          console.log(`- ${u.email}`);
       }
    }
  }
  process.exit(0);
}

main().catch(err => { console.error(err); process.exit(1); });
