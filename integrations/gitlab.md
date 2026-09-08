The [GitLab](https://gitlab.com) integration allows you to preview live issue and merge request information from GitLab links in Outline documents. You can see the current status, timestamp, a preview of the description, and the labels associated with an issue. For merge requests the status is also displayed.

The integration works with both GitLab.com and self-hosted GitLab instances.

![GitLab Outline Integration](/images/integrations/screenshots/gitlab.png)

### Setup

To setup the integration navigate to [Settings → Integrations → GitLab](https://app.getoutline.com/settings/integrations/gitlab). You must have an admin role to be able to see this screen. Click the "Connect" button and authenticate with either GitLab.com or your self-hosted instance.

If you have more than one GitLab organization it can be connected in the same way by navigating to the settings page and clicking the "Connect" button that is now in the header.

> Note: GitLab is linked once for the entire Outline workspace, other team members will be able to see issue and merge request details from repositories that are linked in this way.

### Self-hosted GitLab

For self-hosted deployments of GitLab you must first register an Application in GitLab with the following scopes:

- `read_api` – Read API
- `read_user` – Read your personal information

Use the following format for the callback URL:

```
https://<yourdomain.com>/api/gitlab.callback
```

When registration is complete you will be given a "Client ID" and "Client secret" that can be entered into the setup in Outline to complete the installation.

### Usage

Once the integration is connected, paste an issue, merge request, or project link from gitlab.com or your self-hosted instance into an Outline document and you will see the option to "mention" it, which displays detailed information inside the document. You can also hover over any linked issue or merge request to see more details.

Mentions stay automatically up-to-date as the issue or merge request changes on GitLab.
