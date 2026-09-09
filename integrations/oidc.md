### Sign in with your identity provider

Outline supports any identity provider that implements [OpenID Connect](https://openid.net/connect/), including Okta, Auth0, Keycloak, Authentik, Authelia, and Zitadel. Your team signs in with the accounts they already have, and the access policies, multi-factor authentication, and offboarding you manage centrally apply to Outline too.

### One login for everything

Members are created in Outline the first time they sign in, with their name and avatar pulled from your identity provider, so there is nothing to provision by hand. Choose the label shown on the sign in button, so it reads "Continue with Okta" or whatever your team expects.

### Setup

OpenID Connect authentication is available for self-hosted installations of Outline. Create an application in your identity provider, add Outline's callback URL, and copy the client credentials across. Full instructions for popular providers are in the [OIDC authentication guide](https://docs.getoutline.com/s/hosting/doc/oidc-8CPBm6uC0I) in our hosting documentation.

> Note: Cloud customers can enable single sign-on with their own identity provider on selected plans, see [pricing](/pricing) for details.
