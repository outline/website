// This script was used to import old releases from outline/outline

const { Octokit } = require("@octokit/rest");
const fs = require("fs");
const octokit = new Octokit();

(async () => {
  const { data } = await octokit.repos.listReleases({
    owner: "outline",
    repo: "outline",
    per_page: 100,
  });

  for (const release of data) {
    const post = `---
id: ${release.id}
title: ${release.name}
date: ${release.published_at}
slug: ${release.tag_name}
tag: ${release.tag_name}
---
    
${release.body}
      `;

    fs.writeFileSync(`../posts/${release.tag_name}.md`, post);
  }
})();
