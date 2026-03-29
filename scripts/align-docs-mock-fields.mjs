import fs from 'fs'

const filePath = new URL('../src/features/doc-page/Data/docs-data.js', import.meta.url)
let s = fs.readFileSync(filePath, 'utf8')
s = s.replace(/\r\n/g, '\n')

const header = `// Mock documentation: top-level field names align with GraphQL Documentation (businesswith APP_DOCUMENTATION).
// API uses content as HTML only; this prototype adds structuredContent for the guide-style DocDetails UI.
// Plain JavaScript (no TypeScript).

`

// Header comment mentions "structuredContent" — do not use that string for the guard.
if (!s.includes('pageRoute:')) {
  s = s.replace(
    /^\/\/ Mock data for documentation prototype\n\/\/ Note: This file is intentionally plain JavaScript \(no TypeScript types\)\.\n\n/,
    header
  )
  s = s.replace(
    /^\/\/ Mock documentation: top-level field names align with GraphQL Documentation \(businesswith APP_DOCUMENTATION\)\.\n\/\/ API uses content as HTML only; this prototype adds structuredContent for the guide-style DocDetails UI\.\n\/\/ Plain JavaScript \(no TypeScript\)\.\n\n/m,
    header
  )

  const inserts = [
    ['2026-03-20T12:00:00.000Z', '/'],
    ['2026-03-22T12:00:00.000Z', '/integration-settings'],
    ['2026-03-24T12:00:00.000Z', '/integration-settings'],
    ['2026-03-18T12:00:00.000Z', '/leads-guide'],
    ['2026-03-15T12:00:00.000Z', '/settings'],
    ['2026-03-10T12:00:00.000Z', '/settings'],
    ['2026-03-12T12:00:00.000Z', '/integration-settings'],
    ['2026-03-14T12:00:00.000Z', '/buying-intent-v2/:systemId'],
  ]

  for (const [iso, route] of inserts) {
    const from = `    updatedAt: '${iso}',\n    content: {`
    const to = `    updatedAt: '${iso}',\n    pageRoute: '${route}',\n    updatedByUser: { id: 'mock-user-1', name: 'Documentation Team' },\n    mediaAssets: [],\n    content: '',\n    structuredContent: {`
    if (!s.includes(from)) {
      console.warn('Pattern not found for', iso)
    }
    s = s.split(from).join(to)
  }
}

// Helpers at bottom
s = s.replace(
  /export const getFeaturedDocs = \(\) => {\n  return docsData\.filter\(doc => doc\.featured\);\n};/,
  `export const getFeaturedDocs = () => {
  return docsData.filter((doc) => doc.published).slice(0, 3);
};`
)

s = s.replace(
  /\.sort\(\(a, b\) => new Date\(b\.lastUpdated\)\.getTime\(\) - new Date\(a\.lastUpdated\)\.getTime\(\)\)/,
  '.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())'
)

fs.writeFileSync(filePath, s)
console.log('OK', filePath.pathname)
