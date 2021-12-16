import axios from "axios";
import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";

export const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 5000,
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);
  const KEY =
    "pk_test_51K3AnrEQLFIlBnYrpscOvNpVnztofrwj4COIvkuKTn5CTfn7jTSXiJRuIC4a25a9Dsmna0BOdHN0bpfDS5IeaslT00X8wdCV8l";
  return (
    <div>
      <StripeCheckout
        name="Neutra"
        billingAddress
        shippingAddress
        description="UNA COSA"
        amount={10000}
        token={onToken}
        stripeKey={KEY}
      >
        <button>Pagar</button>{" "}
      </StripeCheckout>
    </div>
  );
};
