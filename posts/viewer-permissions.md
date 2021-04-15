---
title: Collection Permissions & Viewers
date: 2021-04-14T00:00:00Z
slug: viewer-permissions
---

![viewer permissions](/images/viewer-permissions.png)

In the last couple of weeks we've deployed two changes that together really improve
the permissions story in Outline. It's now possible to make a user a "viewer" at 
the team level, meaning they will not be able to edit any collections or documents
at all.

We also added the option to make the default access level for a collection "view only",
you can then select just a couple of team members to have edit permissions.

### Enhancements

- Added the ability to drag and drop files into the collection screen
- Improved and more comprehensive translations
- Visual improvements to dark mode styling and mobile context menus
- Added a /logout route to support SLO 
- When viewing a public share route while signed in with edit permissions an "Edit" button is now displayed

### Fixes

- Suspending a user now logs them out of any active sessions immediately
- When a suspended user tries to sign in with email the situation is now explained more clearly to them
- Fixed an error in the shares.info API endpoint when the user that originally creating share has been deleted
- Fixed an issue with invisible list bullets in Firefox
- Fixed a rare error when moving documents
- Fixed embed support for Lucid Charts on the lucid.app domain 