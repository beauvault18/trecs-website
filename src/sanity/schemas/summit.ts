import { defineType, defineField } from "sanity";

export const summit = defineType({
  name: "summit",
  title: "Senior Care Leadership Summit",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Summit Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "fundedBy",
      title: "Funded By",
      type: "string",
    }),
  ],
  orderings: [
    {
      title: "Year (Newest First)",
      name: "yearDesc",
      by: [{ field: "year", direction: "desc" }],
    },
  ],
});
