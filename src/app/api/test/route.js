import { NextResponse } from "next/server";
import OAuthClient from "intuit-oauth";

export const POST = async (request) => {
  try {
    const oauthClient = new OAuthClient({
      clientId: 'ABgo4bZ5j1alO9VivmPZzgyjchFFqjTIXB8flhQJ2wi084GEe6',
      clientSecret:'FUgeFTroJOuXrj3z2C990XA1x7QwR2ubiOdnMm5I',
      environment: "sandbox", // or 'production'
      redirectUri: 'https://developer.intuit.com/v2/OAuth2Playground/RedirectUrl',
    });

    const authUri = await oauthClient.authorizeUri({
      scope: [OAuthClient.scopes.Accounting, OAuthClient.scopes.OpenId],
      state: 'Init' // State to protect against CSRF attacks
    });

    const authResponse = await oauthClient.createToken(authUri);


    return NextResponse.json({
      message: `Thank You for contacting! , ${authUri} , ${authResponse}`,
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
};
