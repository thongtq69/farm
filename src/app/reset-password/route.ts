import { getPayload } from 'payload';
import configPromise from '@/payload.config';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise });
    
    // Check if user exists
    const users = await payload.find({
      collection: 'users',
      where: {
        email: { equals: 'admin@sonhai.com' }
      }
    });

    if (users.totalDocs > 0) {
      const adminId = users.docs[0].id;
      await payload.update({
        collection: 'users',
        id: adminId,
        data: {
          password: 'Password123!',
        }
      });
      return NextResponse.json({ message: 'Reset password for admin@sonhai.com to Password123!' });
    } else {
      await payload.create({
        collection: 'users',
        data: {
          email: 'admin@sonhai.com',
          password: 'Password123!'
        }
      });
      return NextResponse.json({ message: 'Created admin@sonhai.com / Password123!' });
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
