import OAuthClient from 'intuit-oauth';
import { NextResponse } from 'next/server';
import { clientId, clientSecret, environment,redirectUri } from '@/app/utils/constant';

export async function GET() {
    console.log('CLIENT', clientId)
    const oauthClient = new OAuthClient({
        clientId,
        clientSecret,
        environment,
        redirectUri,
      });

    const authUri = oauthClient.authorizeUri({
        scope: [OAuthClient.scopes.Accounting, OAuthClient.scopes.OpenId],
        state: 'Init'
    });

    return NextResponse.redirect(authUri);
}
