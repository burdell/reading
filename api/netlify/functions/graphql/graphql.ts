// import { ApolloServer } from 'apollo-server-lambda'
// import fs from 'fs'

// import { Resolvers } from '../../../generated/client-graphql'
// import {} from '../../../src/hasura'

// const resolvers: Resolvers = {
//   Query: {
//     readingEvents: async () => {
//       return []
//     },
//   },
// }
// const typeDefs = fs.readFileSync('./functions/assets/schema.graphql', 'utf-8')

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// })

// const handler = server.createHandler()

// module.exports = { handler }

import { Handler } from '@netlify/functions'

const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World' }),
  }
}

export { handler }
