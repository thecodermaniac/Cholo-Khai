import { defineType } from 'sanity'

export default defineType({
    name: 'featured',
    title: 'Featured Menu categories',
    type: 'document',
    fields: [
        {
            name: "name",
            type: 'string',
            title: 'Featured Category Name',
            validation: (Rule) => Rule.required(),
        },
        {
            name: "short_description",
            type: 'string',
            title: 'Short description',
            validation: (Rule) => Rule.max(200),
        },
        {
            name: 'restaurants',
            type: 'array',
            title: 'Restaurants',
            of: [{ type: "reference", to: [{ type: 'restaurant' }] }]
        }
    ],
})
