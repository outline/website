Webhooks send a JSON POST to a URL of your choosing whenever something happens in your workspace: a document is published, a comment is added, a user joins, a collection is shared, and so on. External systems can react to changes in Outline the moment they happen, without polling the API.

### Setup

Navigate to [Settings → Webhooks](https://app.getoutline.com/settings/webhooks) and click "New webhook". Give the webhook a name, enter the URL to deliver to, and choose the events to subscribe to. You can subscribe to everything, or pick individual events across documents, collections, comments, users, groups, shares, and more.

Each delivery includes the event name and the full payload of the affected model. Add a secret to the webhook and Outline will sign each delivery so you can verify it came from your workspace.

> Note: Webhooks that fail to deliver repeatedly are disabled automatically and can be re-enabled from the settings page once the endpoint is fixed.

### Going further

Combine webhooks with the [API](/developers) to build two-way integrations, or use [Zapier](/integrations/zapier) and [Make](/integrations/make) if you would rather not write code.
