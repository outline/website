/**
 * Configuration for the Scalar API Reference.
 *
 * Used by both the build-time prerender (scripts/render-scalar.mjs) and
 * client-side hydration (pages/developers.tsx). The two must be identical,
 * apart from `content`, or Vue will detect a hydration mismatch and re-render
 * the reference from scratch on the client.
 */
module.exports = {
  layout: "modern",
  documentDownloadType: "none",
  showDeveloperTools: "never",
  agent: { disabled: true },
  mcp: { disabled: true },
};
