import {defineField, defineType} from 'sanity'

const sectionCTA = defineType({
  name: 'section-cta',
  title: 'Section CTA',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'calltoaction',
      title: 'Call to Action',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export default sectionCTA
