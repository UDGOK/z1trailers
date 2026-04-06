import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (H1 UI Header)',
      type: 'string',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title (Meta Header)',
      type: 'string',
      description: 'Used for the actual <title> tag on Google. Keep it keyword rich.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Tactical Caption',
        }
      ]
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Tactical Caption',
            }
          ]
        },
        {
          type: 'object',
          name: 'simpleTable',
          title: 'Tactical Data Table',
          fields: [
            {
              name: 'rows',
              type: 'array',
              title: 'Table Rows',
              of: [
                {
                  type: 'object',
                  name: 'tableRow',
                  fields: [
                    {
                      name: 'cells',
                      type: 'array',
                      title: 'Cells',
                      of: [{ type: 'string' }]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short summary of the post for blog lists.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
