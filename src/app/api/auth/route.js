import OAuthClient from 'intuit-oauth';
import { NextResponse } from 'next/server';

export async function GET() {
    const oauthClient = new OAuthClient({
        clientId: 'ABgo4bZ5j1alO9VivmPZzgyjchFFqjTIXB8flhQJ2wi084GEe6',
        clientSecret:'FUgeFTroJOuXrj3z2C990XA1x7QwR2ubiOdnMm5I',
        environment: "sandbox", // or 'production'
        redirectUri: 'https://developer.intuit.com/v2/OAuth2Playground/RedirectUrl',
      });

    const authUri = oauthClient.authorizeUri({
        scope: [OAuthClient.scopes.Accounting, OAuthClient.scopes.OpenId],
        state: 'Init'
    });

    return NextResponse.redirect(authUri);
}
