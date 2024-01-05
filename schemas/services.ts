import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: false,
    }),
    defineField({
      name: 'service',
      title: 'Service',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'serviceObject',
          title: 'Service',
          fields: [
            {
              name: 'service',
              title: 'Service Name',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
