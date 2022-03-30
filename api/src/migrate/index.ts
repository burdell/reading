import AWS, { AWSError, DynamoDB } from 'aws-sdk'
import { ScanOutput } from 'aws-sdk/clients/dynamodb'
import dotenv from 'dotenv'
import { PromiseResult } from 'aws-sdk/lib/request'

import { ReadingEvent } from '../types'
import { createReadingEvents, createAuthors } from '../hasura'
import { writeToFile } from '../utils'

if (process.env.NODE_ENV === 'local') {
  dotenv.config()
  const credentials = new AWS.SharedIniFileCredentials()
  AWS.config.credentials = credentials
  AWS.config.update({ region: 'us-east-1' })
}

async function migrate() {
  const books = await getDynamoBooks()
  const uniqueAuthors = Object.values(
    books.reduce<{ [name: string]: { name: string } }>((acc, book) => {
      if (!acc[book.author]) {
        acc[book.author] = { name: book.author }
      }
      return acc
    }, {}),
  )

  // const authors = uniqueAuthors.map((a) => ({
  //   ...a,
  //   author_id:
  //     Math.random().toString(36).substring(2, 15) +
  //     Math.random().toString(36).substring(2, 15),
  // }))
  // writeToFile(authors, './', 'result')
  const authors = await createAuthors(uniqueAuthors)

  function getAuthorId(authorName: string) {
    const author = authors.find((a) => a.name === authorName)
    if (!author) {
      throw new Error(`Author ${authorName} not found`)
    }
    return author.author_id
  }

  const booksPayload = books.map((book) => {
    const { author, id, ...theRest } = book
    if (!theRest.number_of_pages) {
      console.log(`${theRest.title}: ${theRest.number_of_pages}`)
    }
    const authorId = getAuthorId(author)
    return {
      author_id: authorId,
      ...theRest,
    }
  })

  await createReadingEvents(booksPayload)
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

async function getDynamoBooks() {
  return scanTable<ReadingEvent>('Books')
}

migrate()
