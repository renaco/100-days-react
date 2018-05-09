import React, { Component } from 'react';
import OrderSummary from './OrderSummary';
import PaymentFormComponents from './PaymentFormComponents';

class Checkout extends Component {
  render() {
    return (
      <div className="Checkout">
        <OrderSummary/>
        <PaymentFormComponents/>
      </div>
    );
  }
}

export default Checkout;