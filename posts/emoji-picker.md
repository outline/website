---
title: A new integrated emoji picker
date: 2021-10-23T00:00:00Z
slug: emoji-picker
---

![Outline emoji picker](/images/emoji-picker.png)

The editor gained a new emoji picker this month, just type ":" and a search term 
to quickly find relevant emojis for your document!

It's now also possible to set a "default role" for new users that join your knowledge
base. For example, new signups can now have viewer priviledges by default. You can
find this setting under Settings -> Security.

### Fixes and improvements

#### Editor

- Fixed home key/keycombo not working correctly in headers
- `mailto:` links are supported in the editor again
- Fixed issue where documents beginning with an emoji would overlay the table of contents
- Clicking outside the editor will now always close an open toolbar
- Creating newlines from a collapsed heading now behaves more predictably
- Performance improvements to the editor

#### Platform

- Customers that have a custom domain no longer show a "Back to website" link on the login screen
- It's now possible to change the light/dark theme on publicly shared documents
- You can now delete previous export data. By default these are still removed after 30 days.
- Creating an API key no longer reloads the entire app
- Context menus can no longer extend out of the available window space
- The collection icon picker is now closable on mobile
