declare module 'intuit-oauth' {
    interface OAuthClientConfig {
        clientId: string | undefined;
        clientSecret: string | undefined;
        environment: string | undefined;
        redirectUri: string | undefined;
    }

    interface Token {
        access_token: string;
        refresh_token: string;
        expires_in: number;
        x_refresh_token_expires_in: number;
    }

    interface AuthResponse {
        token: Token;
    }

    interface ApiCallOptions {
        url: string;
        method: 'GET' | 'POST' | 'PUT' | 'DELETE';
        headers?: Record<string, string>;
        body?: any;
    }

    class OAuthClient {
        constructor(config: OAuthClientConfig);
        authorizeUri(options: { scope: string[]; state: string }): string;
        createToken(authCode: string): Promise<AuthResponse>;
        makeApiCall(options: ApiCallOptions): Promise<any>;
        token: Token;
        static scopes: {
            Accounting: string;
            OpenId: string;
        };
    }

    export = OAuthClient;
}
