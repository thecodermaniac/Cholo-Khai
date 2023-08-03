import { defineType } from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: "name",
      type: 'string',
      title: 'Restaurant name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: 'image',
      title: 'Image of the Restaurant',
    },
    {
      name: "lat",
      type: 'number',
      title: 'Latitude of the Restaurant',
    },
    {
      name: "long",
      type: 'number',
      title: 'Longitude of the Restaurant',
    },
    {
      name: "address",
      type: 'string',
      title: 'Restaurant address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: 'string',
      title: 'Enter a rating between 1 to 5',
      validation: (Rule) => Rule.required().min(1).max(5).error('between 1 and 5')
    },
    {
      name: "type",
      type: 'reference',
      title: 'Category',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required()
    },
    {
      name: "dishes",
      type: 'array',
      title: 'Dishes',
      of: [{ type: 'reference', to: [{ type: 'dish' }] }],
      validation: (Rule) => Rule.required(),
    }
  ],

})
