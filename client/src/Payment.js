import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

function Payment(props) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/config").then(async (r) => {
      const { publishableKey } = await r.json();
      
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (r) => {
      const { clientSecret } = await r.json();
      
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <div className="container">
      <h1>Stripe Payment</h1>
      {stripePromise && clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
           <CheckoutForm />
         </Elements>
      )}
    </div>
  );
}

export default Payment;
