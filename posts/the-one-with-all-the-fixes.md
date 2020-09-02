---
title: The one with all the fixes
date: 2020-09-01T00:00:00Z
slug: the-one-with-all-the-fixes
---

The last two weeks we've been focused on bug fixing, performance and reliability. We've always taken pride in the speed of Outline and keeping the app fast requires constant ongoing attention and maintenance. One place that hadn't been optimized in a while was the initial javascript bundle download size, which has now dropped from `2.8Mb` to just `700Kb`.

Some of this updates improvements (Marked with a \[os\]) are brought to you by open source contributions, for this we're very thankful!

### Enhancements

- \[os\] It's now (finally) possible to use line breaks in table cells with `Shift`+`Enter`
- \[os\] The document history sidebar now has a header and a button to close
- The interface for moving documents got cleaned up and it's now easier to tell where the moved document will end up
- The app will now redirect to the parent document instead of the collection when deleting a child document
- \[os\] You can now unpublish a document that was previously published via the overflow (`...`) document menu

### Fixes

- Selected content in the editor can now be dragged to reorder
- When a document is deleted the metadata now reflects the correct user
- It's now possible to view all possible locations when choosing where to move a document
- Table of contents now shows correctly when navigating directly to a document
- A document that previously had it's share revoked can now be reshared if you have permission
- Shares related to deleted documents no longer appear in the admin listing
- The option to create a child document inside a document in the trash no longer appears
- It's now possible to toggle a blockquote via the formatting toolbar (previously blockquotes would be continuously nested)
- Headers inside notice blocks are now the correct color in dark mode
- Checkboxes toggled via the keyboard are now persisted correctly
