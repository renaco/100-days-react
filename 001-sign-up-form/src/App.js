import React, { useState } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Modal from './Components/Modal.js';
import './App.css';

function App() {

  const [mounted, setMounted] = useState(true)

  const handleForm = event => {
    setMounted(event)
  }

  return (
    <div className="App">
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {mounted && <Modal
          onSubmit={() => handleForm(false)}
          mounted={mounted}
        />}
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default App;
