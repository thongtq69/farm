import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import QuoteRequest from '@/models/QuoteRequest';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { source, name, phone, propertyType, investment } = body;

    if (!name || !phone || !propertyType || !investment) {
      return NextResponse.json({ message: 'Thiếu thông tin bắt buộc.' }, { status: 400 });
    }

    await dbConnect();
    await QuoteRequest.create({
      source: source || 'website',
      name,
      phone,
      propertyType,
      investment
    });

    return NextResponse.json({ message: 'Đã lưu yêu cầu tư vấn.' }, { status: 201 });
  } catch (error) {
    console.error('quote-requests POST failed', error);
    return NextResponse.json({ message: 'Không thể lưu yêu cầu tư vấn.' }, { status: 500 });
  }
}
