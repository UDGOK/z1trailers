import { type SchemaTypeDefinition } from 'sanity'

import author from './author'
import category from './category'
import post from './post'

const hardware = {
  name: 'hardware',
  title: 'Surveillance Hardware',
  type: 'document',
  fields: [
    { name: 'name', title: 'Hardware Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { name: 'badge', title: 'Tier Badge', type: 'string' },
    { name: 'description', title: 'Tactical Description', type: 'text' },
    { name: 'price', title: 'Monthly Lease Price', type: 'number' },
    { name: 'buyPrice', title: 'CapEx Purchase Price', type: 'number' },
  ],
}

const industry = {
  name: 'industry',
  title: 'Target Industries',
  type: 'document',
  fields: [
    { name: 'name', title: 'Sector Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { name: 'description', title: 'Sector Overview', type: 'text' },
    { name: 'hazards', title: 'Threat Vectors', type: 'array', of: [{ type: 'string' }] },
    { name: 'solution', title: 'Tactical Solution', type: 'text' },
  ],
}

const location = {
  name: 'location',
  title: 'Service Jurisdictions',
  type: 'document',
  fields: [
    { name: 'name', title: 'State / Region', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { name: 'subtitle', title: 'Division Priority', type: 'string' },
    { name: 'description', title: 'Operational Description', type: 'text' },
    { name: 'primaryZones', title: 'Dispatch Hubs', type: 'array', of: [{ type: 'string' }] },
  ],
}

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hardware, industry, location, author, category, post],
}
