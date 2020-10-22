import React, { useState } from 'react';
import Input from './Input.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Modal = (props) => {

  const [submit, setSubmit] = useState(props.mounted)

  const sendForm = event => {
    setSubmit(props.mounted)
    event.preventDefault()
  }

  return (
    <div className="Modal">
      <form
        onSubmit={sendForm}
        className="ModalForm">
        <Input
          id="username"
          type="text"
          placeholder="name"
        />
        <Input
          id="username"
          type="email"
          placeholder="email@domain.com"
        />
        <Input
          id="password"
          type="password"
          placeholder="password"
        />
        <button type="submit">Log in
          <FontAwesomeIcon icon={faCoffee} />
        </button>
      </form>
    </div>
  )
}

export default Modal;
