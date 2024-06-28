import { clientId, clientSecret, environment, redirectUri } from "./constant";
import OAuthClient from 'intuit-oauth';

export const oauthClient1 = new OAuthClient({
    clientId,
    clientSecret,
    environment,
    redirectUri,
  });