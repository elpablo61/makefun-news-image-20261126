import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = new URL("./entry.png", import.meta.url);
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);
const size = statSync(dest).size;
if (size === 0) {
  throw new Error("entry.png was copied as an empty file");
}
if (size > 1048576) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB limit`);
}
console.log(`wrote ${dest} (${size} bytes)`);
