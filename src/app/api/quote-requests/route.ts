import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextResponse } from 'next/server'

export async function GET() {
  const payload = await getPayload({ config })
  return NextResponse.json({ message: 'API is ready', status: 'ready' }, { status: 200 })
}

export async function POST(req: Request) {
  try {
    const payload = await getPayload({ config })
    const body = await req.json()
    const { source, name, phone, propertyType, investment } = body

    if (!name || !phone || !propertyType || !investment) {
      return NextResponse.json({ message: 'Thiếu thông tin bắt buộc.' }, { status: 400 })
    }

    const result = await payload.create({
      collection: 'quote-requests',
      data: {
        source: source || 'website',
        name,
        phone,
        propertyType,
        investment,
      },
    })

    return NextResponse.json({ message: 'Đã lưu yêu cầu tư vấn.', id: result.id }, { status: 201 })
  } catch (error) {
    console.error('quote-requests POST failed', error)
    return NextResponse.json({ message: 'Không thể lưu yêu cầu tư vấn.' }, { status: 500 })
  }
}
