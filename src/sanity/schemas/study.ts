import { defineType, defineField } from "sanity";

export const study = defineType({
  name: "study",
  title: "Health Care Impact Study",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "findings",
      title: "Key Findings",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "fundedBy",
      title: "Funded By",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
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
