export interface ReadingEvent {
  id: string
  book_id: number
  title: string
  author: string
  my_rating: number
  number_of_pages: number
  date_read: string
  my_review: string
  isbn?: string
  isbn_13?: string
}

export interface Author {
  id: string
  name: string
}
