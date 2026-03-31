import mongoose from 'mongoose';

const uri = 'mongodb+srv://thame6868_db_user:8kIgcRztgxZRy5Od@cluster0.jninzmt.mongodb.net/?appName=Cluster0';

async function main() {
  await mongoose.connect(uri);
  const db = mongoose.connection.client.db('test');

  const res = await db.collection('users').updateOne(
    { email: 'admin@sonhai.com' },
    { $set: { _verified: true } }
  );

  if (res.modifiedCount > 0) {
    console.log('Thành công! Đã xác thực (verify) tài khoản admin@sonhai.com');
  } else {
    console.log('Không tìm thấy tài khoản admin@sonhai.com để xác thực.');
  }

  process.exit(0);
}

main().catch(err => { console.error(err); process.exit(1); });
