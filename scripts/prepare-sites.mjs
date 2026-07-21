import { mkdir, readdir, rename, writeFile } from 'node:fs/promises';

const distDir = new URL('../dist/', import.meta.url);
const clientDir = new URL('../dist/client/', import.meta.url);
const serverDir = new URL('../dist/server/', import.meta.url);

await mkdir(clientDir, { recursive: true });

// Sites exposes static files through an ASSETS binding backed by dist/client.
// Astro emits static files at the dist root, so place that output where the
// hosting runtime expects it while keeping the site itself fully static.
for (const entry of await readdir(distDir, { withFileTypes: true })) {
  if (entry.name === 'client' || entry.name === 'server') continue;
  await rename(new URL(entry.name, distDir), new URL(entry.name, clientDir));
}

await mkdir(serverDir, { recursive: true });
await writeFile(
  new URL('index.js', serverDir),
  `export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};\n`,
);

await writeFile(
  new URL('wrangler.json', serverDir),
  `${JSON.stringify({
    name: 'jingyuan-ren-portfolio',
    compatibility_date: '2026-05-15',
    compatibility_flags: ['nodejs_compat'],
    main: 'index.js',
    no_bundle: true,
    assets: { directory: '../client' },
  })}\n`,
);
