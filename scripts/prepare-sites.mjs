import { mkdir, writeFile } from 'node:fs/promises';

const serverDir = new URL('../dist/server/', import.meta.url);
await mkdir(serverDir, { recursive: true });
await writeFile(
  new URL('index.js', serverDir),
  `export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};\n`,
);
