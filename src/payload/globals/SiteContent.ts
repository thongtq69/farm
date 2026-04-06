import type { GlobalConfig } from 'payload'

export const SiteContent: GlobalConfig = {
  slug: 'site-content',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'header',
      type: 'group',
      fields: [
        { name: 'logoUrl', type: 'text', required: true },
        { name: 'logoAlt', type: 'text', required: true },
        { name: 'mobileMenuTitle', type: 'text', defaultValue: 'MAIN MENU' },
        { name: 'contactPhone', type: 'text', required: true },
        { name: 'contactLabel', type: 'text', required: true },
        {
          name: 'navLinks',
          type: 'array',
          fields: [
            { name: 'name', type: 'text', required: true },
            { name: 'href', type: 'text', required: true },
            { name: 'dropdown', type: 'checkbox' },
          ],
        },
      ],
    },
    {
      name: 'footer',
      type: 'group',
      fields: [
        { name: 'logoUrl', type: 'text', required: true },
        { name: 'logoAlt', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'officeTitle', type: 'text', required: true },
        {
          name: 'officeAddress',
          type: 'array',
          fields: [{ name: 'address', type: 'text' }],
        },
        { name: 'contactTitle', type: 'text', required: true },
        {
          name: 'contactLines',
          type: 'array',
          fields: [{ name: 'line', type: 'text' }],
        },
        { name: 'copyright', type: 'text', required: true },
      ],
    },
    {
      name: 'consultationPopup',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'submitLabel', type: 'text', required: true },
        { name: 'successMessage', type: 'textarea', required: true },
        {
          name: 'footerBadges',
          type: 'array',
          fields: [{ name: 'badge', type: 'text' }],
        },
      ],
    },
    {
      name: 'home',
      type: 'group',
      fields: [
        {
          name: 'hero',
          type: 'group',
          fields: [
            { name: 'eyebrow', type: 'text' },
            { name: 'titleLine1', type: 'text' },
            { name: 'titleLine2', type: 'text' },
            { name: 'description', type: 'textarea' },
            { name: 'foregroundImage', type: 'text' },
          ],
        },
      ],
    },
  ],
}
