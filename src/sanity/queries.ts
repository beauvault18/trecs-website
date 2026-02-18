import { client } from "./client";

// Fetch site settings (contact info, name, etc.)
export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]{
    siteName,
    tagline,
    email,
    phone,
    address,
    logo
  }`);
}

// Fetch all studies, ordered by year
export async function getStudies() {
  return client.fetch(`*[_type == "study"] | order(year desc){
    _id,
    title,
    year,
    description,
    findings,
    fundedBy
  }`);
}

// Fetch all summits, ordered by year
export async function getSummits() {
  return client.fetch(`*[_type == "summit"] | order(year desc){
    _id,
    title,
    year,
    description,
    fundedBy
  }`);
}

// Fetch a page by slug
export async function getPage(slug: string) {
  return client.fetch(
    `*[_type == "page" && slug.current == $slug][0]{
      title,
      heroText,
      content,
      seoDescription
    }`,
    { slug }
  );
}
