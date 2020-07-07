import React from 'react';

const Header = (props) => {
  return (
    <header className="Header">
      <input
        onChange={props.onChange}
        type="range"
        max="100"
        min="1"
        step="1"
      />
      <h1>{props.adj} User</h1>
    </header>
  );
}

export default Header;