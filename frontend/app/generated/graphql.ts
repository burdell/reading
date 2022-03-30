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
  date: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "author" */
export type Author = {
  __typename?: 'author';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "author" */
export type Author_Aggregate = {
  __typename?: 'author_aggregate';
  aggregate?: Maybe<Author_Aggregate_Fields>;
  nodes: Array<Author>;
};

/** aggregate fields of "author" */
export type Author_Aggregate_Fields = {
  __typename?: 'author_aggregate_fields';
  avg?: Maybe<Author_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Author_Max_Fields>;
  min?: Maybe<Author_Min_Fields>;
  stddev?: Maybe<Author_Stddev_Fields>;
  stddev_pop?: Maybe<Author_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Author_Stddev_Samp_Fields>;
  sum?: Maybe<Author_Sum_Fields>;
  var_pop?: Maybe<Author_Var_Pop_Fields>;
  var_samp?: Maybe<Author_Var_Samp_Fields>;
  variance?: Maybe<Author_Variance_Fields>;
};


/** aggregate fields of "author" */
export type Author_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Author_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Author_Avg_Fields = {
  __typename?: 'author_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "author". All fields are combined with a logical 'AND'. */
export type Author_Bool_Exp = {
  _and?: InputMaybe<Array<Author_Bool_Exp>>;
  _not?: InputMaybe<Author_Bool_Exp>;
  _or?: InputMaybe<Array<Author_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "author" */
export enum Author_Constraint {
  /** unique or primary key constraint */
  AuthorPkey = 'author_pkey'
}

/** input type for incrementing numeric columns in table "author" */
export type Author_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "author" */
export type Author_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Author_Max_Fields = {
  __typename?: 'author_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Author_Min_Fields = {
  __typename?: 'author_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "author" */
export type Author_Mutation_Response = {
  __typename?: 'author_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Author>;
};

/** on_conflict condition type for table "author" */
export type Author_On_Conflict = {
  constraint: Author_Constraint;
  update_columns?: Array<Author_Update_Column>;
  where?: InputMaybe<Author_Bool_Exp>;
};

/** Ordering options when selecting data from "author". */
export type Author_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: author */
export type Author_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "author" */
export enum Author_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "author" */
export type Author_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Author_Stddev_Fields = {
  __typename?: 'author_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Author_Stddev_Pop_Fields = {
  __typename?: 'author_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Author_Stddev_Samp_Fields = {
  __typename?: 'author_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Author_Sum_Fields = {
  __typename?: 'author_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "author" */
export enum Author_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Author_Var_Pop_Fields = {
  __typename?: 'author_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Author_Var_Samp_Fields = {
  __typename?: 'author_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Author_Variance_Fields = {
  __typename?: 'author_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "author" */
  delete_author?: Maybe<Author_Mutation_Response>;
  /** delete single row from the table: "author" */
  delete_author_by_pk?: Maybe<Author>;
  /** delete data from the table: "reading_event" */
  delete_reading_event?: Maybe<Reading_Event_Mutation_Response>;
  /** delete single row from the table: "reading_event" */
  delete_reading_event_by_pk?: Maybe<Reading_Event>;
  /** insert data into the table: "author" */
  insert_author?: Maybe<Author_Mutation_Response>;
  /** insert a single row into the table: "author" */
  insert_author_one?: Maybe<Author>;
  /** insert data into the table: "reading_event" */
  insert_reading_event?: Maybe<Reading_Event_Mutation_Response>;
  /** insert a single row into the table: "reading_event" */
  insert_reading_event_one?: Maybe<Reading_Event>;
  /** update data of the table: "author" */
  update_author?: Maybe<Author_Mutation_Response>;
  /** update single row of the table: "author" */
  update_author_by_pk?: Maybe<Author>;
  /** update data of the table: "reading_event" */
  update_reading_event?: Maybe<Reading_Event_Mutation_Response>;
  /** update single row of the table: "reading_event" */
  update_reading_event_by_pk?: Maybe<Reading_Event>;
};


/** mutation root */
export type Mutation_RootDelete_AuthorArgs = {
  where: Author_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Author_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Reading_EventArgs = {
  where: Reading_Event_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Reading_Event_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AuthorArgs = {
  objects: Array<Author_Insert_Input>;
  on_conflict?: InputMaybe<Author_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Author_OneArgs = {
  object: Author_Insert_Input;
  on_conflict?: InputMaybe<Author_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Reading_EventArgs = {
  objects: Array<Reading_Event_Insert_Input>;
  on_conflict?: InputMaybe<Reading_Event_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Reading_Event_OneArgs = {
  object: Reading_Event_Insert_Input;
  on_conflict?: InputMaybe<Reading_Event_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthorArgs = {
  _inc?: InputMaybe<Author_Inc_Input>;
  _set?: InputMaybe<Author_Set_Input>;
  where: Author_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Author_By_PkArgs = {
  _inc?: InputMaybe<Author_Inc_Input>;
  _set?: InputMaybe<Author_Set_Input>;
  pk_columns: Author_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Reading_EventArgs = {
  _inc?: InputMaybe<Reading_Event_Inc_Input>;
  _set?: InputMaybe<Reading_Event_Set_Input>;
  where: Reading_Event_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Reading_Event_By_PkArgs = {
  _inc?: InputMaybe<Reading_Event_Inc_Input>;
  _set?: InputMaybe<Reading_Event_Set_Input>;
  pk_columns: Reading_Event_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "author" */
  author: Array<Author>;
  /** fetch aggregated fields from the table: "author" */
  author_aggregate: Author_Aggregate;
  /** fetch data from the table: "author" using primary key columns */
  author_by_pk?: Maybe<Author>;
  /** fetch data from the table: "reading_event" */
  reading_event: Array<Reading_Event>;
  /** fetch aggregated fields from the table: "reading_event" */
  reading_event_aggregate: Reading_Event_Aggregate;
  /** fetch data from the table: "reading_event" using primary key columns */
  reading_event_by_pk?: Maybe<Reading_Event>;
};


export type Query_RootAuthorArgs = {
  distinct_on?: InputMaybe<Array<Author_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Author_Order_By>>;
  where?: InputMaybe<Author_Bool_Exp>;
};


export type Query_RootAuthor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Author_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Author_Order_By>>;
  where?: InputMaybe<Author_Bool_Exp>;
};


export type Query_RootAuthor_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootReading_EventArgs = {
  distinct_on?: InputMaybe<Array<Reading_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reading_Event_Order_By>>;
  where?: InputMaybe<Reading_Event_Bool_Exp>;
};


export type Query_RootReading_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reading_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reading_Event_Order_By>>;
  where?: InputMaybe<Reading_Event_Bool_Exp>;
};


export type Query_RootReading_Event_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "reading_event" */
export type Reading_Event = {
  __typename?: 'reading_event';
  author_id: Scalars['Int'];
  book_id?: Maybe<Scalars['Int']>;
  date_read: Scalars['date'];
  id: Scalars['uuid'];
  isbn?: Maybe<Scalars['String']>;
  isbn_13?: Maybe<Scalars['String']>;
  my_rating: Scalars['Int'];
  my_review?: Maybe<Scalars['String']>;
  number_of_pages: Scalars['Int'];
  title: Scalars['String'];
};

/** aggregated selection of "reading_event" */
export type Reading_Event_Aggregate = {
  __typename?: 'reading_event_aggregate';
  aggregate?: Maybe<Reading_Event_Aggregate_Fields>;
  nodes: Array<Reading_Event>;
};

/** aggregate fields of "reading_event" */
export type Reading_Event_Aggregate_Fields = {
  __typename?: 'reading_event_aggregate_fields';
  avg?: Maybe<Reading_Event_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Reading_Event_Max_Fields>;
  min?: Maybe<Reading_Event_Min_Fields>;
  stddev?: Maybe<Reading_Event_Stddev_Fields>;
  stddev_pop?: Maybe<Reading_Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Reading_Event_Stddev_Samp_Fields>;
  sum?: Maybe<Reading_Event_Sum_Fields>;
  var_pop?: Maybe<Reading_Event_Var_Pop_Fields>;
  var_samp?: Maybe<Reading_Event_Var_Samp_Fields>;
  variance?: Maybe<Reading_Event_Variance_Fields>;
};


/** aggregate fields of "reading_event" */
export type Reading_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Reading_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Reading_Event_Avg_Fields = {
  __typename?: 'reading_event_avg_fields';
  author_id?: Maybe<Scalars['Float']>;
  book_id?: Maybe<Scalars['Float']>;
  my_rating?: Maybe<Scalars['Float']>;
  number_of_pages?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "reading_event". All fields are combined with a logical 'AND'. */
export type Reading_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Reading_Event_Bool_Exp>>;
  _not?: InputMaybe<Reading_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Reading_Event_Bool_Exp>>;
  author_id?: InputMaybe<Int_Comparison_Exp>;
  book_id?: InputMaybe<Int_Comparison_Exp>;
  date_read?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isbn?: InputMaybe<String_Comparison_Exp>;
  isbn_13?: InputMaybe<String_Comparison_Exp>;
  my_rating?: InputMaybe<Int_Comparison_Exp>;
  my_review?: InputMaybe<String_Comparison_Exp>;
  number_of_pages?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "reading_event" */
export enum Reading_Event_Constraint {
  /** unique or primary key constraint */
  ReadingEventPkey = 'reading_event_pkey'
}

/** input type for incrementing numeric columns in table "reading_event" */
export type Reading_Event_Inc_Input = {
  author_id?: InputMaybe<Scalars['Int']>;
  book_id?: InputMaybe<Scalars['Int']>;
  my_rating?: InputMaybe<Scalars['Int']>;
  number_of_pages?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "reading_event" */
export type Reading_Event_Insert_Input = {
  author_id?: InputMaybe<Scalars['Int']>;
  book_id?: InputMaybe<Scalars['Int']>;
  date_read?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  isbn?: InputMaybe<Scalars['String']>;
  isbn_13?: InputMaybe<Scalars['String']>;
  my_rating?: InputMaybe<Scalars['Int']>;
  my_review?: InputMaybe<Scalars['String']>;
  number_of_pages?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Reading_Event_Max_Fields = {
  __typename?: 'reading_event_max_fields';
  author_id?: Maybe<Scalars['Int']>;
  book_id?: Maybe<Scalars['Int']>;
  date_read?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  isbn?: Maybe<Scalars['String']>;
  isbn_13?: Maybe<Scalars['String']>;
  my_rating?: Maybe<Scalars['Int']>;
  my_review?: Maybe<Scalars['String']>;
  number_of_pages?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Reading_Event_Min_Fields = {
  __typename?: 'reading_event_min_fields';
  author_id?: Maybe<Scalars['Int']>;
  book_id?: Maybe<Scalars['Int']>;
  date_read?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  isbn?: Maybe<Scalars['String']>;
  isbn_13?: Maybe<Scalars['String']>;
  my_rating?: Maybe<Scalars['Int']>;
  my_review?: Maybe<Scalars['String']>;
  number_of_pages?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "reading_event" */
export type Reading_Event_Mutation_Response = {
  __typename?: 'reading_event_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Reading_Event>;
};

/** on_conflict condition type for table "reading_event" */
export type Reading_Event_On_Conflict = {
  constraint: Reading_Event_Constraint;
  update_columns?: Array<Reading_Event_Update_Column>;
  where?: InputMaybe<Reading_Event_Bool_Exp>;
};

/** Ordering options when selecting data from "reading_event". */
export type Reading_Event_Order_By = {
  author_id?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  date_read?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isbn?: InputMaybe<Order_By>;
  isbn_13?: InputMaybe<Order_By>;
  my_rating?: InputMaybe<Order_By>;
  my_review?: InputMaybe<Order_By>;
  number_of_pages?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: reading_event */
export type Reading_Event_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "reading_event" */
export enum Reading_Event_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  BookId = 'book_id',
  /** column name */
  DateRead = 'date_read',
  /** column name */
  Id = 'id',
  /** column name */
  Isbn = 'isbn',
  /** column name */
  Isbn_13 = 'isbn_13',
  /** column name */
  MyRating = 'my_rating',
  /** column name */
  MyReview = 'my_review',
  /** column name */
  NumberOfPages = 'number_of_pages',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "reading_event" */
export type Reading_Event_Set_Input = {
  author_id?: InputMaybe<Scalars['Int']>;
  book_id?: InputMaybe<Scalars['Int']>;
  date_read?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  isbn?: InputMaybe<Scalars['String']>;
  isbn_13?: InputMaybe<Scalars['String']>;
  my_rating?: InputMaybe<Scalars['Int']>;
  my_review?: InputMaybe<Scalars['String']>;
  number_of_pages?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Reading_Event_Stddev_Fields = {
  __typename?: 'reading_event_stddev_fields';
  author_id?: Maybe<Scalars['Float']>;
  book_id?: Maybe<Scalars['Float']>;
  my_rating?: Maybe<Scalars['Float']>;
  number_of_pages?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Reading_Event_Stddev_Pop_Fields = {
  __typename?: 'reading_event_stddev_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  book_id?: Maybe<Scalars['Float']>;
  my_rating?: Maybe<Scalars['Float']>;
  number_of_pages?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Reading_Event_Stddev_Samp_Fields = {
  __typename?: 'reading_event_stddev_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  book_id?: Maybe<Scalars['Float']>;
  my_rating?: Maybe<Scalars['Float']>;
  number_of_pages?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Reading_Event_Sum_Fields = {
  __typename?: 'reading_event_sum_fields';
  author_id?: Maybe<Scalars['Int']>;
  book_id?: Maybe<Scalars['Int']>;
  my_rating?: Maybe<Scalars['Int']>;
  number_of_pages?: Maybe<Scalars['Int']>;
};

/** update columns of table "reading_event" */
export enum Reading_Event_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  BookId = 'book_id',
  /** column name */
  DateRead = 'date_read',
  /** column name */
  Id = 'id',
  /** column name */
  Isbn = 'isbn',
  /** column name */
  Isbn_13 = 'isbn_13',
  /** column name */
  MyRating = 'my_rating',
  /** column name */
  MyReview = 'my_review',
  /** column name */
  NumberOfPages = 'number_of_pages',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Reading_Event_Var_Pop_Fields = {
  __typename?: 'reading_event_var_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  book_id?: Maybe<Scalars['Float']>;
  my_rating?: Maybe<Scalars['Float']>;
  number_of_pages?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Reading_Event_Var_Samp_Fields = {
  __typename?: 'reading_event_var_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  book_id?: Maybe<Scalars['Float']>;
  my_rating?: Maybe<Scalars['Float']>;
  number_of_pages?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Reading_Event_Variance_Fields = {
  __typename?: 'reading_event_variance_fields';
  author_id?: Maybe<Scalars['Float']>;
  book_id?: Maybe<Scalars['Float']>;
  my_rating?: Maybe<Scalars['Float']>;
  number_of_pages?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "author" */
  author: Array<Author>;
  /** fetch aggregated fields from the table: "author" */
  author_aggregate: Author_Aggregate;
  /** fetch data from the table: "author" using primary key columns */
  author_by_pk?: Maybe<Author>;
  /** fetch data from the table: "reading_event" */
  reading_event: Array<Reading_Event>;
  /** fetch aggregated fields from the table: "reading_event" */
  reading_event_aggregate: Reading_Event_Aggregate;
  /** fetch data from the table: "reading_event" using primary key columns */
  reading_event_by_pk?: Maybe<Reading_Event>;
};


export type Subscription_RootAuthorArgs = {
  distinct_on?: InputMaybe<Array<Author_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Author_Order_By>>;
  where?: InputMaybe<Author_Bool_Exp>;
};


export type Subscription_RootAuthor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Author_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Author_Order_By>>;
  where?: InputMaybe<Author_Bool_Exp>;
};


export type Subscription_RootAuthor_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootReading_EventArgs = {
  distinct_on?: InputMaybe<Array<Reading_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reading_Event_Order_By>>;
  where?: InputMaybe<Reading_Event_Bool_Exp>;
};


export type Subscription_RootReading_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reading_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reading_Event_Order_By>>;
  where?: InputMaybe<Reading_Event_Bool_Exp>;
};


export type Subscription_RootReading_Event_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = { __typename?: 'query_root', author: Array<{ __typename?: 'author', id: number }> };


export const MyQueryDocument = `
    query MyQuery {
  author {
    id
  }
}
    `;
export const useMyQueryQuery = <
      TData = MyQueryQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: MyQueryQueryVariables,
      options?: UseQueryOptions<MyQueryQuery, TError, TData>
    ) =>
    useQuery<MyQueryQuery, TError, TData>(
      variables === undefined ? ['MyQuery'] : ['MyQuery', variables],
      fetcher<MyQueryQuery, MyQueryQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, MyQueryDocument, variables),
      options
    );