import "./styles.css";

import React from "react";

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
import { useState } from "react";
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"

export default function App() {
  const [showbox, setShowbox] = useState(false);

  function setShowBoxTrue() {
    setShowbox(true);
  }

  function setShowBoxFalse(params) {
    setShowbox(false);
  }

  return (
    <div>
      {showbox && (
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={setShowBoxFalse}>Proceed</button>
        </div>
      )}

      <button onClick={setShowBoxTrue}>Delete</button>
    </div>
  );
}
