import OAuthClient from 'intuit-oauth';
import { NextResponse } from 'next/server';
import { oauthClient1 } from '@/app/utils/oauthclient';

export async function GET() {

    const authUri = oauthClient1.authorizeUri({
        scope: [OAuthClient.scopes.Accounting, OAuthClient.scopes.OpenId],
        state: 'Init'
    });

    return NextResponse.redirect(authUri);
}
