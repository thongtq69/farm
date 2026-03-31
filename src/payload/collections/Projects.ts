import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'meta_description',
      type: 'textarea',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Sân Vườn & Hồ Koi', value: 'san-vuon-ho-koi' },
        { label: 'Farm & Du Lịch Nghỉ Dưỡng', value: 'farm-du-lich-nghi-duong' },
        { label: 'Đá Nhân Tạo Nghệ Thuật', value: 'da-nhan-tao-nghe-thuat' },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'info',
      type: 'group',
      fields: [
        {
          name: 'scale',
          type: 'text',
          defaultValue: 'Farmstay & Homestay',
        },
        {
          name: 'location',
          type: 'text',
          defaultValue: 'Viet Nam',
        },
        {
          name: 'completedYear',
          type: 'text',
          defaultValue: '2025',
        },
        {
          name: 'designConsulting',
          type: 'text',
          defaultValue: 'Son Hai Landscape',
        },
      ],
    },
  ],
}
