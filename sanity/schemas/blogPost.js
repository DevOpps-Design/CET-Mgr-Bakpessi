export default {
  name: 'blogPost',
  title: 'Article / Événement',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Résumé',
      type: 'text',
      rows: 3,
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Innovation', value: 'Innovation' },
          { title: 'Réussite', value: 'Réussite' },
          { title: 'Événements', value: 'Événements' },
          { title: 'Pédagogie', value: 'Pédagogie' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
    {
      name: 'eventDate',
      title: "Date de l'événement (optionnel)",
      type: 'datetime',
      description: 'À remplir uniquement pour les événements',
    },
    {
      name: 'image',
      title: 'Image à la une',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Texte alternatif',
          type: 'string',
        },
      ],
    },
    {
      name: 'body',
      title: 'Contenu',
      type: 'blockContent',
    },
  ],
  orderings: [
    {
      title: 'Date de publication',
      name: 'publishedAt',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'category',
    },
  },
}
