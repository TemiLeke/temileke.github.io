# temileke.github.io

Personal site of Temitope Adeoye, built with plain [Jekyll](https://jekyllrb.com/) and deployed to GitHub Pages by `.github/workflows/deploy.yml` (builds on every push to `master` and publishes to the `gh-pages` branch).

## Updating content

| What | Where |
| --- | --- |
| Name, title, tagline, email, profile links | `_config.yml` → `profile:` |
| Experience timeline | `_data/experience.yml` |
| Education | `_data/education.yml` |
| Papers, talks and posters | `_data/publications.yml` |
| News items | `_news/*.md` (one file per item, `date:` in front matter) |
| Research write-ups | `_research/*.md` |
| CV PDF | `assets/pdf/temitope_cv.pdf` |

Images go in `assets/img/` as `.webp`, ideally no wider than 1600px. In research pages use:

```liquid
{% include figure.html src="/assets/img/example.webp" alt="..." caption="..." %}
```

## Running locally

Requires Ruby 3.x.

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.
