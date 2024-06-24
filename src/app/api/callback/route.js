import OAuthClient from 'intuit-oauth';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const oauthClient = new OAuthClient({
        clientId: 'ABgo4bZ5j1alO9VivmPZzgyjchFFqjTIXB8flhQJ2wi084GEe6',
        clientSecret:'FUgeFTroJOuXrj3z2C990XA1x7QwR2ubiOdnMm5I',
        environment: "sandbox", // or 'production'
        redirectUri: 'https://developer.intuit.com/v2/OAuth2Playground/RedirectUrl',
      });

    const parseRedirect = request.url;

    try {
        await oauthClient.createToken(parseRedirect);
        return NextResponse.redirect('/payments');
    } catch (e) {
        console.error('Error', e);
        return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
    }
}
