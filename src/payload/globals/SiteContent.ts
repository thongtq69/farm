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
        { name: 'logo', type: 'upload', relationTo: 'media' },
        { name: 'logoAlt', type: 'text' },
        { name: 'mobileMenuTitle', type: 'text', defaultValue: 'MAIN MENU' },
        { name: 'contactPhone', type: 'text' },
        { name: 'contactLabel', type: 'text' },
        {
          name: 'navLinks',
          type: 'array',
          fields: [
            { name: 'name', type: 'text', required: true },
            { name: 'href', type: 'text', required: true },
            { name: 'dropdown', type: 'checkbox' },
          ],
        },
        {
          name: 'projectLinks',
          type: 'array',
          fields: [
            { name: 'name', type: 'text', required: true },
            { name: 'href', type: 'text', required: true },
          ],
        },
      ],
    },
    {
      name: 'footer',
      type: 'group',
      fields: [
        { name: 'logo', type: 'upload', relationTo: 'media' },
        { name: 'logoAlt', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'officeTitle', type: 'text' },
        { name: 'officeAddress', type: 'text' },
        { name: 'contactTitle', type: 'text' },
        {
          name: 'contactLines',
          type: 'array',
          fields: [{ name: 'line', type: 'text' }],
        },
        { name: 'menuTitle', type: 'text' },
        {
          name: 'menuLinks',
          type: 'array',
          fields: [
            { name: 'name', type: 'text', required: true },
            { name: 'href', type: 'text', required: true },
          ],
        },
        {
          name: 'socialLinks',
          type: 'array',
          fields: [
            { name: 'label', type: 'text' },
            { name: 'href', type: 'text' },
            { name: 'type', type: 'select', options: ['facebook', 'instagram', 'image'] },
            { name: 'imageUrl', type: 'text' }, // Still string for external or can use upload
            { name: 'image', type: 'upload', relationTo: 'media' },
          ],
        },
        { name: 'copyright', type: 'text' },
      ],
    },
    {
      name: 'mobileContact',
      type: 'group',
      fields: [
        { name: 'zaloHref', type: 'text' },
        { name: 'zaloIcon', type: 'upload', relationTo: 'media' },
        { name: 'phoneHref', type: 'text' },
      ],
    },
    {
      name: 'consultationPopup',
      type: 'group',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'submitLabel', type: 'text' },
        { name: 'successMessage', type: 'textarea' },
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
            { name: 'primaryCtaLabel', type: 'text' },
            { name: 'primaryCtaHref', type: 'text' },
            { name: 'secondaryCtaLabel', type: 'text' },
            { name: 'secondaryCtaHref', type: 'text' },
            { name: 'foregroundImage', type: 'upload', relationTo: 'media' },
            {
              name: 'slides',
              type: 'array',
              fields: [{ name: 'image', type: 'upload', relationTo: 'media' }],
            },
          ],
        },
        {
          name: 'highlights',
          type: 'array',
          fields: [
            { name: 'title', type: 'text' },
            { name: 'desc', type: 'text' },
            { name: 'icon', type: 'text' },
          ],
        },
        {
          name: 'services',
          type: 'group',
          fields: [
            { name: 'eyebrow', type: 'text' },
            { name: 'title', type: 'text' },
            { name: 'description', type: 'textarea' },
            {
              name: 'items',
              type: 'array',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'desc', type: 'textarea' },
                { name: 'image', type: 'upload', relationTo: 'media' },
                { name: 'href', type: 'text' },
              ],
            },
          ],
        },
        {
          name: 'mission',
          type: 'group',
          fields: [
            { name: 'eyebrow', type: 'text' },
            { name: 'titleHtml', type: 'text' },
            { name: 'description', type: 'textarea' },
            {
              name: 'features',
              type: 'array',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea' },
                { name: 'icon', type: 'upload', relationTo: 'media' },
              ],
            },
            {
                name: 'cta',
                type: 'group',
                fields: [
                    { name: 'title', type: 'text' },
                    { name: 'subtitle', type: 'text' },
                    { name: 'phoneLabel', type: 'text' },
                    { name: 'phoneHref', type: 'text' },
                ]
            },
            { name: 'image', type: 'upload', relationTo: 'media' },
            { name: 'imageAlt', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'about',
      type: 'group',
      fields: [
        {
          name: 'hero',
          type: 'group',
          fields: [
            { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
            { name: 'eyebrow', type: 'text' },
            { name: 'title', type: 'text' },
            { name: 'description', type: 'textarea' },
          ],
        },
        { name: 'philosophy', type: 'textarea' },
        {
            name: 'team',
            type: 'group',
            fields: [
                { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
                { name: 'eyebrow', type: 'text' },
                { name: 'title', type: 'text' },
                {
                    name: 'members',
                    type: 'array',
                    fields: [
                        { name: 'name', type: 'text' },
                        { name: 'role', type: 'text' },
                        { name: 'image', type: 'upload', relationTo: 'media' },
                        { name: 'desc', type: 'textarea' },
                    ]
                }
            ]
        }
      ],
    },
  ],
}
