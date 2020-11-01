---
title: Import from Confluence
date: 2020-10-27T00:00:00Z
slug: confluence-import
---

We've made further improvements to importing, in particular it's now possible to import `.doc` files that are exported from Confluence, this is now the recommended format to get content from Confluence into Outline as it supports the greatest range of formatting – including tables.

We plan on releasing a CLI tool soon to allow bulk import for Confluence, Notion, GitHub and other services – watch this space!


### Other fixes and improvements

#### Platform

- Teams using Google Workspace to sign-in can now still search their wiki from Slack after connecting in settings (previously this required Slack auth).
- Notification emails are now a little delayed to reduce the chances of receiving too many.
- Realtime connections are now more performant in Safari, aka the websocket doesn't always fall back to long-polling!

#### Editor

- When scrolling to headers from the table of contents the document will no longer scroll behind the fixed header area.
- There is no longer an erroneous pointer cursor on headings.