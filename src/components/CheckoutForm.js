import React, { useState } from "react";
import "../components/Payment.css";

const CheckoutForm = () => {
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <button id="payment-button" disabled={isProcessing}>
        <span>{isProcessing ? "Processing ..." : "Pay now"}</span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default CheckoutForm;
