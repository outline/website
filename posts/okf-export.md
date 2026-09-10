---
title: Open Knowledge Format export
date: 2026-09-04T00:00:00Z
slug: okf-export
---

Collections and workspaces can now be exported in the [Open Knowledge Format](https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing) (OKF), an open, portable bundle of markdown files designed to keep your content and its metadata readable outside of Outline.

Each document is exported as markdown with YAML frontmatter describing its title, type, description, and when it was generated, and every bundle includes a root `index.md` that declares the OKF version and lists its top-level entries. It's available anywhere you can already export to markdown — just pick "OKF" as the format from the export dialog.
