import * as fs from "node:fs";
import * as path from "node:path";
import csv from "csv-parser";
import yaml from "yaml";

interface GoodreadsBook {
  "Book Id": string;
  Title: string;
  Author: string;
  "Author l-f": string;
  "Additional Authors": string;
  ISBN: string;
  ISBN13: string;
  "My Rating": number;
  "Average Rating": number;
  Publisher: string;
  Binding: string;
  "Number of Pages": number;
  "Year Published": number;
  "Original Publication Year": number;
  "Date Read": string;
  "Date Added": string;
  Bookshelves: string;
  "Bookshelves with positions": string;
  "Exclusive Shelf": string;
  "My Review": string;
  Spoiler: string;
  "Private Notes": string;
  "Read Count": number;
  "Owned Copies": number;
}

interface ReadingLogBook {
  title: string;
  author: string;
  isbn: string;
  isbn13: string;
  rating: number | null;
  datesRead: string[];
}

async function getReadingData(): Promise<GoodreadsBook[]> {
  const results: GoodreadsBook[] = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, "goodreads_library_export.csv"))
      .pipe(csv())
      .on("data", (data: GoodreadsBook) => {
        results.push(data);
      })
      .on("end", () => {
        console.log(
          `Reading data successfully processed with ${results.length} books`
        );
        resolve(results);
      })
      .on("error", (err) => {
        reject(new Error(`Error reading the CSV file:, ${err.message}`));
      });
  });
}

function getReadingLogBooks(readingData: GoodreadsBook[]): ReadingLogBook[] {
  return readingData
    .filter((goodreadsBook) => Boolean(goodreadsBook["Date Read"]))
    .map((goodreadsBook) => ({
      title: goodreadsBook.Title,
      author: goodreadsBook.Author,
      datesRead: [goodreadsBook["Date Read"]],
      isbn: goodreadsBook.ISBN,
      isbn13: goodreadsBook.ISBN13,
      rating: Number(goodreadsBook["My Rating"]) || null,
    }));
}

async function writeFile({
  data,
  filename,
}: {
  data: string;
  filename: string;
}) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path.join(__dirname, `./${filename}`), data, (err) => {
      if (err) {
        reject(err);
      } else {
        console.log(`File has been saved as ${filename}`);
        resolve(data);
      }
    });
  });
}

async function writeReadingLogFile(readingData: ReadingLogBook[]) {
  let yamlString = yaml.stringify(readingData, {});
  yamlString = yamlString.replace(/(\n(?=-\s+title:.*$))/gm, "\n\n");

  return writeFile({
    data: yamlString,
    filename: "generated-reading-log.yaml",
  });
}

async function generateGoodreadsReadingLog() {
  const allReadingData = await getReadingData();
  const readingLogBooks = getReadingLogBooks(allReadingData);
  console.log(`Found ${readingLogBooks.length} books to write to file.`);
  await writeReadingLogFile(readingLogBooks);
}
void generateGoodreadsReadingLog();

// async function generateRereadBookList() {
//   const allReadingData = await getReadingData();
//   const rereadBooks = allReadingData.filter(
//     (book) => book["Date Read"] && Number(book["Read Count"]) > 1
//   );

//   const books = getReadingLogBooks(rereadBooks).map((book) => book.title);

//   await writeFile({ data: books.join("\n"), filename: "rereads.txt" });
// }
// void generateRereadBookList();
