import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await dbConnect();
    return NextResponse.json({ message: 'Kết nối MongoDB Atlas thành công!' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Lỗi kết nối MongoDB', error: error.message }, { status: 500 });
  }
}
