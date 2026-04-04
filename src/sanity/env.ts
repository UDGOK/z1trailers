export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-04-04'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Provided by Z1 Command
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'k0j6fkek'

export const token = process.env.SANITY_API_TOKEN || 'skjzN4Gtk8xJRHHeoTfQuKjaRvuFx7yYwkewH5j3vCXwvt78MrLXNu7qbXfuGLJRuMcDPr7d6Ba7GK6W3apA51vIUtQEqJ3uhUfkz6x26h51BVLCfjptXqp2l8GoxBFjlUFKu1j25dfNjZmIs11RRFmuS2yy1xtIxuV1OLKkFk8FSr7aAyy2'

// Set to false to bypass edge-cache for real-time surveillance updates
export const useCdn = false
