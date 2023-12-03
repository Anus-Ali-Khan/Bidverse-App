import React from "react";
import StripeCheckout from "react-stripe-checkout";

const PaymentStripe = () => {
  const onToken = (token) => {};

  return (
    <div className="self-center">
      <StripeCheckout
        token={onToken}
        name="Add your payment info"
        currency="USD"
        amount="100"
        stripeKey="pk_test_51OJHUvFAZxfMQMfL4xK758tq4fdqmy0PEq5yKBnzKkJDick85ZmBI1KMA3hQ6LTibbv4GsH2CGvp9wbmC0FIDjFS00I5329zP2"
      />
    </div>
  );
};

export default PaymentStripe;
