import axios from 'axios'
import dotenv from 'dotenv'

export async function getReadBooks(user: string, apiKey: string) {
  const goodreadsApi = `https://www.goodreads.com/review/list/${user}.xml?key=${apiKey}&v=2&shelf=read&per_page=20&sort=date_read&page=1`
  const data = await axios.get(goodreadsApi)

  console.log('=== data', data.data)

  // return parseBookData(Response.)
}

function getGoodreadsCredentials() {
  const user = process.env.GOODREADS_USER
  const apiKey = process.env.GOODREADS_KEY

  if (user && apiKey) {
    return { user, apiKey }
  }

  throw new Error('Goodreads credentials not set')
}
