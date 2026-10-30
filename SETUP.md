# Deploy Motherplant Archives on GitHub Pages

This starter is a **non-destructive overlay** for the existing `karl5252/BarrelStormWiki` repository. It adds MkDocs configuration, a homepage, a gallery placeholder, lore, CSS/JS, and a Pages workflow. It **does not replace** existing `docs/vision.md`, `docs/gameplay.md`, `docs/enemies.md`, `docs/art-direction.md`, or `docs/world-and-tone.md`.

## Apply

1. Extract this ZIP into the **root** of your cloned `BarrelStormWiki` repository, preserving folders.
2. Commit and push to `main` (or open a PR first).
3. On GitHub open **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. In the **Actions** tab, allow the workflow if GitHub requests approval. The `Publish Motherplant Archives` workflow should build and deploy the site.
5. Visit `https://karl5252.github.io/BarrelStormWiki/` after a successful deployment.

## Local preview

```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
mkdocs serve
```

## Check build

```bash
mkdocs build --strict
```

## Adding posters

Save **watermarked, web-optimized** copies under `docs/assets/propaganda/`. Embed in `docs/gallery.md` with Markdown. Never commit unwatermarked high-resolution masters unless you explicitly want them public.

## Notes

- The daily slogan changes client-side based on UTC day, without cron, APIs or a server.
- No user tracking or analytics is included.
- Existing top-level `img/` assets will remain untouched, but MkDocs serves files under `docs/`; copy selected assets there when ready.
- This is a standard GitHub Pages deployment using GitHub Actions and does not use the disabled GitHub Wiki feature.

## Security checklist (recommended)

The repository may remain **public**: public visibility allows reading and forking, not direct pushes from strangers. For this solo-maintained project:

1. In **Settings → Rules → Rulesets** (or Branch protection rules), create a rule targeting `main`. Block force pushes and deletions, and require a pull request if that fits your workflow. Check what your GitHub plan supports. For a solo owner, requiring another person's approval may be impractical.
2. Keep **Settings → Actions → General → Workflow permissions** at **Read repository contents permission** by default. This Pages workflow explicitly requests only `contents: read`, `pages: write`, and `id-token: write` for publication.
3. Do not automatically run untrusted pull-request code in privileged workflows. This workflow only runs on pushes to `main` and manual dispatch; it does not run on `pull_request_target`.
4. Keep **Settings → Pages → Source** set to GitHub Actions. Publication requires write access to `main` or permission to manually dispatch workflows.
5. Do not commit secrets, raw unreleased artworks, premium audio masters, or private licenses. Every file in a public repository should be considered public. A private Git repository does not automatically mean a published Pages website will be private.
6. Enable GitHub's security alerts / Dependabot where available, review workflow action upgrades, and keep MkDocs dependencies current.

This project has **no login, backend, visitor uploads, form submissions, remote APIs, or analytics**. The daily bulletin uses local static JavaScript and does not need elevated permissions.

## Build status

The package was checked for file layout and links, but the local MkDocs build could not be run in the packaging environment because it cannot fetch external Python packages. The GitHub workflow runs `mkdocs build --strict` and will fail rather than publishing a broken build.
