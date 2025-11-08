import pluginWebc from "@11ty/eleventy-plugin-webc";
import yaml from "js-yaml";
import { DateTime } from "luxon";
import inflection from "inflection";

import { getReadingData } from "./scripts/getReadingData.js";
import { downloadCovers } from "./scripts/downloadCovers.js";

export default function (eleventyConfig) {
  eleventyConfig.on("eleventy.before", async () => {
    if (process.env.ELEVENTY_RUN_MODE === "build") {
      await downloadCovers();
    }
  });

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

  eleventyConfig.addPassthroughCopy({ ".cache/covers": "/covers" });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
    },
  };
}
