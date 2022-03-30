import { request, gql } from 'graphql-request'

import { Author, ReadingEvent } from '../types'
import { getAdminSecret } from './auth'

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

export async function getReadingEvents() {
  return gqlRequest<{ reading_event: ReadingEvent[] }>(gql`
    query MyQuery {
      reading_event {
        title
      }
    }
  `)
}

export async function createReadingEvent(
  readingEvent: Omit<ReadingEvent, 'id' | 'author'> & { author_id: string },
) {
  return gqlRequest(
    gql`
      mutation CreateReadingEvent($readingEvent: reading_event_insert_input!) {
        insert_reading_event_one(object: $readingEvent) {
          book_id
        }
      }
    `,
    { variables: { readingEvent } },
  )
}

export async function getAuthorId(authorName: string) {
  const existingAuthor = await gqlRequest<{ author: Author[] }>(
    gql`
      query GetAuthor($authorName: String!) {
        author(where: { name: { _eq: $authorName } }) {
          id
        }
      }
    `,
    { variables: { authorName } },
  )
  const { author } = existingAuthor
  if (author.length > 0) {
    return author[0].id
  }

  const newAuthor = await gqlRequest<{ insert_author_one: { id: string } }>(
    gql`
      mutation MyMutation($authorName: String!) {
        insert_author_one(object: { name: $authorName }) {
          id
        }
      }
    `,
    { variables: { authorName } },
  )
  return newAuthor.insert_author_one.id
}

/*** BULK DATA */
export async function createAuthors(authors: Array<{ name: string }>) {
  const response = await gqlRequest<{
    insert_author: { returning: Array<{ author_id: string; name: string }> }
  }>(
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

  return response.insert_author.returning
}

type ReadingEventInput = {
  book_id: number
  title: string
  my_rating: number
  number_of_pages: number
  date_read: string
  my_review: string
  isbn?: string | undefined
  isbn_13?: string | undefined
  author_id: string
}
export async function createReadingEvents(
  readingEvents: Array<ReadingEventInput>,
) {
  const response = await gqlRequest<{
    returning: Array<ReadingEventInput>
  }>(
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
