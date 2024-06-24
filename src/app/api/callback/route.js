import OAuthClient from 'intuit-oauth';
import { NextResponse } from 'next/server';

export async function GET(request) {
    var oauthClient = new OAuthClient({
        clientId: 'ABgo4bZ5j1alO9VivmPZzgyjchFFqjTIXB8flhQJ2wi084GEe6',
        clientSecret: 'FUgeFTroJOuXrj3z2C990XA1x7QwR2ubiOdnMm5I',
        environment: "sandbox", // or 'production'
        redirectUri: 'http://localhost:3000/api/callback',
    });

    const parseRedirect = request.url;

    try {
        const authResponse = await oauthClient.createToken(parseRedirect);

        oauthClient.token =  authResponse?.token?.access_token
        console.log('authtoen', authResponse)

        
        const response = await oauthClient.makeApiCall({
            url: `https://sandbox-quickbooks.api.intuit.com//quickbooks/v4/customers/${authResponse?.token?.realmId}/bank-accounts`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return NextResponse.json(response, { status: 200 });

    } catch (e) {
        return NextResponse.json({ error: `Authentication failed: ${e.message}` }, { status: 500 });
    }
}
