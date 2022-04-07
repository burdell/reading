import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  author_id: Scalars['uuid'];
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
  count: Scalars['Int'];
  max?: Maybe<Author_Max_Fields>;
  min?: Maybe<Author_Min_Fields>;
};


/** aggregate fields of "author" */
export type Author_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Author_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "author". All fields are combined with a logical 'AND'. */
export type Author_Bool_Exp = {
  _and?: InputMaybe<Array<Author_Bool_Exp>>;
  _not?: InputMaybe<Author_Bool_Exp>;
  _or?: InputMaybe<Array<Author_Bool_Exp>>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "author" */
export enum Author_Constraint {
  /** unique or primary key constraint */
  AuthorPkey = 'author_pkey'
}

/** input type for inserting data into table "author" */
export type Author_Insert_Input = {
  author_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Author_Max_Fields = {
  __typename?: 'author_max_fields';
  author_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Author_Min_Fields = {
  __typename?: 'author_min_fields';
  author_id?: Maybe<Scalars['uuid']>;
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
  author_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: author */
export type Author_Pk_Columns_Input = {
  author_id: Scalars['uuid'];
};

/** select columns of table "author" */
export enum Author_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "author" */
export type Author_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "author" */
export enum Author_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Name = 'name'
}

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
  author_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Reading_EventArgs = {
  where: Reading_Event_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Reading_Event_By_PkArgs = {
  reading_event_id: Scalars['uuid'];
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
  _set?: InputMaybe<Author_Set_Input>;
  where: Author_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Author_By_PkArgs = {
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
  author_id: Scalars['uuid'];
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
  reading_event_id: Scalars['uuid'];
};

/** columns and relationships of "reading_event" */
export type Reading_Event = {
  __typename?: 'reading_event';
  author_id: Scalars['uuid'];
  book_id?: Maybe<Scalars['Int']>;
  date_read: Scalars['date'];
  isbn?: Maybe<Scalars['String']>;
  isbn_13: Scalars['String'];
  my_rating?: Maybe<Scalars['Int']>;
  my_review?: Maybe<Scalars['String']>;
  number_of_pages?: Maybe<Scalars['Int']>;
  reading_event_id: Scalars['uuid'];
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
  book_id?: Maybe<Scalars['Float']>;
  my_rating?: Maybe<Scalars['Float']>;
  number_of_pages?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "reading_event". All fields are combined with a logical 'AND'. */
export type Reading_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Reading_Event_Bool_Exp>>;
  _not?: InputMaybe<Reading_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Reading_Event_Bool_Exp>>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  book_id?: InputMaybe<Int_Comparison_Exp>;
  date_read?: InputMaybe<Date_Comparison_Exp>;
  isbn?: InputMaybe<String_Comparison_Exp>;
  isbn_13?: InputMaybe<String_Comparison_Exp>;
  my_rating?: InputMaybe<Int_Comparison_Exp>;
  my_review?: InputMaybe<String_Comparison_Exp>;
  number_of_pages?: InputMaybe<Int_Comparison_Exp>;
  reading_event_id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "reading_event" */
export enum Reading_Event_Constraint {
  /** unique or primary key constraint */
  ReadingEventPkey = 'reading_event_pkey'
}

/** input type for incrementing numeric columns in table "reading_event" */
export type Reading_Event_Inc_Input = {
  book_id?: InputMaybe<Scalars['Int']>;
  my_rating?: InputMaybe<Scalars['Int']>;
  number_of_pages?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "reading_event" */
export type Reading_Event_Insert_Input = {
  author_id?: InputMaybe<Scalars['uuid']>;
  book_id?: InputMaybe<Scalars['Int']>;
  date_read?: InputMaybe<Scalars['date']>;
  isbn?: InputMaybe<Scalars['String']>;
  isbn_13?: InputMaybe<Scalars['String']>;
  my_rating?: InputMaybe<Scalars['Int']>;
  my_review?: InputMaybe<Scalars['String']>;
  number_of_pages?: InputMaybe<Scalars['Int']>;
  reading_event_id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Reading_Event_Max_Fields = {
  __typename?: 'reading_event_max_fields';
  author_id?: Maybe<Scalars['uuid']>;
  book_id?: Maybe<Scalars['Int']>;
  date_read?: Maybe<Scalars['date']>;
  isbn?: Maybe<Scalars['String']>;
  isbn_13?: Maybe<Scalars['String']>;
  my_rating?: Maybe<Scalars['Int']>;
  my_review?: Maybe<Scalars['String']>;
  number_of_pages?: Maybe<Scalars['Int']>;
  reading_event_id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Reading_Event_Min_Fields = {
  __typename?: 'reading_event_min_fields';
  author_id?: Maybe<Scalars['uuid']>;
  book_id?: Maybe<Scalars['Int']>;
  date_read?: Maybe<Scalars['date']>;
  isbn?: Maybe<Scalars['String']>;
  isbn_13?: Maybe<Scalars['String']>;
  my_rating?: Maybe<Scalars['Int']>;
  my_review?: Maybe<Scalars['String']>;
  number_of_pages?: Maybe<Scalars['Int']>;
  reading_event_id?: Maybe<Scalars['uuid']>;
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
  isbn?: InputMaybe<Order_By>;
  isbn_13?: InputMaybe<Order_By>;
  my_rating?: InputMaybe<Order_By>;
  my_review?: InputMaybe<Order_By>;
  number_of_pages?: InputMaybe<Order_By>;
  reading_event_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: reading_event */
export type Reading_Event_Pk_Columns_Input = {
  reading_event_id: Scalars['uuid'];
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
  ReadingEventId = 'reading_event_id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "reading_event" */
export type Reading_Event_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']>;
  book_id?: InputMaybe<Scalars['Int']>;
  date_read?: InputMaybe<Scalars['date']>;
  isbn?: InputMaybe<Scalars['String']>;
  isbn_13?: InputMaybe<Scalars['String']>;
  my_rating?: InputMaybe<Scalars['Int']>;
  my_review?: InputMaybe<Scalars['String']>;
  number_of_pages?: InputMaybe<Scalars['Int']>;
  reading_event_id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Reading_Event_Stddev_Fields = {
  __typename?: 'reading_event_stddev_fields';
  book_id?: Maybe<Scalars['Float']>;
  my_rating?: Maybe<Scalars['Float']>;
  number_of_pages?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Reading_Event_Stddev_Pop_Fields = {
  __typename?: 'reading_event_stddev_pop_fields';
  book_id?: Maybe<Scalars['Float']>;
  my_rating?: Maybe<Scalars['Float']>;
  number_of_pages?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Reading_Event_Stddev_Samp_Fields = {
  __typename?: 'reading_event_stddev_samp_fields';
  book_id?: Maybe<Scalars['Float']>;
  my_rating?: Maybe<Scalars['Float']>;
  number_of_pages?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Reading_Event_Sum_Fields = {
  __typename?: 'reading_event_sum_fields';
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
  ReadingEventId = 'reading_event_id',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Reading_Event_Var_Pop_Fields = {
  __typename?: 'reading_event_var_pop_fields';
  book_id?: Maybe<Scalars['Float']>;
  my_rating?: Maybe<Scalars['Float']>;
  number_of_pages?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Reading_Event_Var_Samp_Fields = {
  __typename?: 'reading_event_var_samp_fields';
  book_id?: Maybe<Scalars['Float']>;
  my_rating?: Maybe<Scalars['Float']>;
  number_of_pages?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Reading_Event_Variance_Fields = {
  __typename?: 'reading_event_variance_fields';
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
  author_id: Scalars['uuid'];
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
  reading_event_id: Scalars['uuid'];
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int_comparison_exp: Int_Comparison_Exp;
  String: ResolverTypeWrapper<Scalars['String']>;
  String_comparison_exp: String_Comparison_Exp;
  author: ResolverTypeWrapper<Author>;
  author_aggregate: ResolverTypeWrapper<Author_Aggregate>;
  author_aggregate_fields: ResolverTypeWrapper<Author_Aggregate_Fields>;
  author_bool_exp: Author_Bool_Exp;
  author_constraint: Author_Constraint;
  author_insert_input: Author_Insert_Input;
  author_max_fields: ResolverTypeWrapper<Author_Max_Fields>;
  author_min_fields: ResolverTypeWrapper<Author_Min_Fields>;
  author_mutation_response: ResolverTypeWrapper<Author_Mutation_Response>;
  author_on_conflict: Author_On_Conflict;
  author_order_by: Author_Order_By;
  author_pk_columns_input: Author_Pk_Columns_Input;
  author_select_column: Author_Select_Column;
  author_set_input: Author_Set_Input;
  author_update_column: Author_Update_Column;
  date: ResolverTypeWrapper<Scalars['date']>;
  date_comparison_exp: Date_Comparison_Exp;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  reading_event: ResolverTypeWrapper<Reading_Event>;
  reading_event_aggregate: ResolverTypeWrapper<Reading_Event_Aggregate>;
  reading_event_aggregate_fields: ResolverTypeWrapper<Reading_Event_Aggregate_Fields>;
  reading_event_avg_fields: ResolverTypeWrapper<Reading_Event_Avg_Fields>;
  reading_event_bool_exp: Reading_Event_Bool_Exp;
  reading_event_constraint: Reading_Event_Constraint;
  reading_event_inc_input: Reading_Event_Inc_Input;
  reading_event_insert_input: Reading_Event_Insert_Input;
  reading_event_max_fields: ResolverTypeWrapper<Reading_Event_Max_Fields>;
  reading_event_min_fields: ResolverTypeWrapper<Reading_Event_Min_Fields>;
  reading_event_mutation_response: ResolverTypeWrapper<Reading_Event_Mutation_Response>;
  reading_event_on_conflict: Reading_Event_On_Conflict;
  reading_event_order_by: Reading_Event_Order_By;
  reading_event_pk_columns_input: Reading_Event_Pk_Columns_Input;
  reading_event_select_column: Reading_Event_Select_Column;
  reading_event_set_input: Reading_Event_Set_Input;
  reading_event_stddev_fields: ResolverTypeWrapper<Reading_Event_Stddev_Fields>;
  reading_event_stddev_pop_fields: ResolverTypeWrapper<Reading_Event_Stddev_Pop_Fields>;
  reading_event_stddev_samp_fields: ResolverTypeWrapper<Reading_Event_Stddev_Samp_Fields>;
  reading_event_sum_fields: ResolverTypeWrapper<Reading_Event_Sum_Fields>;
  reading_event_update_column: Reading_Event_Update_Column;
  reading_event_var_pop_fields: ResolverTypeWrapper<Reading_Event_Var_Pop_Fields>;
  reading_event_var_samp_fields: ResolverTypeWrapper<Reading_Event_Var_Samp_Fields>;
  reading_event_variance_fields: ResolverTypeWrapper<Reading_Event_Variance_Fields>;
  subscription_root: ResolverTypeWrapper<{}>;
  uuid: ResolverTypeWrapper<Scalars['uuid']>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Int_comparison_exp: Int_Comparison_Exp;
  String: Scalars['String'];
  String_comparison_exp: String_Comparison_Exp;
  author: Author;
  author_aggregate: Author_Aggregate;
  author_aggregate_fields: Author_Aggregate_Fields;
  author_bool_exp: Author_Bool_Exp;
  author_insert_input: Author_Insert_Input;
  author_max_fields: Author_Max_Fields;
  author_min_fields: Author_Min_Fields;
  author_mutation_response: Author_Mutation_Response;
  author_on_conflict: Author_On_Conflict;
  author_order_by: Author_Order_By;
  author_pk_columns_input: Author_Pk_Columns_Input;
  author_set_input: Author_Set_Input;
  date: Scalars['date'];
  date_comparison_exp: Date_Comparison_Exp;
  mutation_root: {};
  query_root: {};
  reading_event: Reading_Event;
  reading_event_aggregate: Reading_Event_Aggregate;
  reading_event_aggregate_fields: Reading_Event_Aggregate_Fields;
  reading_event_avg_fields: Reading_Event_Avg_Fields;
  reading_event_bool_exp: Reading_Event_Bool_Exp;
  reading_event_inc_input: Reading_Event_Inc_Input;
  reading_event_insert_input: Reading_Event_Insert_Input;
  reading_event_max_fields: Reading_Event_Max_Fields;
  reading_event_min_fields: Reading_Event_Min_Fields;
  reading_event_mutation_response: Reading_Event_Mutation_Response;
  reading_event_on_conflict: Reading_Event_On_Conflict;
  reading_event_order_by: Reading_Event_Order_By;
  reading_event_pk_columns_input: Reading_Event_Pk_Columns_Input;
  reading_event_set_input: Reading_Event_Set_Input;
  reading_event_stddev_fields: Reading_Event_Stddev_Fields;
  reading_event_stddev_pop_fields: Reading_Event_Stddev_Pop_Fields;
  reading_event_stddev_samp_fields: Reading_Event_Stddev_Samp_Fields;
  reading_event_sum_fields: Reading_Event_Sum_Fields;
  reading_event_var_pop_fields: Reading_Event_Var_Pop_Fields;
  reading_event_var_samp_fields: Reading_Event_Var_Samp_Fields;
  reading_event_variance_fields: Reading_Event_Variance_Fields;
  subscription_root: {};
  uuid: Scalars['uuid'];
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

export type CachedDirectiveArgs = {
  refresh?: Scalars['Boolean'];
  ttl?: Scalars['Int'];
};

export type CachedDirectiveResolver<Result, Parent, ContextType = any, Args = CachedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['author'] = ResolversParentTypes['author']> = {
  author_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Author_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['author_aggregate'] = ResolversParentTypes['author_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['author_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['author']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Author_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['author_aggregate_fields'] = ResolversParentTypes['author_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Author_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['author_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['author_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Author_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['author_max_fields'] = ResolversParentTypes['author_max_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Author_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['author_min_fields'] = ResolversParentTypes['author_min_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Author_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['author_mutation_response'] = ResolversParentTypes['author_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['author']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['date'], any> {
  name: 'date';
}

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  delete_author?: Resolver<Maybe<ResolversTypes['author_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_AuthorArgs, 'where'>>;
  delete_author_by_pk?: Resolver<Maybe<ResolversTypes['author']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Author_By_PkArgs, 'author_id'>>;
  delete_reading_event?: Resolver<Maybe<ResolversTypes['reading_event_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Reading_EventArgs, 'where'>>;
  delete_reading_event_by_pk?: Resolver<Maybe<ResolversTypes['reading_event']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Reading_Event_By_PkArgs, 'reading_event_id'>>;
  insert_author?: Resolver<Maybe<ResolversTypes['author_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_AuthorArgs, 'objects'>>;
  insert_author_one?: Resolver<Maybe<ResolversTypes['author']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Author_OneArgs, 'object'>>;
  insert_reading_event?: Resolver<Maybe<ResolversTypes['reading_event_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Reading_EventArgs, 'objects'>>;
  insert_reading_event_one?: Resolver<Maybe<ResolversTypes['reading_event']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Reading_Event_OneArgs, 'object'>>;
  update_author?: Resolver<Maybe<ResolversTypes['author_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_AuthorArgs, 'where'>>;
  update_author_by_pk?: Resolver<Maybe<ResolversTypes['author']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Author_By_PkArgs, 'pk_columns'>>;
  update_reading_event?: Resolver<Maybe<ResolversTypes['reading_event_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Reading_EventArgs, 'where'>>;
  update_reading_event_by_pk?: Resolver<Maybe<ResolversTypes['reading_event']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Reading_Event_By_PkArgs, 'pk_columns'>>;
};

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  author?: Resolver<Array<ResolversTypes['author']>, ParentType, ContextType, Partial<Query_RootAuthorArgs>>;
  author_aggregate?: Resolver<ResolversTypes['author_aggregate'], ParentType, ContextType, Partial<Query_RootAuthor_AggregateArgs>>;
  author_by_pk?: Resolver<Maybe<ResolversTypes['author']>, ParentType, ContextType, RequireFields<Query_RootAuthor_By_PkArgs, 'author_id'>>;
  reading_event?: Resolver<Array<ResolversTypes['reading_event']>, ParentType, ContextType, Partial<Query_RootReading_EventArgs>>;
  reading_event_aggregate?: Resolver<ResolversTypes['reading_event_aggregate'], ParentType, ContextType, Partial<Query_RootReading_Event_AggregateArgs>>;
  reading_event_by_pk?: Resolver<Maybe<ResolversTypes['reading_event']>, ParentType, ContextType, RequireFields<Query_RootReading_Event_By_PkArgs, 'reading_event_id'>>;
};

export type Reading_EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['reading_event'] = ResolversParentTypes['reading_event']> = {
  author_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  book_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  date_read?: Resolver<ResolversTypes['date'], ParentType, ContextType>;
  isbn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isbn_13?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  my_rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  my_review?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number_of_pages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reading_event_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Reading_Event_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['reading_event_aggregate'] = ResolversParentTypes['reading_event_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['reading_event_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['reading_event']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Reading_Event_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['reading_event_aggregate_fields'] = ResolversParentTypes['reading_event_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['reading_event_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Reading_Event_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['reading_event_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['reading_event_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['reading_event_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['reading_event_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['reading_event_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['reading_event_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['reading_event_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['reading_event_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['reading_event_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Reading_Event_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['reading_event_avg_fields'] = ResolversParentTypes['reading_event_avg_fields']> = {
  book_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  my_rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  number_of_pages?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Reading_Event_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['reading_event_max_fields'] = ResolversParentTypes['reading_event_max_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  book_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  date_read?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  isbn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isbn_13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  my_rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  my_review?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number_of_pages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reading_event_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Reading_Event_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['reading_event_min_fields'] = ResolversParentTypes['reading_event_min_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  book_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  date_read?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  isbn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isbn_13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  my_rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  my_review?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number_of_pages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reading_event_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Reading_Event_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['reading_event_mutation_response'] = ResolversParentTypes['reading_event_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['reading_event']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Reading_Event_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['reading_event_stddev_fields'] = ResolversParentTypes['reading_event_stddev_fields']> = {
  book_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  my_rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  number_of_pages?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Reading_Event_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['reading_event_stddev_pop_fields'] = ResolversParentTypes['reading_event_stddev_pop_fields']> = {
  book_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  my_rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  number_of_pages?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Reading_Event_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['reading_event_stddev_samp_fields'] = ResolversParentTypes['reading_event_stddev_samp_fields']> = {
  book_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  my_rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  number_of_pages?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Reading_Event_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['reading_event_sum_fields'] = ResolversParentTypes['reading_event_sum_fields']> = {
  book_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  my_rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  number_of_pages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Reading_Event_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['reading_event_var_pop_fields'] = ResolversParentTypes['reading_event_var_pop_fields']> = {
  book_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  my_rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  number_of_pages?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Reading_Event_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['reading_event_var_samp_fields'] = ResolversParentTypes['reading_event_var_samp_fields']> = {
  book_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  my_rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  number_of_pages?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Reading_Event_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['reading_event_variance_fields'] = ResolversParentTypes['reading_event_variance_fields']> = {
  book_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  my_rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  number_of_pages?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  author?: SubscriptionResolver<Array<ResolversTypes['author']>, "author", ParentType, ContextType, Partial<Subscription_RootAuthorArgs>>;
  author_aggregate?: SubscriptionResolver<ResolversTypes['author_aggregate'], "author_aggregate", ParentType, ContextType, Partial<Subscription_RootAuthor_AggregateArgs>>;
  author_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['author']>, "author_by_pk", ParentType, ContextType, RequireFields<Subscription_RootAuthor_By_PkArgs, 'author_id'>>;
  reading_event?: SubscriptionResolver<Array<ResolversTypes['reading_event']>, "reading_event", ParentType, ContextType, Partial<Subscription_RootReading_EventArgs>>;
  reading_event_aggregate?: SubscriptionResolver<ResolversTypes['reading_event_aggregate'], "reading_event_aggregate", ParentType, ContextType, Partial<Subscription_RootReading_Event_AggregateArgs>>;
  reading_event_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['reading_event']>, "reading_event_by_pk", ParentType, ContextType, RequireFields<Subscription_RootReading_Event_By_PkArgs, 'reading_event_id'>>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid';
}

export type Resolvers<ContextType = any> = {
  author?: AuthorResolvers<ContextType>;
  author_aggregate?: Author_AggregateResolvers<ContextType>;
  author_aggregate_fields?: Author_Aggregate_FieldsResolvers<ContextType>;
  author_max_fields?: Author_Max_FieldsResolvers<ContextType>;
  author_min_fields?: Author_Min_FieldsResolvers<ContextType>;
  author_mutation_response?: Author_Mutation_ResponseResolvers<ContextType>;
  date?: GraphQLScalarType;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  reading_event?: Reading_EventResolvers<ContextType>;
  reading_event_aggregate?: Reading_Event_AggregateResolvers<ContextType>;
  reading_event_aggregate_fields?: Reading_Event_Aggregate_FieldsResolvers<ContextType>;
  reading_event_avg_fields?: Reading_Event_Avg_FieldsResolvers<ContextType>;
  reading_event_max_fields?: Reading_Event_Max_FieldsResolvers<ContextType>;
  reading_event_min_fields?: Reading_Event_Min_FieldsResolvers<ContextType>;
  reading_event_mutation_response?: Reading_Event_Mutation_ResponseResolvers<ContextType>;
  reading_event_stddev_fields?: Reading_Event_Stddev_FieldsResolvers<ContextType>;
  reading_event_stddev_pop_fields?: Reading_Event_Stddev_Pop_FieldsResolvers<ContextType>;
  reading_event_stddev_samp_fields?: Reading_Event_Stddev_Samp_FieldsResolvers<ContextType>;
  reading_event_sum_fields?: Reading_Event_Sum_FieldsResolvers<ContextType>;
  reading_event_var_pop_fields?: Reading_Event_Var_Pop_FieldsResolvers<ContextType>;
  reading_event_var_samp_fields?: Reading_Event_Var_Samp_FieldsResolvers<ContextType>;
  reading_event_variance_fields?: Reading_Event_Variance_FieldsResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  uuid?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  cached?: CachedDirectiveResolver<any, any, ContextType>;
};
