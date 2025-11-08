import pluginWebc from "@11ty/eleventy-plugin-webc";
import yaml from "js-yaml";
import { DateTime } from "luxon";
import inflection from "inflection";

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
      const dateString = reading.date;
      const bookWithDate = {
        ...bookInfo,
        dateRead: dateString,
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

  const sortedYears = Object.keys(bucketedByYear).sort((a, b) => Number(b) - Number(a));

  return {
    allBooks,
    bucketedByYear,
    sortedYears,
    latestYear: sortedYears[0],
  };
}

function getReadingData(collectionApi) { 
  if (!collectionApi._readingLogCache) {
    collectionApi._readingLogCache = parseReadingLog(collectionApi);
  }

  return collectionApi._readingLogCache;
}

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginWebc, {
    components: "_components/**/*.webc",
  });

  eleventyConfig.addDataExtension("yaml", (contents) => {
    return yaml.load(contents);
  });

  eleventyConfig.addCollection("sortedYears", (collectionApi) => {
    const { sortedYears } = getReadingData(collectionApi);

    return sortedYears;
  });

  eleventyConfig.addCollection("readingData", (collectionApi) => {
    const { allBooks, bucketedByYear, latestYear } =
      getReadingData(collectionApi);

    return { allBooks, bucketedByYear, latestYear };
  });

  eleventyConfig.addFilter("formatDate", (dateObj) => {
    return DateTime.fromJSDate(new Date(dateObj)).toLocaleString({
      month: "short",
      day: "numeric",
    });
  });

  eleventyConfig.addFilter("pluralize", (string, count) => {
    return inflection.inflect(string, count);
  });

  eleventyConfig.addPassthroughCopy({
    "./_assets/favicon.ico": "/favicon.ico",
  });

  eleventyConfig.addPassthroughCopy({ "./_assets": "/assets" });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
    },
  };
}
