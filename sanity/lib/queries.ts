import { groq } from 'next-sanity';

// Services
export const servicesQuery = groq`*[_type == "service"]{
  title,
  "slug": slug.current,
  description,
  icon,
  features,
  benefits,
  pricing
}`;

export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0]{
  ...
}`;

// Locations
export const locationsQuery = groq`*[_type == "location"]{
  name,
  "slug": slug.current,
  tagline,
  description,
  image,
  stats
}`;

export const locationBySlugQuery = groq`*[_type == "location" && slug.current == $slug][0]{
  ...
}`;

// Blog
export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc){
  title,
  "slug": slug.current,
  author->,
  mainImage,
  categories[]->,
  publishedAt,
  body
}`;
