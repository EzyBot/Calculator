import React from 'react';
import './App.css';

const Display = ({ expression, result }) => {
  return (
    <div className="display">
      <div className="expression">{expression}</div>
      <div className="result">{result}</div>
    </div>
  );
};

export default Display;
