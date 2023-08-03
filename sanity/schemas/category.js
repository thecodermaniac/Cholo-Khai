import { defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Menu category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image of Category',
      type: 'image'
    },
  ],
})
