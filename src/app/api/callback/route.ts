import { NextResponse } from 'next/server';
import { oauthClient1 } from '@/app/utils/oauthclient';

export async function GET(request:Request) {
    // Extract the authorization code from the query parameters
    const parseRedirect = request.url;

    try {
        // Exchange the authorization code for tokens
        const authResponse = await oauthClient1.createToken(parseRedirect);

        // Set the OAuth client token for subsequent API calls
        oauthClient1.token =authResponse.token;

        // Make an API call to the QuickBooks API
        const response = await oauthClient1.makeApiCall({
            url: `https://sandbox-quickbooks.api.intuit.com/v4/company/9341452498340575/query?query=select * from Payment&minorversion=40`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authResponse.token.access_token}`
            }
        });

        return NextResponse.json({res:response, data:authResponse.token.access_token}, { status: 200 });
    } catch (e) {
        return NextResponse.json({ error: `Authentication failed: ${e}` }, { status: 500 });
    }
}
