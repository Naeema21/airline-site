import OAuthClient from 'intuit-oauth';
import { NextResponse } from 'next/server';
import { clientId, clientSecret, environment,redirectUri } from '@/app/utils/constant';


export async function GET(request,) {
    var oauthClient = new OAuthClient({
        clientId,
        clientSecret,
        environment,
        redirectUri,
    });

    const parseRedirect = request.url;

    try {
        const authResponse = await oauthClient.createToken(parseRedirect);

        oauthClient.token =  authResponse?.token?.access_token
        console.log('authtoen', authResponse)

        
        // const response = await oauthClient.makeApiCall({
        //     url: `https://sandbox-quickbooks.api.intuit.com//quickbooks/v4/customers/${authResponse?.token?.realmId}/bank-accounts`,
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });
        // return NextResponse.redirect(authUri);


        return NextResponse.json(authResponse, { status: 200 });
        // const baseUrl = 'https://sandbox.api.intuit.com'

        // return NextResponse.redirect(`${baseUrl}/about-us`);

    } catch (e) {
        return NextResponse.json({ error: `Authentication failed: ${e.message}` }, { status: 500 });
    }
}
