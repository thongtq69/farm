import mongoose from 'mongoose';
import crypto from 'crypto';

const uri = 'mongodb+srv://thame6868_db_user:8kIgcRztgxZRy5Od@cluster0.jninzmt.mongodb.net/?appName=Cluster0';

async function main() {
  await mongoose.connect(uri);
  // Default db might be test, or payload, let's list dbs
  const db = mongoose.connection.client.db('test');
  
  // Create an admin user with a known hash. 
  // Payload uses bcrypt or similar. Actually, if we use crypto.randomBytes to create a salt, wait no, 
  // Let's just create a new collection API script with payload or try to require bcrypt.
  
  try {
     const bcrypt = await import('bcryptjs');
     const hash = await bcrypt.default.hash('Password123!', 10);
     const res = await db.collection('users').updateOne(
        { email: 'admin@thuychi.com' },
        { $set: { hash: hash } }
     );
     console.log('Password reset successfully for admin@thuychi.com using bcryptjs.', res.modifiedCount);
  } catch(e) {
     try {
       const bcrypt = await import('bcrypt');
       const hash = await bcrypt.default.hash('Password123!', 10);
       const res = await db.collection('users').updateOne(
          { email: 'admin@thuychi.com' },
          { $set: { hash: hash } }
       );
       console.log('Password reset successfully for admin@thuychi.com using bcrypt.', res.modifiedCount);
     } catch(e2) {
       console.log('Could not load bcrypt to reset password natively.');
     }
  }

  process.exit(0);
}

main().catch(err => { console.error(err); process.exit(1); });
