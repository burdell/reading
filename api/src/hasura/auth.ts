import dotenv from 'dotenv'

if (process.env.NODE_ENV === 'local') {
  dotenv.config()
}

export function getAdminSecret() {
  const secret = process.env.HASURA_GRAPHQL_ADMIN_SECRET
  if (!secret) {
    throw new Error('Hasura GraphQL admin secret not set')
  }
  return secret
}
