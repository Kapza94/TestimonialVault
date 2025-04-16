const LEMON_API_KEY = process.env.LEMON_API_KEY;
const LEMON_STORE_ID = process.env.LEMON_STORE_ID;

export const PLANS = {
  PRO: {
    id: process.env.NEXT_PUBLIC_LEMON_PRO_VARIANT_ID,
    price: 9,
    name: 'Pro',
    features: [
      'Unlimited testimonials',
      'Unlimited widgets',
      'No branding',
      'Custom colors',
    ],
  },
  AGENCY: {
    id: process.env.NEXT_PUBLIC_LEMON_AGENCY_VARIANT_ID,
    price: 29,
    name: 'Agency',
    features: [
      'Everything in Pro',
      'Multi-client support',
      'Team collaboration',
      'Priority support',
    ],
  },
};

export async function createCheckoutLink(variantId: string, userId: string) {
  const response = await fetch(`https://api.lemonsqueezy.com/v1/checkouts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${LEMON_API_KEY}`,
    },
    body: JSON.stringify({
      data: {
        type: 'checkouts',
        attributes: {
          store_id: LEMON_STORE_ID,
          variant_id: variantId,
          custom_data: {
            user_id: userId,
          },
        },
      },
    }),
  });

  const data = await response.json();
  return data.data.attributes.url;
}

export async function verifySubscription(subscriptionId: string) {
  const response = await fetch(
    `https://api.lemonsqueezy.com/v1/subscriptions/${subscriptionId}`,
    {
      headers: {
        Authorization: `Bearer ${LEMON_API_KEY}`,
      },
    }
  );

  const data = await response.json();
  return data.data.attributes;
}