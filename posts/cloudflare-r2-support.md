---
title: Cloudflare R2 storage support
date: 2026-06-25T00:00:00Z
slug: cloudflare-r2-support
---

Self-hosted Outline instances can now store uploads on Cloudflare R2 and other S3-compatible providers that don't support presigned POST uploads. Set `AWS_S3_UPLOAD_METHOD=put` in your environment to switch to presigned PUT requests — the existing `post` behavior remains the default, so nothing changes for current deployments.

This closes a long-standing gap for teams running Outline on R2's cheap, egress-free storage, and paves the way for supporting other S3-compatible backends with similar constraints.
