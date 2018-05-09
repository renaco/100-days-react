import React, { Component } from 'react'
import pluralize from 'pluralize'

class OrderSummary extends Component {
  render() {
    let duration = this.props.duration + '' + pluralize('day', parseInt(this.props.duration));
    let initialTotal = this.props.duration * this.props.price;
    let discount = Math.floor((initialTotal / 100) * this.props.discount);
    let subtotal = initialTotal - discount;
    let tax = Math.floor((subtotal / 100) * this.props.tax);
    let total = subtotal + tax;
    return (
      <div className="OrderSummary">
        <div className="Title">Order Summary</div>
        <table>
          <tbody>
            <tr>
              <td>{this.props.price} x {duration}</td>
              <td>{initialTotal} GBP</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>{ discount } GBP</td>
            </tr>
            <tr>
              <td>Subtotal</td>
              <td>{ subtotal } GBP</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>{ tax } GBP</td>
            </tr>
          </tbody>
        </table>
        <div className="Total">
          <div className="TotalLabel">Total</div>
          <div className="Amount">
            { total } <small>GPB</small>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderSummary;