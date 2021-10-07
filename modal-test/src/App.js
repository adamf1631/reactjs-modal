import "./App.css";
import React, { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="main">
      <button onClick={() => setShow(!show)}>Fill out form</button>
      <Modal onClose={() => setShow(!show)} show={show} />
    </div>
  );
}

export default App;

const Modal = ({ show, onClose }) => {
  const [name, setName] = useState("");

  if (!show) {
    return null;
  }

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="inner" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={formSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <button type="submit">Send</button>
        </form>
        <button onClick={onClose}>&times; close</button>
      </div>
    </div>
  );
};
