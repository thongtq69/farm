import type { CollectionConfig } from 'payload'

export const Reels: CollectionConfig = {
  slug: 'reels',
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
      name: 'category',
      type: 'text',
      required: true,
    },
    {
      name: 'duration',
      type: 'text',
      required: true,
    },
    {
      name: 'thumbnail',
      type: 'text',
      required: true,
    },
    {
      name: 'videoUrl',
      type: 'text',
    },
    {
      name: 'videoFile',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Upload video file directly if not using external URL',
      },
    },
  ],
}
