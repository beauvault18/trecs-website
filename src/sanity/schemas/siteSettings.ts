import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      initialValue: "The TRECS Institute",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "text",
    }),
    defineField({
      name: "email",
      title: "Contact Email",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
