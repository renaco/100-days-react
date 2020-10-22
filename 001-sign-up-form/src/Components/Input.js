import React from 'react';

function Input({ name, type, id, placeholder }) {
  return (
    <div className="Input">
      <input
        id={name}
        autoComplete="false"
        required
        type={type}
        placeholder={placeholder}
      />
      <label htmlFor={id}></label>
    </div>
  )
}

export default Input;