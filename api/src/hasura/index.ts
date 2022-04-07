import { request, gql } from 'graphql-request'

import { getAdminSecret } from './auth'
import {
  Reading_Event_Mutation_Response,
  Reading_Event_Insert_Input,
  Author_Mutation_Response,
  Author_Insert_Input,
} from '../generated/hasura-graphql'

export async function gqlRequest<Response>(
  body: string,
  options?: {
    variables?: Record<string, unknown>
  },
) {
  return request<Response>(
    'https://humane-civet-22.hasura.app/v1/graphql',
    body,
    options?.variables ?? {},
    {
      'x-hasura-admin-secret': getAdminSecret(),
    },
  )
}

export async function createAuthors(authors: Array<Author_Insert_Input>) {
  const response = await gqlRequest<Author_Mutation_Response>(
    gql`
      mutation MyMutation($authors: [author_insert_input!]!) {
        insert_author(objects: $authors) {
          returning {
            author_id
            name
          }
        }
      }
    `,
    { variables: { authors } },
  )

  return response.returning
}

export async function createReadingEvents(
  readingEvents: Array<Reading_Event_Insert_Input>,
) {
  const response = await gqlRequest<Reading_Event_Mutation_Response>(
    gql`
      mutation MyMutation($readingEvents: [reading_event_insert_input!]!) {
        insert_reading_event(objects: $readingEvents) {
          returning {
            reading_event_id
          }
        }
      }
    `,
    { variables: { readingEvents } },
  )

  return response.returning
}
