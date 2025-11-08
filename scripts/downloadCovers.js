import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import yaml from "js-yaml";

const CACHE_DIR = ".cache/covers";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function downloadCovers() {
  await fs.mkdir(CACHE_DIR, { recursive: true });

  const readingLogPath = path.join(process.cwd(), "_data/reading-log.yaml");
  const content = await fs.readFile(readingLogPath, "utf8");
  const books = yaml.load(content);

  console.log(`Fetching covers for ${books.length} books...`);

  const results = await Promise.allSettled(
    books.map((book) => downloadCover(book.isbn, book.title))
  );

  const successful = results.filter((r) => r.status === "fulfilled").length;
  console.log(`✓ Downloaded ${successful}/${books.length} covers`);
}

async function downloadCover(isbn, title) {
  if (!isbn) {
    console.log(`⊘ No ISBN for: ${title}`);
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
        await fs.writeFile(coverPath, Buffer.from(buffer));
        console.log(`✓ ${title}`);
        return coverPath;
      } else {
        console.log(`✗ No cover found for: ${title} (${isbn})`);
        return null;
      }
    } catch (error) {
      console.error(`✗ Error fetching ${title}:`, error.message);
      return null;
    }
  }
}
