import mongoose from 'mongoose';

const uri = 'mongodb+srv://thame6868_db_user:8kIgcRztgxZRy5Od@cluster0.jninzmt.mongodb.net/?appName=Cluster0';

async function main() {
  await mongoose.connect(uri, { dbName: 'farm' });
  const db = mongoose.connection.client.db('farm');
  
  const collections = ['projects', 'reels', 'quote-requests', 'media'];
  
  for (const col of collections) {
     const count = await db.collection(col).countDocuments();
     console.log(`Collection [${col}] has ${count} documents.`);
     if (count > 0) {
        const first = await db.collection(col).findOne({});
        console.log(`Sample [${col}]:`, JSON.stringify(first).substring(0, 200));
     }
  }
  
  process.exit(0);
}

main().catch(console.error);
