import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  authorId: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  readingEvents: Array<ReadingEvent>;
};

export type ReadingEvent = {
  __typename?: 'ReadingEvent';
  authorId: Scalars['String'];
  bookId?: Maybe<Scalars['Int']>;
  dateRead?: Maybe<Scalars['String']>;
  isbn?: Maybe<Scalars['String']>;
  isbn13?: Maybe<Scalars['String']>;
  myRating?: Maybe<Scalars['Int']>;
  myReview?: Maybe<Scalars['String']>;
  numberOfPages?: Maybe<Scalars['Int']>;
  readingEventId: Scalars['String'];
  title: Scalars['String'];
};

export type ReadingEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type ReadingEventsQuery = { __typename?: 'Query', readingEvents: Array<{ __typename?: 'ReadingEvent', title: string }> };


export const ReadingEventsDocument = `
    query ReadingEvents {
  readingEvents {
    title
  }
}
    `;
export const useReadingEventsQuery = <
      TData = ReadingEventsQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: ReadingEventsQueryVariables,
      options?: UseQueryOptions<ReadingEventsQuery, TError, TData>
    ) =>
    useQuery<ReadingEventsQuery, TError, TData>(
      variables === undefined ? ['ReadingEvents'] : ['ReadingEvents', variables],
      fetcher<ReadingEventsQuery, ReadingEventsQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, ReadingEventsDocument, variables),
      options
    );