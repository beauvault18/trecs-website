import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "@/sanity/schemas";
import { sanityConfig } from "@/sanity/config";

export default defineConfig({
  name: "trecs-institute",
  title: "The TRECS Institute",
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
