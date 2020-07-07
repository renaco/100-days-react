import React from 'react';

const BasicInput = (props) => {
  return (
    <div className="BasicInput">
      <label htmlFor={props.name}>{props.label}</label>
      <input id={props.name} type={props.type} placeholder={props.placeholder} />
    </div>
  );
}

const SelectItem = (props) => {
  return (
    <select>
      {props.items.map((item, index) => {
        return (
          <option value={index} key={index}>{item}</option>
        )
      })}
    </select>
  )
}

const ExpiryDate = () => {

  const Months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const Years = [
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021'
  ]

  return (
    <div className="ExpiryDate">
      <label>Expires on</label>
      <div className="Expiry">
        <SelectItem items={Months} />
        <SelectItem items={Years} />
      </div>
      <div className="CVCField">
        <label>CVC</label>
        <input placeholder="000" type="number" maxLength="3" />
      </div>
    </div>
  )
}

const CheckoutButton = () => {
  return (
    <div className="CheckoutButton">
      <button>Book securely</button>
      <span><i className="fa fa-fw fa-lock">You credit card information is encrypted</i></span>
    </div>
  )
}

const PaymentFormComponents = (props) => {
  const user = 'John Smith';
  const defaultCard = '0000 0000 0000 0000';

  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <div className="Title">Payment information</div>
        <BasicInput name="name" label="Name on credit card" type="text" placeholder={user} maxLength="19" />
        <BasicInput name="card" label="Credit card number" type="number" placeholder={defaultCard} />
        <ExpiryDate />
        <CheckoutButton />
      </form>
    </div>
  );
}

export default PaymentFormComponents;