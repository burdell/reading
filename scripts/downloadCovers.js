import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import yaml from "js-yaml";

const CACHE_DIR = ".cache/covers";

export async function downloadCovers() {
  await fs.mkdir(CACHE_DIR, { recursive: true });

  const readingLogPath = path.join(process.cwd(), "_data/reading-log.yaml");
  const content = await fs.readFile(readingLogPath, "utf8");
  const books = yaml.load(content);

  const isbns = books
    .flatMap((book) => {
      const parentIsbn = book.isbn;
      const readingIsbns = book.readings?.map((r) => r.isbn) || [];
      return [parentIsbn, ...readingIsbns];
    })
    .filter(Boolean);

  const uniqueIsbns = [...new Set(isbns)];

  console.log(`Fetching covers for ${uniqueIsbns.length} books...`);

  const results = await Promise.allSettled(
    uniqueIsbns.map((isbn) => downloadCover(isbn))
  );

  const successful = results.filter((r) => r.status === "fulfilled").length;
  console.log(`✓ Downloaded ${successful}/${uniqueIsbns.length} covers`);
}

async function downloadCover(isbn) {
  if (!isbn) {
    return null;
  }

  const coverPath = path.join(CACHE_DIR, `${isbn}.jpg`);

  // Check if already cached
  try {
    await fs.access(coverPath);
    return coverPath;
  } catch {
    // Download from Open Library
    const url = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;

    try {
      const response = await fetch(url);

      if (response.ok) {
        const buffer = await response.arrayBuffer();
        if (buffer.byteLength < 500) {
          console.log(`✗ Blank image detected for: ${isbn}`);
          return null;
        }
        
        await fs.writeFile(coverPath, Buffer.from(buffer));
        console.log(`✓ ${isbn}`);
        return coverPath;
      } else {
        console.log(`✗ No cover found for: ${isbn}`);
        return null;
      }
    } catch (error) {
      console.error(`✗ Error fetching ${isbn}:`, error.message);
      return null;
    }
  }
}
