---
title: WebMCP support
date: 2026-09-09T00:00:00Z
slug: webmcp-support
---

Outline now has experimental support for WebMCP, a browser standard that lets in-page AI agents discover and call structured tools directly through `document.modelContext`. This means agents in Chrome and ChatGPT can programmatically control Outline through the browser itself, no separate server connection required.

- **Action mirroring** – existing command bar actions are automatically registered as WebMCP tools, complete with the same visibility rules and context you already get in the UI
- **New agent-only tools** – `get_current_context` and `search_workspace` give agents a quick way to orient themselves in your workspace
- **Safety controls** – destructive actions like deletes are excluded from what agents can call
- **Team preference gating** – WebMCP sits behind your workspace's existing MCP settings, so it's off unless MCP is enabled for your team

This requires Chrome 146+ with the WebMCP flag enabled, and support will expand as the standard matures.
