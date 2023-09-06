import {stripe,loadstripe} from "@stripe/stripe.js"
let stripePromise: Promise<stripe | null>;

export const getStripePromise = () => {
  const key = process.env.NEXT_PUBLIC_API_KEY  || "";

  if(!stripePromise && !!key){
    stripePromise = loadStripe(key);
  }
  return stripePromise;
};