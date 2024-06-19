import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  const { cardNumber, expMonth, expYear, cvc, amount } = req.body;

  if (!cardNumber || !expMonth || !expYear || !cvc || !amount) {
    res.status(400).send('Card details and amount are required');
    return;
  }

  try {
    // Step 1: Create a token with card details
    const tokenResponse = await fetch('https://sandbox.api.intuit.com/quickbooks/v4/payments/tokens', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.QUICKBOOKS_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        card: {
          number: cardNumber,
          expMonth,
          expYear,
          cvc,
        },
      }),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      throw new Error(tokenData.error || 'Token creation failed');
    }

    const { value: token } = tokenData;

    // Step 2: Charge the card using the token
    const paymentResponse = await fetch('https://sandbox.api.intuit.com/quickbooks/v4/payments/charges', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.QUICKBOOKS_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        token,
      }),
    });

    const paymentData = await paymentResponse.json();

    if (!paymentResponse.ok) {
      throw new Error(paymentData.error || 'Payment processing failed');
    }

    res.status(200).json(paymentData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
