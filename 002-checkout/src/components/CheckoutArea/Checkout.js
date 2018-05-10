import React, { Component } from 'react';
import OrderSummary from './OrderSummary';
import PaymentFormComponents from './PaymentFormComponents';

class Checkout extends Component {
  render() {
    return (
      <div className="Checkout">
        <OrderSummary 
          duration={this.props.duration}
          discount={this.props.discount}
          tax={this.props.tax}
          price={this.props.price}
        />
        <PaymentFormComponents
          onSubmit={this.props.onSubmit}
        />
      </div>
    );
  }
}

export default Checkout;