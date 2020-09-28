---
title: Import from Microsoft Word
date: 2020-09-27T00:00:00Z
slug: import-from-word
---

Much like last months update our focus continues to be on little details, performance, and bug fixing rather than new features – but some solid new functionality did sneak in with the help of open source contributors…

### HTML + Word Import

You can now import HTML and Microsoft Word documents simply by dragging them onto a collection, or from the collection context menu. We also improved the look and feel of GSuite embeds.


### New + Unread badges

Lists of documents now show when you last viewed the doc – and new, unread documents are highlighted with a badge so it's easier to spot changes you missed.

![new document badge](/images/new-badge.png)


### Other fixes and improvements

#### Platform

- Share links can now be embedded in iframes
- Document and collection titles can now be edited from the sidebar by double clicking
- Improvements to focus accessibility
- You can now unpublish a document that was previously published via the overflow "..." menu
- It's now possible to restore documents when their collection has been deleted
- When a document is deleted the metadata now reflects the correct user
- It's now possible to view all possible locations when choosing where to move a document
- An issue with nested modals not stacking correctly
- Clicking to "change permissions" when editing a collection now works correctly
- A document that previously had it's share revoked can now be re-shared
- Shares related to deleted documents no longer appear in the admin area
- It's no longer possible to create a child document inside a deleted document
- Improved handling of deleted documents/collections over websockets
- Fixed new revisions being skipped if identical to previously autosaved revision
- Document history sidebar now has a header and button to close

#### Editor

- It's now possible to use line breaks in table cells with `Shift`+`Enter` 
- Google docs, sheets and presentations can now be embedded without requiring "Publish to web" first
- Styling and behavior of doc link search was improved to be more reliable
- Selected content in the editor can now be dragged to reorder
- Table of contents now shows correctly when navigating directly to a document url (eg from a bookmark)
- It's now possible to toggle a blockquote via the formatting toolbar (previously blockquotes would be continuously nested)
- Headers inside notice blocks are now the correct color in dark mode
- Checkboxes can now be toggled in read only mode via the keyboard
- Enter key in document title now adds a new paragraph below the title
- Keyboard shortcuts now work when document title is focused
- It's now possible to underline text in the editor with `CMD+U`
- Horizontal dividers are no longer selectable in read-only
- Automatic linking of pasted URL's is now more reliable
- Document titles no longer look faded in Safari
- Fixed cursor navigation around headings in Firefox
- There is no longer a small pointer dead zone over links when hover card is visible
- It's now possible to select embeds in the editor
- "ClickUp" added to embed integrations
- The positioning of the formatting toolbar has been improved to be more predictable
- It is now possible to search for existing docs using their URL
