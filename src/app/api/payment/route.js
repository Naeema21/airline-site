import OAuthClient from 'intuit-oauth';
import { NextResponse } from 'next/server';

export async function GET() {
    const oauthClient = new OAuthClient({
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        environment: process.env.ENVIRONMENT,
        redirectUri: process.env.REDIRECT_URL,
    });

    try {
        const response = await oauthClient.makeApiCall({
            url: `https://sandbox-quickbooks.api.intuit.com/v3/company/4620816365366855920/query?query=select * from Payment&minorversion=40`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return NextResponse.json(JSON.parse(response.body));
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'Failed to fetch payments' }, { status: 500 });
    }
}
