import OAuthClient from 'intuit-oauth';
import { clientId, clientSecret, environment, redirectUri } from '@/app/utils/constant';
import { NextResponse } from 'next/server';


export async function POST(req, res) {
    const data = await req.json()
    const oauthClient = new OAuthClient({
        clientId,
        clientSecret,
        environment,
        redirectUri,
    });
    const token = "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..sGMThtnqvKISWkD2bPLQCw.LkUmPfNQSI6V1K0pRnZLTwp11VKcjQy0FPa1BFGbMFMe0axwWn5lrRNGPGiU9HqXU0gDXawb2C7lPOv1mn-O5eimAC39OLJNnacN5Tw_oWYh0N3NjOe47-j9e9gq9d3EhK0X4UfM213Ntuyw6_gUn1eJKIVEJpQF3jUCo3eP9qYXtiURpuyi4bNKsPziIywQiErnmhNL36ZZQw7tttls5QAtP0FtjRHFsaSEIOl9cn8dyOzHXCZUyLWrjB5LtUBJYP6f6zzvfvkPG6UyY8QJ2zVkTqU_DsjAB20eBDmmFXuBaeYFVNs4O2MVoYcYtk1j0FRZH68OrddfxM2QV_0M9I5CXotQOejX4F_rHB1fjsIzjm3F2rmNloFw-EdtjWo6LpPdSNHm02oWweaEb6DGeTdfvvWuXQyL3F2kRJQyuXI_Dsj8vV6lXYSsz--cqZHNQq-VZTJnR48iQimi_KBeZSwrAs8Fz-esUDwfkKJprFMvm4rejsBs1Z9LX43OzdUukqd-lzgY8nLVTDsdLAmKiz-0Xm49EUR-L2X2vJupMpDlAZcmBG3rOULaaNchr3_ZPJhXk7UoFVXKmSY9LPszxpPr50NrQNxAq4WAjmuNM7s-oIayT5HxmfaGJjL6rC6fNAp1TI9q06uNZvqTDmcdoFa1BD4qBmBlYu2LP-GBwMBwuQ2-NlXkwHeT2mIafqxAT8n-XkpZl8zT8fWOMG8Iwt1bfxLjKDAq8hvys1DnHy4qnww2m7R39ykJ8gsXL8e8sJsD9Ql6a7YyAEN_Sor5Mq4FwcXQyJgdTEcdF-o_1dTQ4zpDSl_ychu9UvFvGrKBvWwBv41kamotNMJ-oyH9Yw.K-9xIdeGTmYCJG85kCEHtA"

    if (!token) {
        return NextResponse.json({ error: 'Unauthorized', status: 404 });
    }

    oauthClient.token = token

    const { card, amount, currency } = data;
    const { number, expMonth, expYear, cvc } = card
    try {
        const paymentResponse = await oauthClient.makeApiCall({
            url: `https://sandbox.api.intuit.com/quickbooks/v4/payments/charges`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${oauthClient.getToken().access_token}`,
            },
            body: JSON.stringify({
                amount: amount,
                card: {
                    number: number,
                    expMonth: expMonth,
                    expYear: expYear,
                    cvc: cvc,
                },
                currency: currency,
            }),
        });

        return NextResponse.json({ message: JSON.parse(paymentResponse) });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ message: 'Failed to process payments' });
    }
};
