import React, { useState } from 'react';
import Modal from './Components/Modal.js';
import './App.css';

function App() {

  const [mounted, setMounted] = useState(true)

  const handleForm = () => setMounted(false)
  return (

    <div className="App">
      {mounted}
      {mounted && <Modal
        onSubmit={handleForm}
        mounted={!mounted}
      />}
    </div>
  )
}

export default App;
