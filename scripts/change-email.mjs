import mongoose from 'mongoose';

const uri = 'mongodb+srv://thame6868_db_user:8kIgcRztgxZRy5Od@cluster0.jninzmt.mongodb.net/?appName=Cluster0';

async function main() {
  await mongoose.connect(uri);
  const db = mongoose.connection.client.db('test');

  const res = await db.collection('users').updateOne(
    { email: 'admin@thuychi.com' },
    { $set: { email: 'admin@sonhai.com' } }
  );

  if (res.modifiedCount > 0) {
    console.log('Thành công! Đã đổi email thành admin@sonhai.com');
  } else {
    // If not found, create a new one instead of failing or check if already sonhai.com
    const exists = await db.collection('users').findOne({ email: 'admin@sonhai.com' });
    if (exists) {
        console.log('Email admin@sonhai.com đã tồn tại trong database!');
    } else {
        console.log('Không tìm thấy tài khoản admin@thuychi.com để đổi tên.');
    }
  }

  process.exit(0);
}

main().catch(err => { console.error(err); process.exit(1); });
