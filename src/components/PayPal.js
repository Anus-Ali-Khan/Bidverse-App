import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPal = () => {
  const initialOptions = {
    clientId: "test",
    currency: "USD",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider deferLoading={true} options={initialOptions}>
      <PayPalButtons style={{ layout: "horizontal" }} />
    </PayPalScriptProvider>
  );
};

export default PayPal;
