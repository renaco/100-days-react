import React from 'react';

const Overlay = (props) => {
  return (
    <div className="Overlay" style={{ 'backgroundImage': 'url(' + props.image + ')' }}>
      Overlay
    </div>
  );
}

export default Overlay;
