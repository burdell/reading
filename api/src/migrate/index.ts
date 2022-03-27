import { resolve } from 'path'
import AWS, { AWSError, DynamoDB } from 'aws-sdk'
import { BatchWriteItemInput, ScanOutput } from 'aws-sdk/clients/dynamodb'
import axios from 'axios'
import dotenv from 'dotenv'
import { request, gql } from 'graphql-request'

import { Author, Book } from './types'
import { PromiseResult } from 'aws-sdk/lib/request'

if (process.env.NODE_ENV === 'local') {
  dotenv.config()
  const credentials = new AWS.SharedIniFileCredentials()
  AWS.config.credentials = credentials
  AWS.config.update({ region: 'us-east-1' })
}

async function migrate() {
  const books = await getDynamoBooks()
  for (const book of books) {
    const { author, id, ...theRest } = book
    if (!theRest.number_of_pages) {
      console.log(`${theRest.title}: ${theRest.number_of_pages}`)
    }
    const authorId = await getAuthorId(author)
    await createReadingEvent({
      author_id: authorId,
      ...theRest,
    })
  }
}

const db = new DynamoDB.DocumentClient()
async function scanTable<DataType>(tableName: string) {
  const params: DynamoDB.DocumentClient.ScanInput = {
    TableName: tableName,
  }

  const scanResults: DataType[] = []
  let items: PromiseResult<ScanOutput, AWSError>
  do {
    items = await db.scan(params).promise()
    items.Items?.forEach((item) =>
      scanResults.push((item as unknown) as DataType),
    )
    params.ExclusiveStartKey = items.LastEvaluatedKey
  } while (typeof items.LastEvaluatedKey !== 'undefined')

  return scanResults
}

async function createReadingEvent(
  readingEvent: Omit<Book, 'id' | 'author'> & { author_id: string },
) {
  const mutation = gql`
    mutation CreateReadingEvent($readingEvent: reading_event_insert_input!) {
      insert_reading_event_one(object: $readingEvent) {
        book_id
      }
    }
  `

  await request<{
    insert_author: { returning: { id: string }[] }
  }>('http://localhost:8080/v1/graphql', mutation, { readingEvent })
}

async function getDynamoBooks() {
  return scanTable<Book>('Books')
}

async function getAuthorId(authorName: string) {
  const query = gql`
    query GetAuthor($authorName: String!) {
      author(where: { name: { _eq: $authorName } }) {
        id
      }
    }
  `
  const params = { authorName }
  const queryResponse = await request<{ author: Author[] }>(
    'http://localhost:8080/v1/graphql',
    query,
    params,
  )

  const { author } = queryResponse
  if (author.length > 0) {
    return author[0].id
  }

  const mutation = gql`
    mutation MyMutation($authorName: String!) {
      insert_author_one(object: { name: $authorName }) {
        id
      }
    }
  `
  const mutationResponse = await request<{
    insert_author_one: { id: string }
  }>('http://localhost:8080/v1/graphql', mutation, params)

  return mutationResponse.insert_author_one.id
}
migrate()
