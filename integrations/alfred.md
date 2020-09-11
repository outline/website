Simply type your search keyword into [Alfred](https://www.alfredapp.com/) _(default: ou)_ to see instant search results from your Outline knowledge base with our Workflow. Selecting a search result takes you directly to that Outline document in your default web browser.

![Alfred Integration](/images/integrations/screenshots/alfred.png)


### Installation

This integration requires [Node.js](https://nodejs.org) 8+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/) to be installed on your computer already. Once that's done, simply run the following command in your computer's terminal to install the Outline Workflow:

```
$ npm install --global alfred-outline
```

### Workflow Variables

There are two variables that need configuring:

- `apiToken`: Grab a personal API token from the settings screen in Outline under "API Tokens" in the left sidebar.
- `domain`: This should be your just your teams Outline domain (`<TEAM-SUBDOMAIN>.getoutline.com`) to make sure that documents open in the right place.