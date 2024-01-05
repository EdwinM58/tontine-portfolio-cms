import {defineField, defineType} from 'sanity'
import sectionCTA from './section-cta'
import sectionInfo from './section-info'

export default defineType({
  name: 'landingpage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Landing Page',
      type: 'string',
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {name: 'ctaSection', type: 'reference', to: sectionCTA},
        {name: 'infoSection', type: 'reference', to: sectionInfo},
      ],
    }),
  ],
})
