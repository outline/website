---
title: Document Insights
date: 2021-05-20T00:00:00Z
slug: viewer-details
---

![viewer details](/images/viewer-popover.png)

We've rolled out a number of UI improvements in the past couple of weeks within documents. It's now possible
to see who on your team has viewed a document, simply click on the **"Viewed by X people"** text beneath the
title for a detailed flyover of everyone that has viewed and when.

The pile of faces at the top right of a document continues to show who has previously _edited_ or is active right now.
We'll be adding more detailed team-level insights soon!


### Other fixes and improvements

- Added print "page break" functionality to editor to adjust print layout (Insert via slash menu)
- Permissions-policy header to disable [FLOC](https://www.eff.org/deeplinks/2021/03/googles-floc-terrible-idea) is now returned on all pages
- Document content now takes up more horizontal space on larger screens

#### Fixes

- Fixed content appearing behind status bar in iOS PWA on some models of iPhone
- Moving a duplicated document from a private to a not-private collection now updates the permissions of it's attachments
- Improved frontend support for importing doc, docx files
- Slack 'Post to channel' functionality now works without the requirement of using Slack SSO 
- Page no longer reloads in Firefox when clicking some menu items
- Removed extra space on left side of page when printing in Firefox
- Fixed print styles in dark mode
- Improved editor image upload to remove flickering of image when the placeholder is replaced
- Fixed document hover preview appearing behind subheadings
- Fixed several smaller editor issues and crashes
- Typing a word with underscores in the middle no longer creates italic text
