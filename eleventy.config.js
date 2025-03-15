import pluginWebc from "@11ty/eleventy-plugin-webc";
import yaml from "js-yaml";
import { DateTime } from "luxon";
import inflection from "inflection";

function parseReadingLog(collectionApi) {
  const { data } = collectionApi.getAll()[0];
  const allBooks = [];
  const bucketedByYear = {};

  data["reading-log"].forEach(({ datesRead, ...book }) => {
    if (!datesRead) {
      console.info("No read data for: ", book);
      return;
    }

    datesRead.forEach((dateString) => {
      const bookWithDate = { dateRead: dateString, ...book };
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
      (a, b) => new Date(b.dateRead) - new Date(a.dateRead)
    );
  });

  const sortedYears = Object.keys(bucketedByYear).sort((a, b) => b - a);

  return {
    allBooks,
    bucketedByYear,
    sortedYears,
    latestYear: sortedYears[0],
  };
}

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginWebc, {
    components: "_components/**/*.webc",
  });

  eleventyConfig.addDataExtension("yaml", (contents) => {
    return yaml.load(contents);
  });

  eleventyConfig.addCollection("sortedYears", (collectionApi) => {
    const { sortedYears } = parseReadingLog(collectionApi);

    return sortedYears;
  });

  eleventyConfig.addCollection("readingData", (collectionApi) => {
    const { allBooks, bucketedByYear, latestYear } =
      parseReadingLog(collectionApi);

    return { allBooks, bucketedByYear, latestYear };
  });

  eleventyConfig.addFilter("formatDate", (dateObj) => {
    return DateTime.fromJSDate(new Date(dateObj)).toLocaleString({
      // year: "numeric",
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
      layouts: "_layouts",
    },
  };
}
