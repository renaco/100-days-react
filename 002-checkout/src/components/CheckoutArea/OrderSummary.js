import React from 'react';
import pluralize from 'pluralize';

const OrderSummary = (props) => {

  let duration = props.duration + '' + pluralize('day', parseInt(props.duration));
  let initialTotal = props.duration * props.price;
  let discount = Math.floor((initialTotal / 100) * props.discount);
  let subtotal = initialTotal - discount;
  let tax = Math.floor((subtotal / 100) * props.tax);
  let total = subtotal + tax;

  return (
    <div className="OrderSummary">
      <div className="Title">Order summary</div>
      <table>
        <tbody>
          <tr>
            <td>{props.price} x {duration}</td>
            <td>{initialTotal} GBP</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td>{discount} GBP</td>
          </tr>
          <tr>
            <td>Subtotal</td>
            <td>{subtotal} GBP</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>{tax} GBP</td>
          </tr>
        </tbody>
      </table>
      <div className="Total">
        <div className="TotalLabel">Total</div>
        <div className="Amount">
          {total} <small>GPB</small>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;