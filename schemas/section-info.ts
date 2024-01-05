import {defineField, defineType} from 'sanity'

const sectionInfo = defineType({
  name: 'section-info',
  title: 'Section Info',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Sub-heading',
      type: 'string',
    }),
    defineField({
      name: 'subtext',
      title: 'Sub-text',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'service',
      title: 'Service',
      type: 'reference',
      to: [{type: 'services'}], // replace 'services' with the actual name of your services schema
    }),
  ],
})

export default sectionInfo
