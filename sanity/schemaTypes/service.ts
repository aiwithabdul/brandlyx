import { defineField, defineType } from 'sanity';

export const service = defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'longDescription',
            title: 'In-depth Description',
            type: 'array',
            of: [{ type: 'text' }],
        }),
        defineField({
            name: 'icon',
            title: 'Icon Type',
            type: 'string',
            description: 'Slug or name of the icon (e.g., seo, digital-marketing)',
        }),
        defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string' },
                        { name: 'description', type: 'text' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'benefits',
            title: 'Benefits',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'pricing',
            title: 'Pricing Tiers',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', type: 'string' },
                        { name: 'price', type: 'string' },
                        { name: 'features', type: 'array', of: [{ type: 'string' }] },
                        { name: 'popular', type: 'boolean' },
                    ],
                },
            ],
        }),
    ],
});
