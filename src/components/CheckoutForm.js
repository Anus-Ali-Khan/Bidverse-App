import React, { useState } from "react";
import "../components/Payment.css";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.GeolocationPosition.origin}/completion`,
      },
    });
  };

  return (
    <form className="payment-form b-style" onSubmit={handleSubmit}>
      <PaymentElement />
      <button id="payment-button" disabled={isProcessing}>
        <span>{isProcessing ? "Processing ..." : "Pay now"}</span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default CheckoutForm;
