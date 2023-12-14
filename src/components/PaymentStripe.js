import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const CLIENT_SECRET =
  "sk_test_51OJHUvFAZxfMQMfLG48qWFSUUP5o8SgdeliteflK9utaBInqtB1RhGIPdzc9PSgWym48VwzC3ZRKZb1UYFiRmiXj00mZsG9dw0";

const PaymentStripe = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const publishableKey =
      "pk_test_51OJHUvFAZxfMQMfL4xK758tq4fdqmy0PEq5yKBnzKkJDick85ZmBI1KMA3hQ6LTibbv4GsH2CGvp9wbmC0FIDjFS00I5329zP2";
    setStripePromise(loadStripe(publishableKey));
  }, []);

  useEffect(() => {
    const clientSecret =
      "sk_test_51OJHUvFAZxfMQMfLG48qWFSUUP5o8SgdeliteflK9utaBInqtB1RhGIPdzc9PSgWym48VwzC3ZRKZb1UYFiRmiXj00mZsG9dw0";
    setClientSecret(clientSecret);
  }, []);

  const options = {
    mode: "payment",
    currency: "usd",
    amount: 1099,
    automatic_payment_methods: {
      enabled: true,
    },
  };

  return (
    <div>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default PaymentStripe;
