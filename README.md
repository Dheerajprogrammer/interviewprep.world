# InterviewPrep.World

Modern, SEO-focused interview preparation site built with [VitePress](https://vitepress.dev/).

<iframe src="https://github.com/sponsors/Dheerajprogrammer/button" title="Sponsor Dheerajprogrammer" height="32" width="114" style="border: 0; border-radius: 6px;"></iframe>

Support the project through [GitHub Sponsors](https://github.com/sponsors/Dheerajprogrammer).

## Commands

```bash
npm install
npm run docs:dev
npm run docs:build
npm run docs:preview
```

## Cloudflare Pages

| Setting | Value |
|--------|--------|
| Build command | `npm run docs:build` |
| Output directory | `docs/.vitepress/dist` |
| Node.js | 20+ |

Optional environment variable:

- `CF_WEB_ANALYTICS_TOKEN` — Cloudflare Web Analytics beacon token

### Deploy with Wrangler

The project name used by the deploy scripts is `interviewprep-world`. Create a
Cloudflare Pages project with that name once, then authenticate Wrangler:

```bash
npx wrangler login
```

Deploy the production site (the command builds first):

```bash
npm run deploy
```

Create a preview deployment instead:

```bash
npm run deploy:preview
```

## Content

- Hand-authored overrides: `content/questions/overrides/*.yaml`
- Bulk question generation: `npm run content:generate`
- Manifest (sidebars/latest): `docs/.vitepress/manifest.json`

## Contributing

Contributions are welcome—new questions, more precise explanations, fixes, and
accessibility or performance improvements all help.

1. Fork the repository and create a branch from `main`.
2. Install dependencies with `npm install`.
3. Make a focused change. For generated interview tracks, update
   `scripts/generate-questions.ts`; for one-off long-form answers, add an
   override in `content/questions/overrides/`.
4. Run `npm run docs:build` before opening a pull request.
5. Open a PR with a clear summary, screenshots for visual changes, and links to
   any source material used for new technical content.

### Content standards

- Write original, accurate answers in clear language.
- Include a practical code or STAR-format example where appropriate.
- Explain trade-offs and common mistakes; do not add placeholder questions.
- Keep filenames and slugs lowercase and hyphenated.
- Do not commit `docs/.vitepress/dist`, secrets, or local environment files.

### Pull request guidelines

- Keep each PR scoped to one feature, track, or fix.
- Ensure links and navigation work after generation.
- Preserve the existing formatting and avoid unrelated rewrites.
- By contributing, you agree that your contribution may be distributed under
  this repository's license.

## Future hooks

Reserved UI slots (`AdSlot`) and static routes leave room for auth, progress tracking, quizzes, and premium packs without changing the static architecture.
