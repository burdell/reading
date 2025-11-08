import { existsSync } from "fs";

export function parseReadingLogData() {}

function parseReadingLog(collectionApi) {
  const { data } = collectionApi.getAll()[0];
  const allBooks = [];
  const bucketedByYear = {};

  data["reading-log"].forEach((book) => {
    if (!book.readings) {
      console.info("No read data for: ", book);
      return;
    }

    const { readings, ...bookInfo } = book;
    readings.forEach((reading) => {
      const shownIsbn = reading.isbn || bookInfo.isbn;
      const dateString = reading.date;
      const hasCover = existsSync(`.cache/covers/${shownIsbn}.jpg`);

      const bookWithDate = {
        ...bookInfo,
        dateRead: dateString,
        coverUrl: hasCover
          ? `/covers/${shownIsbn}.jpg`
          : "/assets/default_cover.png",
        ...reading,
      };
      allBooks.push(bookWithDate);

      const year = dateString.split("/")[0];
      if (!bucketedByYear[year]) {
        bucketedByYear[year] = [];
      }

      bucketedByYear[year].push(bookWithDate);
    });
  });

  // Sort each year bucket by dateRead
  Object.keys(bucketedByYear).forEach((year) => {
    bucketedByYear[year].sort(
      (a, b) => new Date(b.dateRead).getTime() - new Date(a.dateRead).getTime()
    );
  });

  const sortedYears = Object.keys(bucketedByYear).sort(
    (a, b) => Number(b) - Number(a)
  );

  return {
    allBooks,
    bucketedByYear,
    sortedYears,
    latestYear: sortedYears[0],
  };
}

export function getReadingData(collectionApi) {
  if (!collectionApi._readingLogCache) {
    collectionApi._readingLogCache = parseReadingLog(collectionApi);
  }

  return collectionApi._readingLogCache;
}
