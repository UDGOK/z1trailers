import { groq } from 'next-sanity'

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  seoTitle,
  slug,
  mainImage,
  publishedAt,
  excerpt,
  "authorName": author->name,
  "authorRole": author->role,
  "authorImage": author->image,
  "categories": categories[]->title
}`

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  seoTitle,
  slug,
  mainImage,
  body,
  publishedAt,
  excerpt,
  "authorName": author->name,
  "authorRole": author->role,
  "authorLinkedin": author->linkedinUrl,
  "authorImage": author->image,
  "authorBio": author->bio,
  "categories": categories[]->title
}`

export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`
